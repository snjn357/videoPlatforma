import { MainLayout } from '@/components/main-layout'
import { LessonGrid } from '@/components/lesson-grid'
import { lessons, subjects } from '@/lib/data'
import Link from 'next/link'
import {
  Calculator,
  FlaskConical,
  Globe,
  BookOpen,
  BookText,
  Music,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator: Calculator,
  Flask: FlaskConical,
  Globe: Globe,
  Book: BookText,
  BookOpen: BookOpen,
  Music: Music,
}

const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
  mathematics: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:bg-blue-100' },
  science: { bg: 'bg-green-50', text: 'text-green-600', hover: 'hover:bg-green-100' },
  geography: { bg: 'bg-amber-50', text: 'text-amber-600', hover: 'hover:bg-amber-100' },
  history: { bg: 'bg-rose-50', text: 'text-rose-600', hover: 'hover:bg-rose-100' },
  english: { bg: 'bg-indigo-50', text: 'text-indigo-600', hover: 'hover:bg-indigo-100' },
  music: { bg: 'bg-pink-50', text: 'text-pink-600', hover: 'hover:bg-pink-100' },
}

export default function HomePage() {
  const featuredLessons = lessons.slice(0, 8)
  const recentLessons = lessons.slice(8, 12)

  return (
    <MainLayout>
      <div className="p-4 lg:p-8">
        {/* Hero Section */}
        <section className="mb-10 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-background p-8 lg:p-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Welcome to EduLearn
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Access video and audio lessons that accompany your textbooks. Scan a QR code from your
              book or browse by subject and grade.
            </p>
          </div>
        </section>

        {/* Quick Access Subjects */}
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Browse by Subject</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {subjects.map((subject) => {
              const Icon = iconMap[subject.icon] || BookOpen
              const colors = colorMap[subject.slug] || {
                bg: 'bg-muted',
                text: 'text-muted-foreground',
                hover: 'hover:bg-muted/80',
              }
              return (
                <Link
                  key={subject.slug}
                  href={`/subject/${subject.slug}`}
                  className={cn(
                    'flex flex-col items-center gap-3 rounded-xl p-6 transition-colors',
                    colors.bg,
                    colors.hover
                  )}
                >
                  <Icon className={cn('h-8 w-8', colors.text)} />
                  <span className="text-sm font-medium text-foreground">{subject.name}</span>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Featured Lessons */}
        <section className="mb-10">
          <LessonGrid
            lessons={featuredLessons}
            title="Featured Lessons"
            description="Popular lessons across all subjects and grades"
          />
        </section>

        {/* Recent Additions */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Recently Added</h2>
              <p className="mt-1 text-muted-foreground">New lessons added to the library</p>
            </div>
            <Link
              href="/subject/mathematics"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recentLessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/lesson/${lesson.id}`}
                className="group block overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="p-4">
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {lesson.subject}
                  </span>
                  <h3 className="mt-2 line-clamp-2 font-semibold text-card-foreground group-hover:text-primary">
                    {lesson.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Grade {lesson.grade} • {lesson.duration}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
