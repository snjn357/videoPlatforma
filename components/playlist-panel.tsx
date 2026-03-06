'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Video, Headphones, CheckCircle, PlayCircle } from 'lucide-react'
import { Lesson, Playlist } from '@/lib/types'
import { cn } from '@/lib/utils'

interface PlaylistPanelProps {
  playlist: Playlist
  lessons: Lesson[]
  currentLessonId: string
}

export function PlaylistPanel({ playlist, lessons, currentLessonId }: PlaylistPanelProps) {
  const currentIndex = lessons.findIndex((l) => l.id === currentLessonId)

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border p-4">
        <h3 className="font-semibold text-card-foreground">{playlist.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {playlist.subject} • Grade {playlist.grade} • {lessons.length} lessons
        </p>
        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <span>
            Lesson {currentIndex + 1} of {lessons.length}
          </span>
        </div>
      </div>
      <div className="max-h-[400px] overflow-y-auto lg:max-h-[calc(100vh-400px)]">
        <ul className="divide-y divide-border">
          {lessons.map((lesson, index) => {
            const isCurrent = lesson.id === currentLessonId
            const isCompleted = index < currentIndex

            return (
              <li key={lesson.id}>
                <Link
                  href={`/lesson/${lesson.id}`}
                  className={cn(
                    'flex gap-3 p-3 transition-colors hover:bg-muted',
                    isCurrent && 'bg-primary/5'
                  )}
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                    {isCurrent ? (
                      <PlayCircle className="h-5 w-5 text-primary" />
                    ) : isCompleted ? (
                      <CheckCircle className="h-5 w-5 text-accent" />
                    ) : (
                      <span className="text-sm text-muted-foreground">{index + 1}</span>
                    )}
                  </div>
                  <div className="relative aspect-video w-24 flex-shrink-0 overflow-hidden rounded bg-muted">
                    <Image
                      src={lesson.thumbnail}
                      alt={lesson.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                    <div className="absolute bottom-0.5 right-0.5 flex items-center gap-0.5 rounded bg-foreground/80 px-1 py-0.5 text-[10px] text-background">
                      {lesson.mediaType === 'video' ? (
                        <Video className="h-2.5 w-2.5" />
                      ) : (
                        <Headphones className="h-2.5 w-2.5" />
                      )}
                      {lesson.duration}
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h4
                      className={cn(
                        'line-clamp-2 text-sm font-medium',
                        isCurrent ? 'text-primary' : 'text-card-foreground'
                      )}
                    >
                      {lesson.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-muted-foreground">{lesson.duration}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
