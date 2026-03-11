import { CountdownSection } from './components/CountdownSection'
import { EventDetails } from './components/EventDetails'
import Hero from './components/Hero'
import { PhotoCarousel } from './components/PhotoCarusel'
import { invitationData } from './data/invitacionData'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
