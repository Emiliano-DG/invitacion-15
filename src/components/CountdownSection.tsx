import { useState, useEffect } from 'react'

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
    <section className="bg-bg py-16 px-4 flex flex-col items-center justify-center text-white">
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
      <div className="mt-8 text-cyan-400 text-5xl animate-pulse">♥</div>
    </section>
  )
}
