import { invitationData } from '../data/invitacionData'

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-bg flex flex-col justify-between items-center overflow-hidden py-12 px-6">
      <div className="flex-1 flex flex-col items-center justify-center text-center z-10 max-w-sm">
        {/* Fecha arriba */}
        <span className="text-white text-lg tracking-[0.2em] font-light mb-2">
          {invitationData.fechaTexto}
        </span>
        {/* Línea superior */}
        <div className="w-48 h-px bg-primary mb-4"></div>
        {/* Nombre - Usamos font-serif para el estilo elegante */}
        <h1 className="text-white text-7xl font-serif font-medium tracking-tight mb-4">
          {invitationData.nombre}
        </h1>
        {/* Línea inferior */}
        <div className="w-48 h-0.5 bg-primary mb-6"></div>
        {/* Subtítulo en color cian/celular */}
        <h2 className="text-cyan-400 text-2xl tracking-widest font-light mb-12">
          {invitationData.tipo}
        </h2>
        {/* Frase Invitación */}
        <p className="text-white/90 text-lg leading-relaxed font-light px-4">
          {invitationData.frase}
        </p>
      </div>
      {/* --- Fondo con Estrellas/Brillos --- */}
    </section>
  )
}

export default Hero
