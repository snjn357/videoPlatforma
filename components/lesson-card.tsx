import Link from 'next/link'
import Image from 'next/image'
import { Clock, Video, Headphones } from 'lucide-react'
import { Lesson } from '@/lib/types'
import { cn } from '@/lib/utils'

interface LessonCardProps {
  lesson: Lesson
  variant?: 'default' | 'compact'
}

const subjectColors: Record<string, string> = {
  mathematics: 'bg-blue-100 text-blue-700',
  science: 'bg-green-100 text-green-700',
  geography: 'bg-amber-100 text-amber-700',
  history: 'bg-rose-100 text-rose-700',
  english: 'bg-indigo-100 text-indigo-700',
  music: 'bg-pink-100 text-pink-700',
}

export function LessonCard({ lesson, variant = 'default' }: LessonCardProps) {
  const colorClasses = subjectColors[lesson.subjectSlug] || 'bg-muted text-muted-foreground'

  if (variant === 'compact') {
    return (
      <Link
        href={`/lesson/${lesson.id}`}
        className="group flex gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
      >
        <div className="relative aspect-video w-40 flex-shrink-0 overflow-hidden rounded-md bg-muted">
          <Image
            src={lesson.thumbnail}
            alt={lesson.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="160px"
          />
          <div className="absolute bottom-1 right-1 flex items-center gap-1 rounded bg-foreground/80 px-1.5 py-0.5 text-xs text-background">
            {lesson.mediaType === 'video' ? (
              <Video className="h-3 w-3" />
            ) : (
              <Headphones className="h-3 w-3" />
            )}
            {lesson.duration}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="line-clamp-2 text-sm font-medium text-foreground group-hover:text-primary">
            {lesson.title}
          </h4>
          <p className="mt-1 text-xs text-muted-foreground">
            Grade {lesson.grade} • {lesson.subject}
          </p>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/lesson/${lesson.id}`} className="group block">
      <article className="overflow-hidden rounded-xl bg-card transition-shadow hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={lesson.thumbnail}
            alt={lesson.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-foreground/80 px-2 py-1 text-xs font-medium text-background">
            {lesson.mediaType === 'video' ? (
              <Video className="h-3.5 w-3.5" />
            ) : (
              <Headphones className="h-3.5 w-3.5" />
            )}
            {lesson.duration}
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/10">
            <div className="flex h-14 w-14 scale-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-100">
              {lesson.mediaType === 'video' ? (
                <Video className="h-6 w-6" />
              ) : (
                <Headphones className="h-6 w-6" />
              )}
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <span className={cn('rounded-full px-2.5 py-0.5 text-xs font-medium', colorClasses)}>
              {lesson.subject}
            </span>
            <span className="text-xs text-muted-foreground">Grade {lesson.grade}</span>
          </div>
          <h3 className="mt-2 line-clamp-2 text-base font-semibold text-card-foreground group-hover:text-primary">
            {lesson.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{lesson.description}</p>
          <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{lesson.duration}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
