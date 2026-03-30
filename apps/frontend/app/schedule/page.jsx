'use client'

import { useState, useEffect } from 'react'
import ScheduleItem from '@/components/ScheduleItem'

export default function SchedulePage() {
  const [schedule, setSchedule] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [expanded, setExpanded] = useState({})

  useEffect(() => {
    // TODO: Fetch from API
    // For now, using mock data
    const mockSchedule = [
      {
        time: "9:00",
        topic: "Knowing the basic about IA",
        speaker: "John Smith",
        details:
          "Introducción funcional a IA: historie, componentes y cómo construir un pipeline simple para detección de patrones en datos reales. Incluye mini-demo en Python con scikit-learn."
      },
      {
        time: "10:00",
        topic: "Machine Learning Fundamentals",
        speaker: "Sarah Johnson",
        details:
          "Fundamentos de ML: regresión, clasificación y validación cruzada. Ejemplo de caso de uso de predicción de churn con datasets de e-commerce."
      },
      {
        time: "11:00",
        topic: "Deep Learning Introduction",
        speaker: "Michael Chen",
        details:
          "Bases de redes neuronales profundas y arquitectura CNN para visión computacional. Se construye modelo en TensorFlow para reconocer objetos simples."
      },
      {
        time: "12:00",
        topic: "Lunch Break",
        speaker: "",
        details: "Pausa para almuerzo y networking con alimentos saludables y café." 
      },
      {
        time: "13:00",
        topic: "Neural Networks",
        speaker: "Emma Wilson",
        details:
          "Exploración avanzada de redes neuronales recurrentes y LSTM para series temporales y texto. Mini-proyecto: predicción de demanda energética."
      },
      {
        time: "14:00",
        topic: "Natural Language Processing",
        speaker: "David Brown",
        details:
          "Pipeline de NLP: tokenización, word embeddings y transformers. Implementación de clasificador de sentimientos usando Hugging Face."
      },
      {
        time: "15:00",
        topic: "Computer Vision Basics",
        speaker: "Lisa Garcia",
        details:
          "Procesamiento de imágenes con OpenCV, detección de bordes y segmentación. App demo: detección de personas en video en tiempo real."
      },
      {
        time: "16:00",
        topic: "Coffee Break",
        speaker: "",
        details: "Pausa para café con networking ligero y oportunidades de conexión." 
      },
      {
        time: "17:00",
        topic: "Reinforcement Learning",
        speaker: "James Wilson",
        details:
          "RL práctico: agentes en entornos OpenAI Gym. Ejemplo de Q-learning en control de carrito de pole."
      },
      {
        time: "18:00",
        topic: "AI Ethics",
        speaker: "Rachel Lee",
        details:
          "Ética en IA: sesgos, privacidad y responsabilidad. Mesa redonda sobre legislación y confianza de usuario."
      },
      {
        time: "19:00",
        topic: "Dinner",
        speaker: "",
        details: "Cena de networking con menús variados y discusión en mesas temáticas." 
      },
      {
        time: "20:00",
        topic: "Real-world AI Applications",
        speaker: "Tom Harris",
        details:
          "Casos reales de IA en finanzas, salud y manufactura con métricas de ROI y lecciones aprendidas."
      },
      {
        time: "21:00",
        topic: "Q&A Panel",
        speaker: "All Speakers",
        details:
          "Sesión interactiva final para preguntas, demos en vivo y roadmap de aprendizaje post-evento."
      },
    ]
    setSchedule(mockSchedule)
    setLoading(false)
  }, [])

  const toggleExpanded = (index) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const filtered = schedule.filter(item =>
    item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-theme text-theme">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">📅 Event Schedule</h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search by topic or speaker..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Schedule Items */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Loading schedule...</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-4">
            {filtered.length > 0 ? (
              filtered.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-lg text-gray-500">{item.time}</p>
                      <h3 className="text-2xl font-bold">{item.topic}</h3>
                      <p className="text-sm text-gray-600">{item.speaker || 'Break'}</p>
                    </div>
                  </div>
                  {expanded[index] && (
                    <p className="text-gray-700 mb-4">{item.details}</p>
                  )}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    {expanded[index] ? 'Ver menos' : 'Ver más'}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No results found</p>
            )}
          </div>
        )}

        {/* Summary */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">📊 Schedule Summary</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Total Sessions:</strong> {schedule.filter(s => s.speaker).length} sessions + breaks</li>
            <li><strong>Speakers:</strong> 15+ industry experts</li>
            <li><strong>Duration:</strong> 12 hours (9 AM - 9 PM)</li>
            <li><strong>Format:</strong> Live + Interactive Q&A</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
