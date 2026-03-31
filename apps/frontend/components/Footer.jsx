import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface text-theme mt-12 border-t border-theme">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">🎯 WoohAI Event</h3>
            <p className="text-muted">Learn the fundamentals of Artificial Intelligence with industry experts.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted">
              <li><Link href="/schedule" className="nav-link">Schedule</Link></li>
              <li><Link href="/speakers" className="nav-link">Speakers</Link></li>
              <li><Link href="/gallery" className="nav-link">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted">
              <li><Link href="/register" className="nav-link">Register</Link></li>
              <li><a href="#" className="nav-link">FAQ</a></li>
              <li><a href="#" className="nav-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-muted">
              <li><a href="#" className="nav-link">Twitter</a></li>
              <li><a href="#" className="nav-link">LinkedIn</a></li>
              <li><a href="#" className="nav-link">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-theme" />
        <div className="pt-8 text-center text-muted">
          <p>&copy; {currentYear} WoohAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
