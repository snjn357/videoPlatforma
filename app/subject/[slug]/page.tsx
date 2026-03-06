import { notFound } from 'next/navigation'
import { MainLayout } from '@/components/main-layout'
import { LessonGrid } from '@/components/lesson-grid'
import { getLessonsBySubject, getSubjectBySlug, grades, playlists } from '@/lib/data'
import {
  Calculator,
  FlaskConical,
  Globe,
  BookOpen,
  BookText,
  Music,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator: Calculator,
  Flask: FlaskConical,
  Globe: Globe,
  Book: BookText,
  BookOpen: BookOpen,
  Music: Music,
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  mathematics: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  science: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
  geography: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
  history: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
  english: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
  music: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' },
}

interface SubjectPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ grade?: string }>
}

export async function generateMetadata({ params }: SubjectPageProps) {
  const { slug } = await params
  const subject = getSubjectBySlug(slug)
  if (!subject) return { title: 'Subject Not Found' }
  return {
    title: `${subject.name} Lessons | EduLearn`,
    description: `Browse ${subject.name} video and audio lessons for all grades`,
  }
}

export default async function SubjectPage({ params, searchParams }: SubjectPageProps) {
  const { slug } = await params
  const { grade } = await searchParams
  
  const subject = getSubjectBySlug(slug)
  if (!subject) notFound()

  const Icon = iconMap[subject.icon] || BookOpen
  const colors = colorMap[slug] || { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border' }

  let lessons = getLessonsBySubject(slug)
  const selectedGrade = grade ? parseInt(grade) : null

  if (selectedGrade) {
    lessons = lessons.filter((lesson) => lesson.grade === selectedGrade)
  }

  const subjectPlaylists = playlists.filter((p) => p.subjectSlug === slug)

  return (
    <MainLayout>
      <div className="p-4 lg:p-8">
        {/* Subject Header */}
        <section className={cn('mb-8 rounded-2xl border p-8', colors.bg, colors.border)}>
          <div className="flex items-center gap-4">
            <div className={cn('flex h-16 w-16 items-center justify-center rounded-xl bg-card shadow-sm')}>
              <Icon className={cn('h-8 w-8', colors.text)} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{subject.name}</h1>
              <p className="mt-1 text-muted-foreground">
                {lessons.length} lessons available
                {selectedGrade && ` for Grade ${selectedGrade}`}
              </p>
            </div>
          </div>
        </section>

        {/* Grade Filter */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Filter by Grade</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/subject/${slug}`}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                !selectedGrade
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              )}
            >
              All Grades
            </Link>
            {grades.map((g) => (
              <Link
                key={g.number}
                href={`/subject/${slug}?grade=${g.number}`}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  selectedGrade === g.number
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}
              >
                {g.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Playlists */}
        {subjectPlaylists.length > 0 && !selectedGrade && (
          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Playlists</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subjectPlaylists.map((playlist) => (
                <Link
                  key={playlist.id}
                  href={`/lesson/${playlist.lessons[0]}`}
                  className="rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-semibold text-card-foreground">{playlist.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Grade {playlist.grade} • {playlist.lessons.length} lessons
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Lessons Grid */}
        <LessonGrid
          lessons={lessons}
          title={selectedGrade ? `Grade ${selectedGrade} Lessons` : 'All Lessons'}
        />
      </div>
    </MainLayout>
  )
}
