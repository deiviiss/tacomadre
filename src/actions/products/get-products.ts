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
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751678887/taco_asado_eetmkj.png',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteño',
      description: 'Longaniza artesanal + asado',
      price: 25,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastor',
      description: 'Cebolla, cilantro, piña',
      price: 25,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751678922/Taco_de_pastor_dp4yzz.png',
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
      description: 'Cebolla, cilantro, piña',
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
      description: 'Longaniza artesanal + asado',
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
      description: 'Longaniza artesanal + queso',
      price: 45,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastor',
      description: 'Cebolla, cilantro, piña',
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
      price: 120,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751678999/Burrito_de_Asada_jlqfsc.png',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteño',
      description: 'Longaniza casera + asado',
      price: 120,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastorero',
      description: 'Carne al pastor, cebolla, cilantro, piña',
      price: 130,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547882/Burrito_Pastorero_aejhm4.png',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Arrachera',
      description: '',
      price: 145,
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
      description: 'Arrachera, camarón, queso, guacamole',
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

    // LAS BURGERS
    {
      id: randomUUID(),
      name: 'Clásica',
      description: 'Queso, catsup y mostaza',
      price: 75,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Cubana',
      description: 'Piña, tocino, crema de ajo',
      price: 100,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547874/Burger_Cubana_yu1p6m.png',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Maradona',
      description: 'Chorizo tipo argentino, guacamole, chimichurri',
      price: 100,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751679080/Burger_Maradona_wimeoq.png',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Mexicanísima (PICA CON MADRE)',
      description: 'Jalapeño toreado, tocino, guacamole, salsa macha',
      price: 100,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Jack BBQ',
      description: 'BBQ mezclada con Jack Daniels y tocino',
      price: 100,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Tocino BBQ',
      description: 'Salsa BBQ y tocino',
      price: 100,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteña',
      description: 'Longaniza artesanal, guacamole, queso y frijol',
      price: 100,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'New York',
      description: 'Doble carne, doble queso, tocino, salsa de queso',
      price: 130,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pollo Crispy',
      description: 'Salsa BBQ y pechuga extra crunch',
      price: 110,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'De Arrachera',
      description: 'INCLUYE ½ ORDEN DE PAPAS, tocino, champiñones, crema de ajo',
      price: 150,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastorera',
      description: 'Carne al pastor, piña, cebolla y cilantro',
      price: 125,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751679080/Burger_Pastorera_obblmj.png',
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
      description: 'Queso y tocino',
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
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547869/Papas_gajo_dqaq3l.png',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Gajo Especial',
      description: 'Queso y tocino',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547869/Papas_gajo_especial_stkays.png',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Papacherras 🏷️ NUEVA',
      description: 'Queso y arrachera',
      price: 125,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },

    // CARNE ASADA DE CERDO
    {
      id: randomUUID(),
      name: 'Carne asada de cerdo',
      description: 'Cebolla asada, salsas, limones, tortillas',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751547884/Carne_asada_de_cerdo_hkhwec.png',
      categoryId: categoryIds['Carne Asada de Cerdo'],
      isAvailable: true,
      createdAt: new Date()
    },

    // EXTRAS
    {
      id: randomUUID(),
      name: 'Frijoles charros',
      description: '',
      price: 0,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Extras,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Plato de complementos',
      description: '2 pzas salchicha para asar, 3 pzas chistorra, 2 pzas chorizo argentino',
      price: 85,
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp',
      categoryId: categoryIds.Extras,
      isAvailable: true,
      createdAt: new Date()
    },

    // PARRILLADAS
    {
      id: randomUUID(),
      name: 'Parrillada Completa',
      description: '½ kilo arrachera, ½ kilo asado de cerdo, cebolla asada, salsas, limones, tortillas, papas fritas, 3 pzas salchicha para asar, 6 pzas chistorra, 3 pzas chorizo argentino',
      price: 680,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751586558/Parrillada_k8ojvm.png',
      categoryId: categoryIds.Parrilladas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: '½ Parrillada',
      description: '¼ kilo arrachera, ¼ kilo asado de cerdo, cebolla asada, salsas, limones, tortillas, papas fritas, 2 pzas salchicha para asar, 3 pzas chistorra, 2 pzas chorizo argentino',
      price: 400,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751586558/Parrillada_k8ojvm.png',
      categoryId: categoryIds.Parrilladas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: '¼ Parrillada',
      description: '150 gr arrachera, 150 gr asado de cerdo, cebolla asada, salsas, limones, tortillas, papas fritas, 1 pza salchicha para asar, 1 pza chorizo tipo argentino, 2 pzas chistorra',
      price: 220,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751586558/Parrillada_k8ojvm.png',
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
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1751679079/carne_al_pastor_e8uvh4.png',
      categoryId: categoryIds['Carne al Pastor'],
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
    // Carne asada de cerdo (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Carne asada de cerdo' && p.categoryId === categoryIds['Carne Asada de Cerdo']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
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
    // Carne al pastor (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Carne al pastor' && p.categoryId === categoryIds['Carne al Pastor']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // =========================================== TACOS
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
    // Asado (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
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

    // Norteño (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tacos
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
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Tortilla de harina',
      price: 5,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Norteño (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Norteño (comment)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Pastor (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tacos
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
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Tortilla de harina',
      price: 5,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Pastor (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Pastor (comment)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Arrachera (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tacos
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
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Tortilla de harina',
      price: 5,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Arrachera (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Arrachera (comment)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Supremo (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Tacos
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
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Tortilla de harina',
      price: 5,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Supremo (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin camarón',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Supremo (comment)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Tacos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // =========================================== TORTAS
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
    },
    // Asado (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Asado (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Norteño (sizes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tortas
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
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Brioch',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Norteño (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin longaniza artesanal',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin asado',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Norteño (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Arrachera (sizes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tortas
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
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Brioch',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Arrachera (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Arrachera (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Pastor (sizes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tortas
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
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Brioch',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Pastor (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin cilantro',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Sin piña',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Pastor (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Tortas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // =========================================== GRINGAS
    // Asado (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Asado (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Norteña (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin longaniza artesanal',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin asado',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Norteña (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Arrachera (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Arrachera (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Chori-taco (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-taco' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-taco' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-taco' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-taco' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin longaniza artesanal',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Chori-taco (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-taco' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Pastor (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Pastor (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastor' && p.categoryId === categoryIds.Gringas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // =========================================== BURRITOS
    // Asado (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin lechuga',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Asado (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Asado' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Norteño ( without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin lechuga',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Norteño (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteño' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Pastorero (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorero' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorero' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorero' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorero' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin lechuga',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorero' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Pastorero (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorero' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Arrachera (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin lechuga',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Arrachera (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Arrachera' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Texano (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Texano' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Texano' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Texano' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Texano' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin lechuga',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Texano' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Texano (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Texano' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Supremo (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin lechuga',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Supremo (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Supremo' && p.categoryId === categoryIds.Burritos
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // =========================================== CHORI-PAN
    // Chori-pan (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-pan' && p.categoryId === categoryIds['Chori-pan']
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-pan' && p.categoryId === categoryIds['Chori-pan']
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-pan' && p.categoryId === categoryIds['Chori-pan']
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-pan' && p.categoryId === categoryIds['Chori-pan']
      )!.id,
      name: 'Sin lechuga',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-pan' && p.categoryId === categoryIds['Chori-pan']
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Chori-pan (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Chori-pan' && p.categoryId === categoryIds['Chori-pan']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // =========================================== LAS BURGERS
    // Clásica (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin mayonesa',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin lechuga',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Clásica (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Cubana (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin piña',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin tocino',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin crema de ajo',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Cubana (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Maradona (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin chorizo tipo argentino',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin chimichurri',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Maradona (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Mexicanísima (PICA CON MADRE) (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin jalapeño toreado',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin tocino',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin salsa macha',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Mexicanísima (PICA CON MADRE) (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Jack BBQ (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin BBQ mezclada con Jack Daniels',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin tocino',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Jack BBQ (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Tocino BBQ (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin salsa BBQ',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin tocino',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Tocino BBQ (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Norteña (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin longaniza artesanal',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin guacamole',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin frijol',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Norteña (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // New York (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'New York' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin doble carne',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'New York' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin doble queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'New York' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin tocino',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'New York' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin salsa de queso',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // New York (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'New York' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Pollo Crispy (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin salsa BBQ',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin pechuga extra crunch',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Pollo Crispy (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // De Arrachera (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin ½ orden de papas',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin tocino',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin champiñones',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin crema de ajo',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // De Arrachera (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Pastorera (without ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin carne al pastor',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin piña',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin cebolla',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Sin cilantro',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'without_ingredient'
    },
    // Pastorera (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // =========================================== PAPAS FRITAS
    // Papas Gajo (sizes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Papas Gajo' && p.categoryId === categoryIds['Papas Fritas']
      )!.id,
      name: '1 Orden',
      price: 75,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Papas Gajo' && p.categoryId === categoryIds['Papas Fritas']
      )!.id,
      name: '½ Orden',
      price: 45,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Gajo Especial (sizes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Gajo Especial' && p.categoryId === categoryIds['Papas Fritas']
      )!.id,
      name: '1 Orden Especial',
      price: 100,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Gajo Especial' && p.categoryId === categoryIds['Papas Fritas']
      )!.id,
      name: '½ Orden Especial',
      price: 65,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },

    // =========================================== EXTRAS
    // Frijoles charros (sizes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Frijoles charros' && p.categoryId === categoryIds.Extras
      )!.id,
      name: 'Litro',
      price: 85,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Frijoles charros' && p.categoryId === categoryIds.Extras
      )!.id,
      name: '½ litro',
      price: 50,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Frijoles charros (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Frijoles charros' && p.categoryId === categoryIds.Extras
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Plato de complementos (without ingredients)
    // {
    //   id: randomUUID(),
    //   productId: products.find(
    //     p => p.name === 'Plato de complementos' && p.categoryId === categoryIds.Extras
    //   )!.id,
    //   name: 'Sin salchicha para asar',
    //   price: 0,
    //   quantity: 0,
    //   isAvailable: true,
    //   type: 'without_ingredient'
    // },
    // {
    //   id: randomUUID(),
    //   productId: products.find(
    //     p => p.name === 'Plato de complementos' && p.categoryId === categoryIds.Extras
    //   )!.id,
    //   name: 'Sin chistorra',
    //   price: 0,
    //   quantity: 0,
    //   isAvailable: true,
    //   type: 'without_ingredient'
    // },
    // {
    //   id: randomUUID(),
    //   productId: products.find(
    //     p => p.name === 'Plato de complementos' && p.categoryId === categoryIds.Extras
    //   )!.id,
    //   name: 'Sin chorizo argentino',
    //   price: 0,
    //   quantity: 0,
    //   isAvailable: true,
    //   type: 'without_ingredient'
    // },
    // Plato de complementos (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Plato de complementos' && p.categoryId === categoryIds.Extras
      )!.id,
      name: 'comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Parrilladas (notes)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Parrillada Completa' && p.categoryId === categoryIds.Parrilladas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === '½ Parrillada' && p.categoryId === categoryIds.Parrilladas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === '¼ Parrillada' && p.categoryId === categoryIds.Parrilladas
      )!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
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
