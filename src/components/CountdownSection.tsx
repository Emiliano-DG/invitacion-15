import { useState, useEffect } from 'react'
import bolas from '../assets/bolas.png'

interface TimeLeft {
  días: number
  hs: number
  min: number
  seg: number
}

export const CountdownSection = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    días: 0,
    hs: 0,
    min: 0,
    seg: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date()
      if (difference > 0) {
        setTimeLeft({
          días: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hs: Math.floor((difference / (1000 * 60 * 60)) % 24),
          min: Math.floor((difference / 1000 / 60) % 60),
          seg: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section className="relative bg-bg py-20 px-4 flex flex-col items-center justify-center text-white">
      <img
        src={bolas}
        alt="decoracion"
        className="absolute top-0 left-0 w-full object-cover rotate-180"
      />
      {/* Título Principal */}
      <h2 className="text-5xl font-serif mb-10 tracking-wide">Falta</h2>

      {/* Contenedor de Números */}
      <div className="flex items-center justify-center w-full max-w-sm">
        {Object.entries(timeLeft).map(([label, value], index, array) => (
          <div key={label} className="contents">
            <div className="flex flex-col items-center px-4">
              <span className="text-4xl md:text-5xl text-cyan-400 font-light mb-2">
                {value}
              </span>
              <span className="text-sm font-light tracking-widest opacity-80">
                {label}
              </span>
            </div>

            {/* Línea Divisoria Vertical (No se muestra después del último item) */}
            {index !== array.length - 1 && (
              <div className="h-16 w-px bg-white/30 self-start mt-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* Icono de Corazón Inferior */}
      <div className="mt-8 text-cyan-400 text-5xl animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-11 h-11 text-cyan-400"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.218l-.022.012-.007.003-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      </div>
      <img
        src={bolas}
        alt="decoracion"
        className="absolute bottom-0 right-0 w-full  object-cover"
      />
    </section>
  )
}
