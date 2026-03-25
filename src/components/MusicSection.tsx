import React from 'react'

interface MusicSectionProps {
  playlistLink: string
}

export const MusicSection: React.FC<MusicSectionProps> = ({ playlistLink }) => {
  return (
    <section className="bg-[#0a0a0a] py-16 px-6 flex flex-col items-center">
      {/* Título de la Sección */}
      <div className="text-center mb-10">
        <h2 className="text-white text-4xl font-serif mb-2 tracking-wide">
          Fiesta
        </h2>
        <p className="text-cyan-400 text-sm font-light px-4">
          Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en
          cuenta.
        </p>
      </div>

      {/* Tarjeta de Música Única */}
      <div className="w-full max-w-sm border border-cyan-400/50 rounded-[40px] bg-stone-900/40 p-10 flex flex-col items-center text-center backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.1)]">
        <h3 className="text-white text-2xl font-serif mb-6">Música</h3>

        {/* Icono de Notas Musicales (SVG para que sea igual a la foto) */}
        <div className="mb-8">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cyan-400"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </div>

        <p className="text-white/80 font-light text-sm mb-10 leading-relaxed">
          ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
        </p>

        {/* Botón de Acción */}
        <a
          href={playlistLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-cyan-500 text-white rounded-xl font-light text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95 transition-all"
        >
          Sugerir canción
        </a>
      </div>
    </section>
  )
}
