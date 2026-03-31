export default function SpeakerCard({ speaker }) {
  return (
    <div className="bg-panel rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden border border-theme">
      {/* Speaker Photo */}
      <div className="h-48 bg-secondary flex items-center justify-center">
        <img 
          src={speaker.photo} 
          alt={speaker.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Speaker Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-primary">{speaker.name}</h3>
        <p className="text-theme mb-4">{speaker.bio}</p>

        {/* Social Links */}
        <div className="flex gap-4 mt-6">
          {speaker.twitter && (
            <a 
              href={`https://twitter.com/${speaker.twitter.replace('@', '')}`}
              title="Twitter"
              className="text-blue-400 hover:text-blue-600 text-lg font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              𝕏
            </a>
          )}
          {speaker.linkedin && (
            <a 
              href={`https://linkedin.com/in/${speaker.linkedin}`}
              title="LinkedIn"
              className="text-blue-700 hover:text-blue-900 font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              in
            </a>
          )}
          {speaker.instagram && (
            <a 
              href={`https://instagram.com/${speaker.instagram.replace('@', '')}`}
              title="Instagram"
              className="text-pink-600 hover:text-pink-700 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              📷
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
