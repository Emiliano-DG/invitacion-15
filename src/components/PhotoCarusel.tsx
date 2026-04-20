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

export const PhotoCarousel = ({ photos }) => {
  // Fotos de ejemplo si no hay nada en las props
  const displayPhotos = photos || [
    'https://via.placeholder.com/600x800?text=Foto+1',
    'https://via.placeholder.com/600x800?text=Foto+2',
    'https://via.placeholder.com/600x800?text=Foto+3',
  ]

  return (
    <section className="bg-card-bg py-16 md:py-24 lg:py-32 flex flex-col items-center relative border-b border-primary">
      <img
        src={bolas}
        alt="decoracion"
        className="absolute top-0 left-0 h-16 md:h-20 w-full object-cover rotate-180"
      />
      {/* Título y Decoración */}
      <div
        className="text-center mb-8 md:mb-12 px-4 md:px-6"
        data-aos="fade-up"
      >
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-cormorant mb-2 md:mb-4 tracking-wide">
          Un recorrido de estos 15 años
        </h2>
        <p className="text-stone-400 text-base md:text-lg font-light font-raleway mb-6">
          Junto a personas que son muy importantes en mi vida
        </p>
        <div className="text-cyan-400 text-4xl md:text-5xl">📷</div>
      </div>

      {/* Carrusel */}
      <div className="w-full px-4 md:px-8 overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="pb-12 md:pb-16"
        >
          {displayPhotos.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto max-w-lg bg-white p-2 pb-2 shadow-xl rounded-sm">
                <img
                  src={photo}
                  alt={`Momento ${index + 1}`}
                  className="w-full h-96 md:h-full max-h-96 md:max-h-96 lg:max-h-full object-cover"
                />

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
        className="absolute bottom-0 right-0 h-16 md:h-20 w-full object-cover"
      />
    </section>
  )
}
