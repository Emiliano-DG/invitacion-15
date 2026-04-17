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

export const EventDetails: React.FC<EventSectionProps> = ({
  fecha,
  hora,
  salon,
  direccion,
  googleMapsLink,
  whatsappLink,
}) => {
  return (
    <section className="bg-bg-black py-12 px-8 flex justify-center">
      {/* Tarjeta Principal con borde Cian */}
      <div className="w-full max-w-sm border border-primary/50 rounded-[40px] bg-card-bg p-10 flex flex-col items-center text-center backdrop-blur-sm">
        {/* Icono superior (Copa/Fiesta) */}
        <div className="text-primary text-5xl mb-4 font-light">🪩</div>

        <h2 className="text-white text-6xl font-cormorant mb-10 tracking-wide">
          Fiesta
        </h2>

        {/* Sección Día */}
        {/* <div className="mb-10 w-full">
          <h3 className="text-primary text-2xl font-light mb-2">Día</h3>
          <p className="text-white font-light mb-4">
            {fecha} - {hora}
          </p>
        </div> */}
        {/* --- SECCIÓN DÍA: Con recuadro para que no quede vacío --- */}
        <div className="mb-12 w-full flex flex-col items-center">
          <h3 className="text-primary text-4xl font-light mb-4 font-cormorant">
            Día
          </h3>
          <div className="w-full py-4 px-2 border border-dashed border-primary/30 rounded-2xl bg-primary/5">
            <p className="text-white font-raleway text-xl tracking-tight leading-none">
              {fecha}
            </p>
            <p className="text-primary/80 text-sm mt-2 font-light italic font-raleway">
              — {hora} —
            </p>
          </div>
        </div>

        {/* Sección Lugar */}
        <div className="mb-10 w-full">
          <h3 className="text-primary text-4xl font-light mb-2 font-cormorant">
            Lugar
          </h3>
          <p className="text-white font-light mb-4 font-raleway">{salon}</p>
          <a
            href={whatsappLink}
            className="inline-block w-full py-2 px-6 bg-primary text-white rounded-lg font-light font-raleway text-base shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95 transition"
          >
            Confirmar asistencia
          </a>
        </div>

        {/* Sección Dirección */}
        <div className="w-full">
          <h3 className="text-primary text-4xl font-light mb-2 font-cormorant">
            Dirección
          </h3>
          <p className="text-white font-light mb-4 whitespace-pre-line font-raleway">
            {direccion}
          </p>
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full py-2 px-6 bg-primary text-white font-raleway rounded-lg font-light text-base shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95 transition"
          >
            ¿Cómo llegar?
          </a>
        </div>
      </div>
    </section>
  )
}
