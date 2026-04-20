import React from 'react'

interface EventSectionProps {
  fecha: string
  hora: string
  salon: string
  direccion: string
  googleMapsLink: string
  whatsappLink: string
  calendarLink?: string
}

export const EventDetails = ({
  fecha,
  hora,
  salon,
  direccion,
  googleMapsLink,
  whatsappLink,
}) => {
  return (
    <section className="bg-bg-black py-12 px-4 md:px-8 lg:px-12 flex justify-center border-b border-primary">
      {/* Tarjeta Principal con borde Cian */}
      <div className="w-full max-w-2xl border border-primary/50 rounded-[40px] bg-card-bg p-8 md:p-12 lg:p-16 flex flex-col items-center text-center backdrop-blur-sm">
        {/* Icono superior (Copa/Fiesta) */}
        <div className="text-primary text-5xl md:text-6xl mb-4 font-light">
          🪩
        </div>

        <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-cormorant mb-8 md:mb-10 tracking-wide">
          Fiesta
        </h2>

        {/* Sección Día */}
        <div className="mb-8 md:mb-12 w-full flex flex-col items-center">
          <h3 className="text-primary text-3xl md:text-4xl font-light mb-4 font-cormorant">
            Día
          </h3>
          <div className="w-full py-4 px-2 md:px-4 border border-dashed border-primary/30 rounded-2xl bg-primary/5">
            <p className="text-white font-raleway text-lg md:text-xl tracking-tight leading-none">
              {fecha}
            </p>
            <p className="text-primary/80 text-sm md:text-base mt-2 font-light italic font-raleway">
              — {hora} —
            </p>
          </div>
        </div>

        {/* Sección Lugar */}
        <div className="mb-8 md:mb-10 w-full">
          <h3 className="text-primary text-3xl md:text-4xl font-light mb-2 md:mb-4 font-cormorant">
            Lugar
          </h3>
          <p className="text-white font-light mb-4 font-raleway text-base md:text-lg">
            {salon}
          </p>
          <a
            href={whatsappLink}
            className="inline-block w-full py-2 md:py-3 px-6 bg-primary text-white rounded-lg font-light font-raleway text-base md:text-lg shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95 transition hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
          >
            Confirmar asistencia
          </a>
        </div>

        {/* Sección Dirección */}
        <div className="w-full">
          <h3 className="text-primary text-3xl md:text-4xl font-light mb-2 md:mb-4 font-cormorant">
            Dirección
          </h3>
          <p className="text-white font-light mb-4 whitespace-pre-line font-raleway text-base md:text-lg">
            {direccion}
          </p>
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full py-2 md:py-3 px-6 bg-primary text-white font-raleway rounded-lg font-light text-base md:text-lg shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95 transition hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
          >
            ¿Cómo llegar?
          </a>
        </div>
      </div>
    </section>
  )
}
