import type { InvitationData } from '../types/invitacion'
import foto1 from '../assets/private/foto1.jpeg'
import foto2 from '../assets/private/foto2.jpeg'
import foto3 from '../assets/private/foto3.jpeg'
import foto4 from '../assets/private/foto4.jpeg'
import foto5 from '../assets/private/foto5.jpeg'
import foto6 from '../assets/private/foto6.jpeg'
import foto7 from '../assets/private/foto7.jpeg'
import foto8 from '../assets/private/foto8.jpeg'

export const invitationData: InvitationData = {
  nombre: 'Celina',
  tipo: 'Mis XV años',
  frase:
    'Hay momentos que son inolvidables, pero compartirlos con vos los hace únicos.',
  fecha: '2026-10-15T21:00:00',
  fechaTexto: '16.07.2026',
  lugar: 'Salón La Mansión',
  direccion: 'Av. Siempre Viva 742, Córdoba',
  mapaLink: 'https://maps.google.com/...',
  confirmacion: '5493510000000',
  fotos: [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8],
}
