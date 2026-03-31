import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="bg-theme shadow border-b border-theme">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          🎯 WoohAI Event
        </Link>

        <div className="flex items-center gap-4">
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link href="/schedule" className="nav-link">Schedule</Link>
            </li>
            <li>
              <Link href="/speakers" className="nav-link">Speakers</Link>
            </li>
            <li>
              <Link href="/gallery" className="nav-link">Gallery</Link>
            </li>
          </ul>

          <ThemeToggle />

          <Link
            href="/register"
            className="btn-primary"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  )
}
