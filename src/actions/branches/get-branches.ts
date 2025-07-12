'use server'

import { type Branch } from '@/lib/types'

export async function getBranches(): Promise<Branch[]> {
  try {
    const branches = [
      {
        id: '1',
        name: 'Estamos en',
        label: 'sucursal-1',
        address: 'Calle Tlaxcala y Oaxaca, Fidel Velázquez, 24023 San Francisco de Campeche, Camp.',
        urlMap: 'https://maps.app.goo.gl/EVkRjEtiHZoYaZEw5',
        phone: '9811205654',
        phoneBot: '9811205654',
        phoneUser: '9811205654',
        hours: 'Lunes, Miércoles, Jueves y Viernes: 18:00 a 23:30 \n Sábado y Domingo: 13:00 a 23:30',
        isOpen: true,
        social: {
          facebook: 'https://www.facebook.com/Tacomadrecampeche?locale=es_LA',
          whatsapp: 'https://wa.me/+5219811205654',
          instagram: 'https://www.instagram.com/tacomadrecam/'
        },
        dayOff: 'Martes',
        slogan: '¡Pide ya por DIDI o a domicilio!'
      }
    ]

    if (!branches) return []

    return branches
  } catch (error) {
    console.error('Error fetching branches:', error)
    return []
  }
}
