import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MainLayout } from '@/components/main-layout'
import { LessonPlayer } from './lesson-player'
import { PlaylistPanel } from '@/components/playlist-panel'
import { LessonCard } from '@/components/lesson-card'
import {
  getLessonById,
  getPlaylistById,
  getLessonsByPlaylist,
  getRelatedLessons,
} from '@/lib/data'
import { ChevronRight, Video, Headphones } from 'lucide-react'

interface LessonPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { id } = await params
  const lesson = getLessonById(id)
  if (!lesson) return { title: 'Lesson Not Found' }
  return {
    title: `${lesson.title} | EduLearn`,
    description: lesson.description,
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id } = await params
  const lesson = getLessonById(id)
  if (!lesson) notFound()

  const playlist = getPlaylistById(lesson.playlistId)
  const playlistLessons = playlist ? getLessonsByPlaylist(playlist.id) : []
  const relatedLessons = getRelatedLessons(lesson, 4)

  const currentIndex = playlistLessons.findIndex((l) => l.id === lesson.id)
  const previousLesson = currentIndex > 0 ? playlistLessons[currentIndex - 1] : null
  const nextLesson =
    currentIndex < playlistLessons.length - 1 ? playlistLessons[currentIndex + 1] : null

  return (
    <MainLayout showSidebar={false}>
      <div className="p-4 lg:p-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/subject/${lesson.subjectSlug}`} className="hover:text-foreground">
            {lesson.subject}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Grade {lesson.grade}</span>
        </nav>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="flex-1">
            {/* Media Player */}
            <LessonPlayer
              lesson={lesson}
              previousLessonId={previousLesson?.id}
              nextLessonId={nextLesson?.id}
            />

            {/* Lesson Info */}
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {lesson.mediaType === 'video' ? (
                    <Video className="h-4 w-4" />
                  ) : (
                    <Headphones className="h-4 w-4" />
                  )}
                  {lesson.mediaType === 'video' ? 'Video' : 'Audio'} Lesson
                </span>
                <span className="text-sm text-muted-foreground">
                  {lesson.subject} • Grade {lesson.grade} • {lesson.duration}
                </span>
              </div>
              <h1 className="mt-4 text-2xl font-bold text-foreground lg:text-3xl">
                {lesson.title}
              </h1>
              <p className="mt-4 leading-relaxed text-muted-foreground">{lesson.description}</p>

              {playlist && (
                <div className="mt-4 rounded-lg bg-secondary/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    Part of playlist:{' '}
                    <span className="font-medium text-foreground">{playlist.title}</span>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Lesson {currentIndex + 1} of {playlistLessons.length}
                  </p>
                </div>
              )}
            </div>

            {/* Related Lessons */}
            {relatedLessons.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">Related Lessons</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {relatedLessons.map((relatedLesson) => (
                    <LessonCard
                      key={relatedLesson.id}
                      lesson={relatedLesson}
                      variant="compact"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Playlist Sidebar */}
          {playlist && playlistLessons.length > 1 && (
            <div className="w-full lg:w-96">
              <PlaylistPanel
                playlist={playlist}
                lessons={playlistLessons}
                currentLessonId={lesson.id}
              />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
