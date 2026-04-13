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
          <a
            href={socialLink}
            className="text-cyan-400 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {devName}
          </a>
        </div>

        {/* Copyright mínimo */}
        <p className="text-white/20 text-[9px] tracking-widest mt-2">
          © {currentYear} . ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}
