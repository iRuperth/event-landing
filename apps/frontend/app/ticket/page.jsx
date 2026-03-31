'use client'

import { useState } from 'react'

export default function TicketPage() {
  const [ticketData] = useState({
    code: 'EVT-20260330-001234',
    attendee: 'John Doe',
    email: 'john@example.com',
    eventDate: 'March 30, 2026',
    status: 'valid',
    qrCode: 'https://via.placeholder.com/200x200?text=QR+Code'
  })

  return (
    <div className="min-h-screen bg-theme text-theme py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">🎫 Your Ticket</h1>

        <div className="max-w-2xl mx-auto">
          {/* Ticket Card */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-2xl mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">🎯 AI Event</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-100 text-sm">Attendee Name</p>
                    <p className="text-xl font-bold">{ticketData.attendee}</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Email</p>
                    <p className="text-lg">{ticketData.email}</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Event Date</p>
                    <p className="text-lg font-bold">{ticketData.eventDate}</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Ticket Code</p>
                    <p className="text-sm font-mono mt-1">{ticketData.code}</p>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center justify-center bg-white p-4 rounded">
                <img
                  src={ticketData.qrCode}
                  alt="QR Code"
                  className="w-48 h-48 mb-4"
                />
                <p className="text-gray-700 text-sm text-center">Scan at the entrance</p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="bg-panel p-6 rounded-lg shadow mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Ticket Status</h3>
                <p className="text-muted">Valid & Ready</p>
              </div>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold dark:bg-green-900 dark:text-green-200">
                ✓ VALID
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-surface border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <h3 className="text-xl font-bold mb-4">📋 Event Instructions</h3>
            <ul className="space-y-2">
              <li>✓ Arrive 15 minutes before the event starts</li>
              <li>✓ Bring this ticket (digital or printed)</li>
              <li>✓ Check in at the registration desk</li>
              <li>✓ Receive your event materials and access pass</li>
              <li>✓ Enjoy the event and network with other attendees!</li>
            </ul>
          </div>

          <div className="text-center">
            <button className="btn-primary px-8 py-3">
              📥 Download Ticket (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
