import { Lesson, Playlist, Subject, Grade } from './types'

export const grades: Grade[] = [
  { number: 1, label: '1. разред' },
  { number: 2, label: '2. разред' },
  { number: 3, label: '3. разред' },
  { number: 4, label: '4. разред' },
  { number: 5, label: '5. разред' },
  { number: 6, label: '6. разред' },
]

export const subjects: Subject[] = [
  { name: 'Математика', slug: 'mathematics', icon: 'Calculator', color: 'bg-blue-500' },
  { name: 'Биологија', slug: 'science', icon: 'Flask', color: 'bg-green-500' },
  { name: 'Географија', slug: 'geography', icon: 'Globe', color: 'bg-amber-500' },
  { name: 'Историја', slug: 'history', icon: 'Book', color: 'bg-rose-500' },
  { name: 'Енглески', slug: 'english', icon: 'BookOpen', color: 'bg-indigo-500' },
  { name: 'Mузичко', slug: 'music', icon: 'Music', color: 'bg-pink-500' },
]

export const playlists: Playlist[] = [
  {
    id: 'pl-math-fractions',
    title: 'Understanding Fractions',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 5,
    lessons: ['lesson-1', 'lesson-2', 'lesson-3'],
  },
  {
    id: 'pl-geo-rivers',
    title: 'Rivers of the World',
    subject: 'Geography',
    subjectSlug: 'geography',
    grade: 6,
    lessons: ['lesson-4', 'lesson-5', 'lesson-6'],
  },
  {
    id: 'pl-science-plants',
    title: 'Plant Biology',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 4,
    lessons: ['lesson-7', 'lesson-8', 'lesson-9'],
  },
  {
    id: 'pl-history-ancient',
    title: 'Ancient Civilizations',
    subject: 'History',
    subjectSlug: 'history',
    grade: 6,
    lessons: ['lesson-10', 'lesson-11', 'lesson-12'],
  },
  {
    id: 'pl-english-grammar',
    title: 'Grammar Basics',
    subject: 'English',
    subjectSlug: 'english',
    grade: 3,
    lessons: ['lesson-13', 'lesson-14', 'lesson-15'],
  },
  {
    id: 'pl-music-instruments',
    title: 'Musical Instruments',
    subject: 'Music',
    subjectSlug: 'music',
    grade: 2,
    lessons: ['lesson-16', 'lesson-17', 'lesson-18'],
  },
]

export const lessons: Lesson[] = [
  // Mathematics - Fractions
  {
    id: 'lesson-1',
    title: 'Introduction to Fractions',
    description: 'Learn the basics of fractions, including numerators and denominators. This lesson covers what fractions represent and how to read them correctly.',
    thumbnail: '/thumbnails/math-1.jpg',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 5,
    duration: '12:34',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    playlistId: 'pl-math-fractions',
    order: 1,
  },
  {
    id: 'lesson-2',
    title: 'Adding and Subtracting Fractions',
    description: 'Master the techniques for adding and subtracting fractions with like and unlike denominators.',
    thumbnail: '/thumbnails/math-2.jpg',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 5,
    duration: '15:22',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    playlistId: 'pl-math-fractions',
    order: 2,
  },
  {
    id: 'lesson-3',
    title: 'Multiplying Fractions',
    description: 'Understand how to multiply fractions and simplify your answers to their lowest terms.',
    thumbnail: '/thumbnails/math-3.jpg',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 5,
    duration: '14:08',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    playlistId: 'pl-math-fractions',
    order: 3,
  },
  // Geography - Rivers
  {
    id: 'lesson-4',
    title: 'The Amazon River',
    description: 'Explore the Amazon River, the largest river by volume in the world, and learn about its ecosystem.',
    thumbnail: '/thumbnails/geo-1.jpg',
    subject: 'Geography',
    subjectSlug: 'geography',
    grade: 6,
    duration: '18:45',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    playlistId: 'pl-geo-rivers',
    order: 1,
  },
  {
    id: 'lesson-5',
    title: 'The Nile River',
    description: 'Discover the Nile River, the longest river in the world, and its importance to ancient civilizations.',
    thumbnail: '/thumbnails/geo-2.jpg',
    subject: 'Geography',
    subjectSlug: 'geography',
    grade: 6,
    duration: '16:30',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    playlistId: 'pl-geo-rivers',
    order: 2,
  },
  {
    id: 'lesson-6',
    title: 'Rivers and Climate',
    description: 'Learn how rivers affect local and global climate patterns and their role in the water cycle.',
    thumbnail: '/thumbnails/geo-3.jpg',
    subject: 'Geography',
    subjectSlug: 'geography',
    grade: 6,
    duration: '14:15',
    mediaType: 'audio',
    mediaUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    playlistId: 'pl-geo-rivers',
    order: 3,
  },
  // Science - Plants
  {
    id: 'lesson-7',
    title: 'Parts of a Plant',
    description: 'Identify and understand the different parts of a plant and their functions.',
    thumbnail: '/thumbnails/science-1.jpg',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 4,
    duration: '11:20',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    playlistId: 'pl-science-plants',
    order: 1,
  },
  {
    id: 'lesson-8',
    title: 'Photosynthesis Explained',
    description: 'Understand the process of photosynthesis and how plants make their own food.',
    thumbnail: '/thumbnails/science-2.jpg',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 4,
    duration: '13:55',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    playlistId: 'pl-science-plants',
    order: 2,
  },
  {
    id: 'lesson-9',
    title: 'Plant Life Cycle',
    description: 'Follow the journey of a plant from seed to mature plant and back to seed again.',
    thumbnail: '/thumbnails/science-3.jpg',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 4,
    duration: '10:42',
    mediaType: 'audio',
    mediaUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    playlistId: 'pl-science-plants',
    order: 3,
  },
  // History - Ancient Civilizations
  {
    id: 'lesson-10',
    title: 'Ancient Egypt',
    description: 'Explore the wonders of Ancient Egypt, from pyramids to pharaohs.',
    thumbnail: '/thumbnails/history-1.jpg',
    subject: 'History',
    subjectSlug: 'history',
    grade: 6,
    duration: '20:15',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    playlistId: 'pl-history-ancient',
    order: 1,
  },
  {
    id: 'lesson-11',
    title: 'Ancient Greece',
    description: 'Discover the birthplace of democracy and philosophy in Ancient Greece.',
    thumbnail: '/thumbnails/history-2.jpg',
    subject: 'History',
    subjectSlug: 'history',
    grade: 6,
    duration: '18:40',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    playlistId: 'pl-history-ancient',
    order: 2,
  },
  {
    id: 'lesson-12',
    title: 'The Roman Empire',
    description: 'Learn about the rise and fall of one of history\'s greatest empires.',
    thumbnail: '/thumbnails/history-3.jpg',
    subject: 'History',
    subjectSlug: 'history',
    grade: 6,
    duration: '22:30',
    mediaType: 'audio',
    mediaUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    playlistId: 'pl-history-ancient',
    order: 3,
  },
  // English - Grammar
  {
    id: 'lesson-13',
    title: 'Nouns and Pronouns',
    description: 'Learn to identify and use nouns and pronouns correctly in sentences.',
    thumbnail: '/thumbnails/english-1.jpg',
    subject: 'English',
    subjectSlug: 'english',
    grade: 3,
    duration: '9:45',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    playlistId: 'pl-english-grammar',
    order: 1,
  },
  {
    id: 'lesson-14',
    title: 'Verbs and Tenses',
    description: 'Master the use of verbs and understand different tenses.',
    thumbnail: '/thumbnails/english-2.jpg',
    subject: 'English',
    subjectSlug: 'english',
    grade: 3,
    duration: '11:30',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    playlistId: 'pl-english-grammar',
    order: 2,
  },
  {
    id: 'lesson-15',
    title: 'Adjectives and Adverbs',
    description: 'Enhance your writing by learning to use adjectives and adverbs effectively.',
    thumbnail: '/thumbnails/english-3.jpg',
    subject: 'English',
    subjectSlug: 'english',
    grade: 3,
    duration: '10:20',
    mediaType: 'audio',
    mediaUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    playlistId: 'pl-english-grammar',
    order: 3,
  },
  // Music - Instruments
  {
    id: 'lesson-16',
    title: 'String Instruments',
    description: 'Discover the world of string instruments from violins to guitars.',
    thumbnail: '/thumbnails/music-1.jpg',
    subject: 'Music',
    subjectSlug: 'music',
    grade: 2,
    duration: '8:15',
    mediaType: 'audio',
    mediaUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    playlistId: 'pl-music-instruments',
    order: 1,
  },
  {
    id: 'lesson-17',
    title: 'Wind Instruments',
    description: 'Learn about flutes, trumpets, and other wind instruments.',
    thumbnail: '/thumbnails/music-2.jpg',
    subject: 'Music',
    subjectSlug: 'music',
    grade: 2,
    duration: '9:30',
    mediaType: 'audio',
    mediaUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    playlistId: 'pl-music-instruments',
    order: 2,
  },
  {
    id: 'lesson-18',
    title: 'Percussion Instruments',
    description: 'Explore drums, xylophones, and the rhythm of percussion.',
    thumbnail: '/thumbnails/music-3.jpg',
    subject: 'Music',
    subjectSlug: 'music',
    grade: 2,
    duration: '7:45',
    mediaType: 'audio',
    mediaUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    playlistId: 'pl-music-instruments',
    order: 3,
  },
]

// Helper functions
export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id)
}

export function getLessonsBySubject(subjectSlug: string): Lesson[] {
  return lessons.filter((lesson) => lesson.subjectSlug === subjectSlug)
}

export function getLessonsByGrade(grade: number): Lesson[] {
  return lessons.filter((lesson) => lesson.grade === grade)
}

export function getLessonsByPlaylist(playlistId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.playlistId === playlistId)
    .sort((a, b) => a.order - b.order)
}

export function getPlaylistById(id: string): Playlist | undefined {
  return playlists.find((playlist) => playlist.id === id)
}

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((subject) => subject.slug === slug)
}

export function getRelatedLessons(currentLesson: Lesson, limit: number = 4): Lesson[] {
  return lessons
    .filter(
      (lesson) =>
        lesson.id !== currentLesson.id &&
        (lesson.subjectSlug === currentLesson.subjectSlug || lesson.grade === currentLesson.grade)
    )
    .slice(0, limit)
}
