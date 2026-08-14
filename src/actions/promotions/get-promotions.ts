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
        description: 'Hamburguesa de especialidad  + Papas + Bebida de 1/2 Lt',
        notes: 'No aplica en New York y Arrachera',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 149,
        image: 'images/promotions/combo_individual.webp',
        categoryId: categoryIds['Las Burgers'],
        createdAt: new Date('2026-02-05T05:00:00.000Z'),
        isActive: true
      },
      {
        id: randomUUID(),
        name: 'COMBO PAREJA',
        description: '2 Burgers + 1 Reca Litro + 1 Papas',
        notes: 'No aplica en New York y Arrachera',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 299,
        image: 'images/promotions/combo_pareja.webp',
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
        image: 'images/promotions/combo_especial.webp',
        categoryId: categoryIds.Promociones,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: false
      },
      {
        id: randomUUID(),
        name: 'Lunes 3 x 2 Burges',
        description: '',
        notes: 'No aplica en New York, Crispy, Maradona y Arrachera',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 0,
        image: 'images/promotions/lunes_3_por_2_burger.webp',
        categoryId: categoryIds['Las Burgers'],
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      },
      {
        id: randomUUID(),
        name: 'Miércoles 3 x 2 Tacos y Gringas',
        description: '',
        notes: 'Solo aplica en Asado y Norteño',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 0,
        image: 'images/promotions/promo_3x2_tacos_y_gringas.webp',
        categoryId: categoryIds.Tacos,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      },
      {
        id: randomUUID(),
        name: 'Jueves 3 x 2 Tortas',
        description: '',
        notes: 'Solo aplica en Asado y Norteño',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 0,
        image: 'images/promotions/promo_3x2_tortas.webp',
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
