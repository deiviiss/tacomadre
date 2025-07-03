/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use server'

import { randomUUID } from 'crypto'
import { getCategories } from '@/actions/categories/get-categories'
import { type Product, type ProductOption } from '@/lib/types'

function groupOptionsByType(options: ProductOption[] = []) {
  return options.reduce<Record<string, ProductOption[]>>((acc, option) => {
    const type = option.type
    if (!acc[type]) acc[type] = []
    acc[type].push(option)
    return acc
  }, {})
}

export async function getProducts(): Promise<Product[]> {
  const categories = await getCategories()

  // Stores the category IDs for use in product and promotion data
  const categoryIds = categories.reduce<Record<string, string>>((acc, category) => {
    acc[category.name] = category.id
    return acc
  }, {})

  const products: Product[] = [
    // TACOS
    {
      id: randomUUID(),
      name: 'Asado',
      description: '',
      price: 25,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547870/Taco_de_asada_sydqvk.png',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteño',
      description: '',
      price: 25,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastor',
      description: '',
      price: 25,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547870/Taco_de_pastor_b8bbtc.png',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Arrachera',
      description: '',
      price: 35,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547870/Taco_de_arrachera_cpu5r8.png',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Supremo',
      description: 'Arrachera, camarón, queso',
      price: 45,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547872/Taco_supremo_vnevhb.png',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },

    // TORTAS
    {
      id: randomUUID(),
      name: 'Asado',
      description: '',
      price: 70,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547873/Torta_de_Asado_swqaxk.png',
      categoryId: categoryIds.Tortas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteño',
      description: 'Longaniza artesanal + asado',
      price: 70,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Tortas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Arrachera',
      description: '',
      price: 80,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Tortas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastor',
      description: 'cebolla, cilantro, piña',
      price: 70,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Tortas,
      isAvailable: true,
      createdAt: new Date()
    },

    // GRINGAS
    {
      id: randomUUID(),
      name: 'Asado',
      description: '',
      price: 45,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547887/Gringa_de_asado_oq6rxb.png',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteña',
      description: '',
      price: 45,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Arrachera',
      description: '',
      price: 55,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Chori-taco',
      description: '',
      price: 45,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastor',
      description: '',
      price: 45,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547887/Gringa_de_pastor_sjobcf.png',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },

    // Burritos
    {
      id: randomUUID(),
      name: 'Asado',
      description: '',
      price: 70,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547877/Burrito_de_Asada_bv1442.png',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteño',
      description: 'Longaniza casera + asado',
      price: 70,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastorero',
      description: 'Carne al pastor + asado',
      price: 70,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547882/Burrito_Pastorero_aejhm4.png',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Arrachera',
      description: '',
      price: 80,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Texano',
      description: 'Arrachera, papas fritas, queso, guacamole',
      price: 160,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Supremo',
      description: '',
      price: 200,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },

    // CHORI-PAN
    {
      id: randomUUID(),
      name: 'Chori-pan',
      description: '',
      price: 85,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Chori-pan'],
      isAvailable: true,
      createdAt: new Date()
    },

    // PARRILLADAS
    {
      id: randomUUID(),
      name: 'Parrillada Completa',
      description: '',
      price: 680,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547870/Parrillada_l9i2xl.png',
      categoryId: categoryIds.Parrilladas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: '½ Parrillada',
      description: '',
      price: 400,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Parrilladas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: '¼ Parrillada',
      description: '',
      price: 220,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Parrilladas,
      isAvailable: true,
      createdAt: new Date()
    },

    // CARNE AL PASTOR
    {
      id: randomUUID(),
      name: 'Carne al pastor',
      description: 'cebolla, cilantro, salsas, limones, tortillas, piña',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547883/carne_al_pastor_g4qzvs.png',
      categoryId: categoryIds['Carne al Pastor'],
      isAvailable: true,
      createdAt: new Date()
    },

    // CARNE ASADA DE CERDO
    {
      id: randomUUID(),
      name: 'Carne asada de cerdo',
      description: 'cebolla asada, salsas, limones, tortillas',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547884/Carne_asada_de_cerdo_hkhwec.png',
      categoryId: categoryIds['Carne Asada de Cerdo'],
      isAvailable: true,
      createdAt: new Date()
    },

    // LAS BURGERS
    {
      id: randomUUID(),
      name: 'Clásica',
      description: '',
      price: 75,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Cubana',
      description: '',
      price: 100,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547874/Burger_Cubana_yu1p6m.png',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Maradona',
      description: '',
      price: 100,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547876/Burger_Maradona_g1raxl.png',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Mexicanísima',
      description: '',
      price: 100,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Jack BBQ',
      description: '',
      price: 100,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Tocino BBQ',
      description: '',
      price: 100,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteña',
      description: '',
      price: 100,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'New York',
      description: '',
      price: 130,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pollo Crispy',
      description: '',
      price: 110,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'De Arrachera',
      description: '',
      price: 150,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastorera',
      description: '',
      price: 125,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547877/Burger_Pastorera_khpdan.png',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },

    // PAPAS FRITAS
    {
      id: randomUUID(),
      name: 'Francesa',
      description: '',
      price: 70,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547889/Papas_a_la_francesa_eul24o.png',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Francesa Especial',
      description: '',
      price: 95,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547887/Papa_francesa_especial_xrnpqq.png',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Papas Gajo',
      description: '',
      price: 75,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547869/Papas_gajo_dqaq3l.png',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Gajo Especial',
      description: '',
      price: 100,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547869/Papas_gajo_especial_stkays.png',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: '½ Orden',
      description: '',
      price: 45,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: '½ Orden Especial',
      description: '',
      price: 65,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Papacherras',
      description: '',
      price: 125,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },

    // EXTRAS
    {
      id: randomUUID(),
      name: 'Frijoles charros litro',
      description: '',
      price: 85,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Extras,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Frijoles charros ½ litro',
      description: '',
      price: 50,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Extras,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Plato de complementos',
      description: '',
      price: 85,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Extras,
      isAvailable: true,
      createdAt: new Date()
    }
  ]

  const initialOptions: ProductOption[] = [
    // CARNE ASADA DE CERDO
    {
      id: randomUUID(),
      name: '1 kilo',
      productId: products.find(
        p => p.name === 'Carne asada de cerdo' && p.categoryId === categoryIds['Carne Asada de Cerdo']
      )!.id,
      price: 400,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      name: '¾ kilo',
      productId: products.find(
        p => p.name === 'Carne asada de cerdo' && p.categoryId === categoryIds['Carne Asada de Cerdo']
      )!.id,
      price: 320,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      name: '½ kilo',
      productId: products.find(
        p => p.name === 'Carne asada de cerdo' && p.categoryId === categoryIds['Carne Asada de Cerdo']
      )!.id,
      price: 220,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      name: '¼ kilo',
      productId: products.find(
        p => p.name === 'Carne asada de cerdo' && p.categoryId === categoryIds['Carne Asada de Cerdo']
      )!.id,
      price: 120,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },

    // CARNE AL PASTOR
    {
      id: randomUUID(),
      name: '1 kilo',
      productId: products.find(
        p => p.name === 'Carne al pastor' && p.categoryId === categoryIds['Carne al Pastor']
      )!.id,
      price: 400,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      name: '¾ kilo',
      productId: products.find(
        p => p.name === 'Carne al pastor' && p.categoryId === categoryIds['Carne al Pastor']
      )!.id,
      price: 320,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      name: '½ kilo',
      productId: products.find(
        p => p.name === 'Carne al pastor' && p.categoryId === categoryIds['Carne al Pastor']
      )!.id,
      price: 220,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      name: '¼ kilo',
      productId: products.find(
        p => p.name === 'Carne al pastor' && p.categoryId === categoryIds['Carne al Pastor']
      )!.id,
      price: 120,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },

    // TACOS
    // Asado (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Queso extra x taco',
      price: 10,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Tortilla de harina',
      price: 5,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },

    // Asado (comment)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // TORTAS
    // Asado (sizes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Francés',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Brioch',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    }
  ]

  function groupOptionsForProduct(productId: string) {
    return initialOptions.filter(opt => opt.productId === productId)
  }

  const productsWithRelations = products.map(product => {
    const options = groupOptionsForProduct(product.id)

    return {
      ...product,
      options,
      groupedOptions: groupOptionsByType(options)
    }
  })

  return productsWithRelations
}
