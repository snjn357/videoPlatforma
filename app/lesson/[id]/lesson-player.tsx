'use client'

import { useRouter } from 'next/navigation'
import { MediaPlayer } from '@/components/media-player'
import { Lesson } from '@/lib/types'

interface LessonPlayerProps {
  lesson: Lesson
  previousLessonId?: string
  nextLessonId?: string
}

export function LessonPlayer({ lesson, previousLessonId, nextLessonId }: LessonPlayerProps) {
  const router = useRouter()

  const handleNext = () => {
    if (nextLessonId) {
      router.push(`/lesson/${nextLessonId}`)
    }
  }

  const handlePrevious = () => {
    if (previousLessonId) {
      router.push(`/lesson/${previousLessonId}`)
    }
  }

  return (
    <MediaPlayer
      lesson={lesson}
      onNext={handleNext}
      onPrevious={handlePrevious}
      hasNext={!!nextLessonId}
      hasPrevious={!!previousLessonId}
    />
  )
}
