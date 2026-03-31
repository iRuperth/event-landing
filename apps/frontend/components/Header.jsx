import Link from 'next/link'

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
              <Link href="/" className="hover:text-secondary">Home</Link>
            </li>
            <li>
              <Link href="/schedule" className="hover:text-secondary">Schedule</Link>
            </li>
            <li>
              <Link href="/speakers" className="hover:text-secondary">Speakers</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-secondary">Gallery</Link>
            </li>
          </ul>

          <Link
            href="/register"
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-95"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  )
}
