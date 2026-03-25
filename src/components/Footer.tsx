import React from 'react'

interface FooterProps {
  devName: string
  socialLink: string
}

export const Footer: React.FC<FooterProps> = ({ devName, socialLink }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] pt-7 pb-4 px-6 mt-0 text-center relative">
      {/* Línea superior divisoria en color Cian principal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-cyan-400/40"></div>

      <div className="flex flex-col items-center gap-4">
        {/* Texto principal simplificado */}
        <div className="text-white/50 text-xs font-light tracking-widest uppercase">
          Desarrollado por{' '}
          <span className="text-white font-semibold">{devName}</span>
        </div>

        {/* Botón de red social más pequeño y compacto */}
        <a
          href={socialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-cyan-400 text-[10px] tracking-[0.2em] uppercase py-1.5 px-3 border border-cyan-400/30 rounded-md hover:bg-cyan-400/5 transition-all active:scale-95"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          Conóceme
        </a>

        {/* Copyright mínimo */}
        <p className="text-white/20 text-[9px] tracking-widest mt-2">
          © {currentYear} . ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}
