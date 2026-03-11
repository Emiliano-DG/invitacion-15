export interface InvitationData {
  nombre: string
  tipo: string
  frase: string
  fecha: string
  fechaTexto: string
  lugar: string
  direccion: string
  mapaLink: string
  confirmacion?: string // Número de WhatsApp con código de país
  fotos?: string[] // Opcional, para el carrusel de fotos
  regaloCBU?: string // Opcional
  instagram?: string // Opcional
}
