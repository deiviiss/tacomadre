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
        id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        name: 'Combo Quesabirrias',
        description: '5 quesabirrias con queso gratinado y 1 consomé grande.',
        discountPercentage: 20,
        originalPrice: 250.00,
        promoPrice: 200.00,
        image: '/images/placeholder.webp',
        categoryId: categoryIds.Promociones,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      },
      {
        id: 'a2bbd10e-78cc-4432-a111-1f02b2c3d111',
        name: 'Pizza + Refresco',
        description: 'Pizza grande de 3 ingredientes y un refresco de 2L.',
        discountPercentage: 15,
        originalPrice: 300.00,
        promoPrice: 255.00,
        image: '/images/placeholder.webp',
        categoryId: categoryIds.Promociones,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      },
      {
        id: 'c3ccd10f-88cc-4532-b222-2f02b2c3d222',
        name: 'Hamburguesa Doble',
        description: 'Hamburguesa doble carne con papas medianas.',
        discountPercentage: 10,
        originalPrice: 180.00,
        promoPrice: 162.00,
        image: '/images/placeholder.webp',
        categoryId: categoryIds.Promociones,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      },
      {
        id: 'd4ddd110-98cc-4632-c333-3f02b2c3d333',
        name: 'Tacos al Pastor',
        description: 'Orden de 5 tacos al pastor con piña y cebolla.',
        discountPercentage: 25,
        originalPrice: 100.00,
        promoPrice: 75.00,
        image: '/images/placeholder.webp',
        categoryId: categoryIds.Promociones,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: false
      },
      {
        id: 'e5eee111-08cc-4732-d444-4f02b2c3d444',
        name: 'Sushi Roll Fiesta',
        description: '2 rollos de sushi surtidos con soya y jengibre.',
        discountPercentage: 30,
        originalPrice: 350.00,
        promoPrice: 245.00,
        image: '/images/placeholder.webp',
        categoryId: categoryIds.Promociones,
        createdAt: new Date('2025-07-01T05:00:00.000Z'),
        isActive: true
      },
      {
        id: 'f6fff112-18cc-4832-e555-5f02b2c3d555',
        name: 'Parrillada Familiar',
        description: 'Parrillada para 4 personas con guarniciones.',
        discountPercentage: 35,
        originalPrice: 600.00,
        promoPrice: 390.00,
        image: '/images/placeholder.webp',
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
