'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function GalleryPage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    // TODO: Fetch from API
    const mockImages = [
      { id: 1, title: "Workshop 2024 - Opening", url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" },
      { id: 2, title: "Panel Discussion", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" },
      { id: 3, title: "Networking Break", url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" },
      { id: 4, title: "Live Demo Session", url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" },
      { id: 5, title: "Audience Q&A", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" },
      { id: 6, title: "Closing Ceremony", url: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=800&q=80" },
    ]
    setImages(mockImages)
    setLoading(false)
  }, [])

  return (
    <div className="min-h-screen bg-theme text-theme">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-4 text-center">🖼️ Event Gallery</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Relive the moments from our previous events. Check out the highlights, keynotes, and networking sessions.
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Loading gallery...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                  <p className="text-white text-center font-bold opacity-0 group-hover:opacity-100 transition">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xl font-bold">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
