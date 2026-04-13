import { invitationData } from '../data/invitacionData'
import portada from '../assets/private/portada.jpeg'
const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-bg flex flex-col justify-between items-center overflow-hidden py-12 px-6"
      style={{
        backgroundImage: `url(${portada})`,
        backgroundSize: '150% auto', // Ajusta el tamaño de la imagen para que se vea bien en diferentes pantallas
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/45 z-0" />

      <div className=" relative flex-1 flex flex-col items-center justify-center text-center z-10 max-w-sm mt-25">
        {/* Fecha arriba */}
        <span className="text-white text-lg tracking-[0.2em] font-light mb-2">
          {invitationData.fechaTexto}
        </span>
        {/* Línea superior */}
        <div className="w-36 h-px bg-cyan-400 mb-2 mt-3"></div>
        {/* Nombre - Usamos font-serif para el estilo elegante */}
        <h1 className="text-white text-7xl font-serif font-medium tracking-tight mb-4">
          {invitationData.nombre}
        </h1>
        {/* Línea inferior */}
        <div className="w-36 h-0.5 bg-cyan-400 mb-6 mt-0"></div>
        {/* Subtítulo en color cian/celular */}
        <h2 className="text-cyan-400 text-2xl tracking-widest font-bold mb-12 ">
          {invitationData.tipo}
        </h2>
        {/* Frase Invitación */}
        <p className="text-white/90 text-lg leading-relaxed font-light px-4">
          {invitationData.frase}
        </p>
      </div>
    </section>
  )
}

export default Hero
