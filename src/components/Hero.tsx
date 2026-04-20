import { invitationData } from '../data/invitacionData'
import portada from '../assets/private/portada.jpeg'
const Hero = () => {
  return (
    <section
      className="relative w-full bg-bg flex flex-col justify-center items-center overflow-hidden py-12 px-6 md:py-16 lg:py-20 h-screen md:h-auto md:min-h-96"
      style={{
        backgroundImage: `url(${portada})`,
        backgroundSize: '200% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: `max(var(--py, 3rem), env(safe-area-inset-top))`,
      }}
    >
      <div className="absolute inset-0 bg-black/35 z-0" />

      <div className=" relative flex flex-col items-center justify-center text-center z-10 max-w-sm mt-30 md:max-w-2xl">
        {/* Fecha arriba */}
        <span className="text-white text-lg md:text-xl tracking-[0.2em] font-bold mb-0.5 font-raleway">
          {invitationData.fechaTexto}
        </span>
        {/* Línea superior */}
        <div className="w-36 md:w-40 h-px bg-primary mb-2 mt-2"></div>
        {/* Nombre - Usamos font-serif para el estilo elegante */}
        <h1 className="text-white text-7xl md:text-6xl lg:text-7xl font-cormorant font-medium tracking-tight mb-4">
          {invitationData.nombre}
        </h1>
        {/* Línea inferior */}
        <div className="w-36 md:w-40 h-0.5 bg-primary mb-6 mt-0"></div>
        {/* Subtítulo en color cian/celular */}
        <h2 className="text-primary text-2xl md:text-2xl tracking-widest font-bold mb-12 font-raleway">
          {invitationData.tipo}
        </h2>
        {/* Frase Invitación */}
        <p className="text-white/90 text-base font-bold md:text-lg leading-relaxed  px-4 font-raleway">
          {invitationData.frase}
        </p>
      </div>
    </section>
  )
}

export default Hero
