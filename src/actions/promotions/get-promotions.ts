'use server'
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
        id: 'a2bbd10e-78cc-4432-a111-1f02b2c3d111',
        name: 'Lunes 3 x 2 burges',
        description: 'Excepto Arrachera y New York',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 0,
        image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751674426/Lunes_3x2_burger_pa7nbk.png',
        categoryId: categoryIds.Promociones,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      },
      {
        id: 'c3ccd10f-88cc-4532-b222-2f02b2c3d222',
        name: 'Miércoles 3 x 2 bolillos',
        description: 'Solo aplica en Asado Norteño y Pastor',
        discountPercentage: 10,
        originalPrice: 180.00,
        promoPrice: 162.00,
        image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751679540/promo_3x2_bolillos_ixmew6.png',
        categoryId: categoryIds.Promociones,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      },
      {
        id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        name: 'Jueves 3 x 2 tacos y gringas',
        description: 'Pastor, Asada y Norteño',
        discountPercentage: 0,
        originalPrice: 0,
        promoPrice: 0,
        image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751674426/Jueves_3x2_tacos_gvrpob.png',
        categoryId: categoryIds.Promociones,
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
