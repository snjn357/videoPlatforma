export interface Lesson {
  id: string
  title: string
  description: string
  thumbnail: string
  subject: string
  subjectSlug: string
  grade: number
  duration: string
  mediaType: 'video' | 'audio'
  mediaUrl: string
  playlistId: string
  order: number
}

export interface Playlist {
  id: string
  title: string
  subject: string
  subjectSlug: string
  grade: number
  lessons: string[]
}

export interface Subject {
  name: string
  slug: string
  icon: string
  color: string
}

export interface Grade {
  number: number
  label: string
}
