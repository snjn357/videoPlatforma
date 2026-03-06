import { Lesson } from '@/lib/types'
import { LessonCard } from './lesson-card'

interface LessonGridProps {
  lessons: Lesson[]
  title?: string
  description?: string
}

export function LessonGrid({ lessons, title, description }: LessonGridProps) {
  if (lessons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-lg font-medium text-foreground">No lessons found</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your filters or search query
        </p>
      </div>
    )
  }

  return (
    <section>
      {(title || description) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-bold text-foreground">{title}</h2>}
          {description && <p className="mt-1 text-muted-foreground">{description}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  )
}
