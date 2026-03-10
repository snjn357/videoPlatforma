'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Menu, X, GraduationCap } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  onMenuToggle?: () => void
  isSidebarOpen?: boolean
}

export function Navbar({ onMenuToggle, isSidebarOpen }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-card px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuToggle}
          aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden text-xl font-semibold text-foreground sm:inline-block">
            Видео и аудио платформа
          </span>
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 lg:px-8">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary pl-10 pr-4"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
          <Link href="/">Browse</Link>
        </Button>
      </div>
    </header>
  )
}
