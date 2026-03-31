import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-theme text-theme">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            🎯 WoohAI Event - Full Day Workshop
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Learn the fundamentals of Artificial Intelligence with industry experts
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/schedule"
              className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition"
            >
              📅 View Schedule
            </Link>
            <Link 
              href="/register"
              className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition"
            >
              ✍️ Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-panel text-theme">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About This Event</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Join us for an intensive full-day workshop covering AI basics and practical applications. 
                This event is perfect for beginners and professionals looking to understand the fundamentals 
                of Artificial Intelligence.
              </p>
              <p className="text-lg text-gray-700">
                With 15 sessions throughout the day, led by industry experts, you'll gain hands-on experience 
                and practical knowledge that you can apply immediately.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">📊 Event Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Date:</strong> March 30, 2026</li>
                <li><strong>Duration:</strong> Full Day (9 AM - 11 PM)</li>
                <li><strong>Format:</strong> Hybrid (In-person + Online)</li>
                <li><strong>Attendees:</strong> Up to 100</li>
                <li><strong>Sessions:</strong> 15 sessions</li>
                <li><strong>Certificate:</strong> Yes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Attend?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-3">Learn from Experts</h3>
              <p className="text-gray-600">15 industry experts sharing their knowledge and experience in AI.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-3">Network</h3>
              <p className="text-gray-600">Connect with like-minded professionals and expand your network.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-2xl font-bold mb-3">Get Certified</h3>
              <p className="text-gray-600">Receive a digital certificate upon completion of the workshop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-theme">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Join the AI Revolution?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Secure your spot now and start your AI learning journey
          </p>
          <Link 
            href="/register"
            className="bg-white text-blue-600 px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition inline-block"
          >
            Register Now →
          </Link>
        </div>
      </section>
    </div>
  )
}
