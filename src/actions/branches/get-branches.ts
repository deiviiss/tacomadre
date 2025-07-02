'use server'

import { type Branch } from '@/lib/types'

export async function getBranches(): Promise<Branch[]> {
  try {
    const branches = [
      {
        id: '1',
        name: 'Matriz',
        label: 'sucursal-1',
        address: 'Calle 123, 123 123 123, 1234',
        urlMap: 'https://www.google.com/maps/place/Sucursal+1/@12.3456789,-98.7654321,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d12.3456789!4d-98.7654321!16s%2Fg%2F1+Calle+123%2C+123+123+123%2C+1234!17m2!3d12.3456789!4d-98.7654321!16m1!3d12.3456789!4d-98.7654321!11m1!1e1',
        phone: '9811250049',
        phoneBot: '9811250049',
        phoneUser: '9811250049',
        hours: 'Lunes, Miércoles, Jueves y Viernes: 18:00 a 23:30 \n Sábado y Domingo: 13:00 a 23:30',
        isOpen: true,
        social: {
          facebook: 'https://www.facebook.com/profile.php?id=61573792161468&locale=es_LA',
          whatsapp: 'https://wa.me/+5219811250049',
          instagram: 'https://www.instagram.com/mitiendaenlinea.shop'
        },
        dayOff: 'Domingo',
        slogan: 'Lo bueno se comparte... y se pide por WhatsApp'
      }
    ]

    if (!branches) return []

    return branches
  } catch (error) {
    console.error('Error fetching branches:', error)
    return []
  }
}
