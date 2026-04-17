import React from 'react'

interface FooterProps {
  devName: string
  socialLink: string
}

export const Footer: React.FC<FooterProps> = ({ devName, socialLink }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-black pt-5 pb-2 px-6 mt-0 text-center relative">
      {/* Línea superior divisoria en color Cian principal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-cyan-400/40"></div>

      <div className="flex flex-col items-center gap-4">
        {/* Texto principal simplificado */}
        <div className="text-white/50 text-sm font-light tracking-widest uppercase font-cormorant">
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
        <p className="text-white/20 text-[9px] tracking-widest mt-0.5 font-raleway">
          © {currentYear} . ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}
