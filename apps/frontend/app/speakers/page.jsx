'use client'

import { useEffect, useState } from 'react'
import SpeakerCard from '@/components/SpeakerCard'

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mockSpeakers = [
      { id: 1, name: "John Smith", bio: "AI Research Lead with 10+ years of experience", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", twitter: "@johnsmith", linkedin: "john-smith", instagram: "@john_smith_ai" },
      { id: 2, name: "Sarah Johnson", bio: "Machine Learning Engineer at Tech Corp", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80", twitter: "@sarahtech", linkedin: "sarah-johnson", instagram: "@sarah_ai" },
      { id: 3, name: "Michael Chen", bio: "Deep Learning Researcher & Author", photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80", twitter: "@michaelai", linkedin: "michael-chen", instagram: "@michael.chen" },
      { id: 4, name: "Emma Wilson", bio: "NLP Specialist at Data Solutions", photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80", twitter: "@emmaw", linkedin: "emma-wilson", instagram: "@emma_ai" },
      { id: 5, name: "David Brown", bio: "Computer Vision Expert", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80", twitter: "@davidbrown", linkedin: "david-brown", instagram: "@david_ai" },
      { id: 6, name: "Lisa Garcia", bio: "AI Ethics & Policy Advisor", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", twitter: "@lisaitech", linkedin: "lisa-garcia", instagram: "@lisa_garcia_ai" },
    ]
    setSpeakers(mockSpeakers)
    setLoading(false)
  }, [])

  return (
    <div className="min-h-screen bg-theme text-theme">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-4 text-center">🎤 Event Speakers</h1>
        <p className="text-xl text-muted text-center mb-12 max-w-2xl mx-auto">
          Learn from industry leaders and AI experts who will share insights, experiences, and best practices.
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted">Loading speakers...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
