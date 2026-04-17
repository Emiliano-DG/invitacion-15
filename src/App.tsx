import { CountdownSection } from './components/CountdownSection'
import { EventDetails } from './components/EventDetails'
import { Footer } from './components/Footer'
import Hero from './components/Hero'
import { MusicSection } from './components/MusicSection'
import { PhotoCarousel } from './components/PhotoCarusel'
import { invitationData } from './data/invitacionData'
import SplashScreen from './components/SplashScreen'
import { useEffect, useRef, useState } from 'react'
import musica from './assets/musica/musica.mp3'

function App() {
  // estados para controlar la pantalla de bienvenida y la música
  const [entered, setEntered] = useState(false)
  const [withMusic, setWithMusic] = useState(false)

  //cajita del audio (nuevo)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // función que se llama cuando el usuario elige ingresar con o sin música
  const handleEnter = (music: boolean) => {
    setWithMusic(music)
    setEntered(true)
  }

  // efecto para reproducir o pausar la música según la elección del usuario
  useEffect(() => {
    if (withMusic) {
      if (!audioRef.current) {
        audioRef.current = new Audio(musica)
        audioRef.current.loop = true
      }
      audioRef.current.play()
    } else {
      audioRef.current?.pause()
    }
  }, [withMusic])

  return (
    <>
      {!entered && (
        <SplashScreen nombre={invitationData.nombre} onEnter={handleEnter} />
      )}

      {/* El resto de tu invitación */}
      {entered && (
        <main>
          {' '}
          <Hero />
          <CountdownSection targetDate={invitationData.fecha} />
          <EventDetails
            fecha={invitationData.fechaTexto}
            hora={new Date(invitationData.fecha).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
            salon={invitationData.lugar}
            direccion={invitationData.direccion}
            googleMapsLink={invitationData.mapaLink}
            whatsappLink={`https://wa.me/${invitationData.confirmacion}?text=Hola%20${invitationData.nombre},%20confirmo%20mi%20asistencia%20a%20${invitationData.tipo}!`}
          />
          <PhotoCarousel photos={invitationData.fotos} />
          <MusicSection playlistLink="" />
          <Footer
            devName="EmiGe"
            socialLink="https://www.linkedin.com/in/emiliano-geuna/"
          />
        </main>
      )}
    </>
  )
}

export default App
