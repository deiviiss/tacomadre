'use server'
import { randomUUID } from 'crypto'
import { getCategories } from '@/actions/categories/get-categories'
import { type Promotion } from '@/lib/types'

export async function getPromotions(): Promise<Promotion[]> {
  try {
    const categories = await getCategories()

    // Stores the category IDs for use in product and promotion data
    const categoryIds = categories.reduce<Record<string, string>>((acc, category) => {
      acc[category.name] = category.id
      return acc
    }, {})

    const promotions: Promotion[] = [
      {
        id: randomUUID(),
        name: 'COMBO BURGER INDIVIDUAL',
        description: 'Hamburguesa de especialidad  + papas + bebida de 1/2 Lt.',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 149,
        image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1770350579/combo_individual_th5bud.jpg',
        categoryId: categoryIds['Las Burgers'],
        createdAt: new Date('2026-02-05T05:00:00.000Z'),
        isActive: true
      },
      {
        id: randomUUID(),
        name: 'COMBO PAREJA',
        description: '2 Burgers + 1 Reca Litro + 1 papas',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 299,
        image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1770350579/combo_pareja_cggs5k.jpg',
        categoryId: categoryIds['Las Burgers'],
        createdAt: new Date('2026-02-05T05:00:00.000Z'),
        isActive: true
      },
      {
        id: randomUUID(),
        name: 'Todos los días Combo especial',
        description: 'Una hamburguesa artesanal + porción de papa francesa + bebida natural de 600ml',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 145,
        image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1752017313/promo_145_zpxq9p.png',
        categoryId: categoryIds.Promociones,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: false
      },
      {
        id: randomUUID(),
        name: 'Lunes 3 x 2 Burges',
        description: 'No aplica en New York, Crispy, Maradona y Arrachera',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 0,
        image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751674426/Lunes_3x2_burger_pa7nbk.png',
        categoryId: categoryIds['Las Burgers'],
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      },
      {
        id: randomUUID(),
        name: 'Miércoles 3 x 2 Tacos y Gringas',
        description: 'Solo aplica en Asado y Norteño',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 0,
        image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1752017287/promo_3x2_tacos_y_gringas_eyy4ks.png',
        categoryId: categoryIds.Tacos,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      },
      {
        id: randomUUID(),
        name: 'Jueves 3 x 2 Tortas',
        description: 'Solo aplica en Asado y Norteño',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 0,
        image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1752017307/promo_3x2_tortas_ade4id.png',
        categoryId: categoryIds.Tortas,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      }
    ]

    return promotions ?? []
  } catch (error) {
    console.error('Error al obtener promociones:', error)
    return []
  }
}
