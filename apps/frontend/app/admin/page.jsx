'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // TODO: Implement actual authentication
    if (email && password) {
      setIsLoggedIn(true)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-theme text-theme flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">🔐 Admin Dashboard</h1>
            <p className="text-gray-600 text-center mb-6">Login to manage the event</p>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="admin@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-theme text-theme">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">🔐 Admin Dashboard</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-bold mb-2">Total Registrations</h3>
            <p className="text-4xl font-bold text-blue-600">85</p>
            <p className="text-gray-500 text-sm mt-2">Up 12% from last week</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-bold mb-2">Tickets Issued</h3>
            <p className="text-4xl font-bold text-green-600">78</p>
            <p className="text-gray-500 text-sm mt-2">92% conversion rate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-bold mb-2">Speakers</h3>
            <p className="text-4xl font-bold text-purple-600">15</p>
            <p className="text-gray-500 text-sm mt-2">All confirmed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-bold mb-2">Days Until Event</h3>
            <p className="text-4xl font-bold text-orange-600">0</p>
            <p className="text-gray-500 text-sm mt-2">Today is the event!</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Recent Registrations */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Recent Registrations</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span>John Doe</span>
                <span className="text-green-600">✓ Verified</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Jane Smith</span>
                <span className="text-green-600">✓ Verified</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Mike Johnson</span>
                <span className="text-yellow-600">⏳ Pending</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Sarah Williams</span>
                <span className="text-green-600">✓ Verified</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-left pl-4">
                → Manage Attendees
              </button>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-left pl-4">
                → View Analytics
              </button>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-left pl-4">
                → Send Email Blast
              </button>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-left pl-4">
                → Upload Gallery
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <h3 className="font-bold text-yellow-900 mb-2">⚠️ Note</h3>
          <p className="text-yellow-800 text-sm">
            This is a placeholder dashboard. Full admin features will be implemented in Phase 5 with authentication,
            detailed analytics, attendee management, and more.
          </p>
        </div>
      </div>
    </div>
  )
}
