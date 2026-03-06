'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Calculator,
  FlaskConical,
  Globe,
  BookOpen,
  BookText,
  Music,
  Home,
  ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { grades, subjects } from '@/lib/data'
import { useState } from 'react'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator: Calculator,
  Flask: FlaskConical,
  Globe: Globe,
  Book: BookText,
  BookOpen: BookOpen,
  Music: Music,
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [expandedGrade, setExpandedGrade] = useState<number | null>(null)

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform overflow-y-auto border-r border-border bg-sidebar transition-transform duration-200 ease-in-out lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <nav className="p-4">
          {/* Home */}
          <Link
            href="/"
            onClick={onClose}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              pathname === '/'
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
            )}
          >
            <Home className="h-5 w-5" />
            Home
          </Link>

          {/* Subjects Section */}
          <div className="mt-6">
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Subjects
            </h3>
            <ul className="space-y-1">
              {subjects.map((subject) => {
                const Icon = iconMap[subject.icon] || BookOpen
                const isActive = pathname === `/subject/${subject.slug}`
                return (
                  <li key={subject.slug}>
                    <Link
                      href={`/subject/${subject.slug}`}
                      onClick={onClose}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {subject.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Grades Section */}
          <div className="mt-6">
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Grades
            </h3>
            <ul className="space-y-1">
              {grades.map((grade) => (
                <li key={grade.number}>
                  <button
                    onClick={() =>
                      setExpandedGrade(expandedGrade === grade.number ? null : grade.number)
                    }
                    className={cn(
                      'flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      expandedGrade === grade.number
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                    )}
                  >
                    <span>{grade.label}</span>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        expandedGrade === grade.number && 'rotate-180'
                      )}
                    />
                  </button>
                  {expandedGrade === grade.number && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                      {subjects.map((subject) => {
                        const Icon = iconMap[subject.icon] || BookOpen
                        return (
                          <li key={subject.slug}>
                            <Link
                              href={`/subject/${subject.slug}?grade=${grade.number}`}
                              onClick={onClose}
                              className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                            >
                              <Icon className="h-4 w-4" />
                              {subject.name}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  )
}
