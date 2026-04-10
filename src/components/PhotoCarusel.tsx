import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import bolas from '../assets/bolas.png'

// Importar estilos de Swiper
import 'swiper/css'
import 'swiper/css/pagination'

interface PhotoCarouselProps {
  photos?: string[]
}

export const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  // Fotos de ejemplo si no hay nada en las props
  const displayPhotos = photos || [
    'https://via.placeholder.com/600x800?text=Foto+1',
    'https://via.placeholder.com/600x800?text=Foto+2',
    'https://via.placeholder.com/600x800?text=Foto+3',
  ]

  return (
    <section className="bg-card-bg py-16 flex flex-col items-center relative">
      <img
        src={bolas}
        alt="decoracion"
        className="absolute top-0 left-0 w-full object-cover rotate-180"
      />
      {/* Título y Decoración */}
      <div className="text-center mb-8 px-6" data-aos="fade-up">
        <h2 className="text-white text-3xl font-serif mb-2 tracking-wide">
          Un recorrido de estos 15 años
        </h2>
        <p className="text-stone-400 text-sm font-light mb-6">
          Junto a personas que son muy importantes en mi vida
        </p>
        <div className="text-cyan-400 text-4xl mb-4">📷</div>
      </div>

      {/* Carrusel */}
      <div className="w-full px-4 overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2} // Esto hace que se vea un pedacito de la siguiente foto, igual que Fixdate
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {displayPhotos.map((photo, index) => (
            <SwiperSlide key={index}>
              {/* Contenedor principal de la "tarjeta" Polaroid */}
              <div className="mx-auto max-w-75 bg-white p-2 pb-8 shadow-xl">
                {/* Contenedor de la imagen: aspect-video o aspect-[4/3] para que sea horizontal */}
                <div className="aspect-4/3 w-full overflow-hidden">
                  <img
                    src={photo}
                    alt={`Momento ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* El espacio blanco de abajo queda definido por el 'pb-8' del padre */}
                {/* Si quieres escribir algo, puedes hacerlo aquí: */}
                <div className="mt-4 text-center">
                  <span className="opacity-0">.</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <img
        src={bolas}
        alt="decoracion"
        className="absolute bottom-0 right-0 w-full  object-cover"
      />
    </section>
  )
}
