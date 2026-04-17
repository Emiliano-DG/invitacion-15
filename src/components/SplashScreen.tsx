import { useState } from 'react'

interface SplashScreenProps {
  onEnter: (withMusic: boolean) => void // función que recibe la elección del usuario
  nombre?: string // opcional, por si querés personalizar el mensaje de bienvenida
}

export default function SplashScreen({ onEnter, nombre }: SplashScreenProps) {
  const [visible, setVisible] = useState(true)

  const handleEnter = (withMusic: boolean) => {
    setVisible(false)
    onEnter(withMusic) // le avisás al padre qué eligió el usuario
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0d0d0d] flex items-center justify-center"
      style={{
        paddingTop: `max(12px, env(safe-area-inset-top))`,
        paddingBottom: `env(safe-area-inset-bottom)`,
      }}
    >
      <div className="text-center px-6 animate-[fadeInUp_1s_ease_forwards]">
        <p className="text-white/80 text-base tracking-[0.18em] font-light font-raleway mb-2">
          Bienvenidos a la invitación de
        </p>

        <div className="w-64 h-px bg-white/25 mx-auto mb-2" />

        <h1 className="text-[80px] font-light font-cormorant text-primary leading-none tracking-wide">
          {nombre || 'Nombre del Evento'}
        </h1>

        <div className="w-64 h-px bg-white/25 mx-auto mt-2 mb-3" />

        <p className="text-primary text-xl tracking-[0.14em] font-raleway">
          Mis XV años
        </p>

        <p className="text-white/40 text-sm font-raleway tracking-wide mt-6 mb-6">
          La música de fondo es parte de la experiencia
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => handleEnter(true)}
            className="bg-primary font-semibold font-raleway py-3 px-8 rounded-full
                       hover:opacity-85 transition-opacity min-w-[190px]"
          >
            Ingresar con música
          </button>
          <button
            onClick={() => handleEnter(false)}
            className="bg-primary font-semibold font-raleway py-3 px-8 rounded-full
                       hover:opacity-85 transition-opacity min-w-[190px]"
          >
            Ingresar sin música
          </button>
        </div>
      </div>
    </div>
  )
}
