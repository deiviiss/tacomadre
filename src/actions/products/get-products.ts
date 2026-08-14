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
      price: 30,
      image: 'images/products/taco_asado.webp',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteño',
      description: 'Longaniza artesanal + asado',
      price: 30,
      image: 'images/products/taco_norteño.webp',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastor',
      description: 'Cebolla, cilantro, piña',
      price: 30,
      image: 'images/products/taco_pastor.webp',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Arrachera',
      description: '',
      price: 40,
      image: 'images/products/taco_arrachera.webp',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Supremo',
      description: 'Arrachera, camarón, queso',
      price: 50,
      image: 'images/products/taco_supremo.webp',
      categoryId: categoryIds.Tacos,
      isAvailable: true,
      createdAt: new Date()
    },

    // TORTAS
    {
      id: randomUUID(),
      name: 'Asado',
      description: '',
      price: 80,
      image: 'images/products/torta_asado.webp',
      categoryId: categoryIds.Tortas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteño',
      description: 'Longaniza artesanal + asado',
      price: 80,
      image: 'images/products/torta_norteña.webp',
      categoryId: categoryIds.Tortas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Arrachera',
      description: '',
      price: 100,
      image: 'images/products/torta_arrachera.webp',
      categoryId: categoryIds.Tortas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastor',
      description: 'Cebolla, cilantro, piña',
      price: 80,
      image: 'images/products/torta_pastor.webp',
      categoryId: categoryIds.Tortas,
      isAvailable: true,
      createdAt: new Date()
    },

    // GRINGAS
    {
      id: randomUUID(),
      name: 'Asado',
      description: '',
      price: 50,
      image: 'images/products/gringa_de_asado.webp',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteña',
      description: 'Longaniza artesanal + asado',
      price: 50,
      image: 'images/products/gringa_norteña.webp',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Arrachera',
      description: '',
      price: 65,
      image: 'images/products/gringa_arrachera.webp',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Chori-taco',
      description: 'Longaniza artesanal + queso',
      price: 50,
      image: 'images/products/gringa_chori_taco.webp',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastor',
      description: 'Cebolla, cilantro, piña',
      price: 50,
      image: 'images/products/gringa_pastor.webp',
      categoryId: categoryIds.Gringas,
      isAvailable: true,
      createdAt: new Date()
    },

    // Burritos
    {
      id: randomUUID(),
      name: 'Asado',
      description: '',
      price: 135,
      image: 'images/products/burrito_de_asada.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteño',
      description: 'Longaniza casera + asado',
      price: 135,
      image: 'images/products/burrito_norteño.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastorero',
      description: 'Carne al pastor, cebolla, cilantro, piña',
      price: 135,
      image: 'images/products/burrito_pastorero.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Arrachera',
      description: '',
      price: 165,
      image: 'images/products/burrito_arrachera.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Texano',
      description: 'Arrachera, papas fritas, queso, guacamole',
      price: 185,
      image: 'images/products/burrito_texano.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Supremo',
      description: 'Arrachera, camarón, queso, guacamole',
      price: 230,
      image: 'images/products/burro_supremo.webp',
      categoryId: categoryIds.Burritos,
      isAvailable: true,
      createdAt: new Date()
    },

    // CHORI-PAN
    {
      id: randomUUID(),
      name: 'Chori-pan',
      description: '',
      price: 100,
      image: 'images/products/choripan.webp',
      categoryId: categoryIds['Chori-pan'],
      isAvailable: true,
      createdAt: new Date()
    },

    // LAS BURGERS
    {
      id: randomUUID(),
      name: 'Clásica',
      description: 'Queso, catsup y mostaza',
      price: 80,
      image: 'images/products/burger_clasica.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Cubana',
      description: 'Piña, tocino, crema de ajo',
      price: 110,
      image: 'images/products/burger_cubana.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Maradona',
      description: 'Chorizo tipo argentino, guacamole, chimichurri',
      price: 110,
      image: 'images/products/burger_maradona.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Mexicanísima (PICA CON MADRE)',
      description: 'Jalapeño toreado, tocino, guacamole, salsa macha',
      price: 110,
      image: 'images/products/burger_mexicanisima.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Jack BBQ',
      description: 'BBQ mezclada con Jack Daniels y tocino',
      price: 110,
      image: 'images/products/burger_jack.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Tocino BBQ',
      description: 'Salsa BBQ y tocino',
      price: 110,
      image: 'images/products/burger_tocino.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Norteña',
      description: 'Longaniza artesanal, guacamole, queso y frijol',
      price: 110,
      image: 'images/products/burger_norteña.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'New York',
      description: 'Doble carne, doble queso, tocino, salsa de queso',
      price: 145,
      image: 'images/products/burger_new_york.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pollo Crispy',
      description: 'Salsa BBQ y pechuga extra crunch',
      price: 125,
      image: 'images/products/burger_crispy.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'De Arrachera',
      description: 'INCLUYE ½ ORDEN DE PAPAS, tocino, champiñones, crema de ajo',
      price: 185,
      image: 'images/products/burger_arrachera.webp',
      categoryId: categoryIds['Las Burgers'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Pastorera',
      description: 'Carne al pastor, piña, cebolla y cilantro',
      price: 135,
      image: 'images/products/burger_pastorera.webp',
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
      image: 'images/products/papas_francesa.webp',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Francesa Especial',
      description: 'Queso y tocino',
      price: 95,
      image: 'images/products/papas_francesa_especial.webp',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Papas Gajo',
      description: '',
      price: 0,
      image: 'images/products/papas_gajo.webp',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Gajo Especial',
      description: 'Queso y tocino',
      price: 0,
      image: 'images/products/papas_gajo_especial.webp',
      categoryId: categoryIds['Papas Fritas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Papacherras 🏷️ NUEVA',
      description: 'Queso y arrachera',
      price: 125,
      image: 'images/products/papacherras.webp',
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
      image: 'images/products/carne_asada_de_cerdo.webp',
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
      image: 'images/products/frijoles_charros.webp',
      categoryId: categoryIds.Extras,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Plato de complementos',
      description: '2 pzas salchicha para asar, 3 pzas chistorra, 2 pzas chorizo argentino',
      price: 85,
      image: 'images/products/complementos.webp',
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
      image: 'images/products/parillada_completa.webp',
      categoryId: categoryIds.Parrilladas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: '½ Parrillada',
      description: '¼ kilo arrachera, ¼ kilo asado de cerdo, cebolla asada, salsas, limones, tortillas, papas fritas, 2 pzas salchicha para asar, 3 pzas chistorra, 2 pzas chorizo argentino',
      price: 400,
      image: 'images/products/media_parrillada.webp',
      categoryId: categoryIds.Parrilladas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: '¼ Parrillada',
      description: '150 gr arrachera, 150 gr asado de cerdo, cebolla asada, salsas, limones, tortillas, papas fritas, 1 pza salchicha para asar, 1 pza chorizo tipo argentino, 2 pzas chistorra',
      price: 220,
      image: 'images/products/cuarto_parrillada.webp',
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
      image: 'images/products/carne_pastor.webp',
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
    // Clásica (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Carne',
      price: 35,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Chori argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Tocino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Piña',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Guacamole',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Salchica para asar',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Queso',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Clásica' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Longaniza',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
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
    // Cubana (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Carne',
      price: 35,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Chori argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Tocino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Piña',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Guacamole',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Salchica para asar',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Queso',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Cubana' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Longaniza',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
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
    // Maradona (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Carne',
      price: 35,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Chori argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Tocino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Piña',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Guacamole',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Salchica para asar',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Queso',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Maradona' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Longaniza',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
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
    // Mexicanísima (PICA CON MADRE) (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Carne',
      price: 35,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Chori argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Tocino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Piña',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Guacamole',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Salchica para asar',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Queso',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Mexicanísima (PICA CON MADRE)' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Longaniza',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
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
    // Jack BBQ (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Carne',
      price: 35,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Chori argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Tocino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Piña',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Guacamole',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Salchica para asar',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Queso',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Jack BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Longaniza',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
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
    // Tocino BBQ (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Carne',
      price: 35,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Chori argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Tocino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Piña',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Guacamole',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Salchica para asar',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Queso',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Tocino BBQ' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Longaniza',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
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
    // Norteña (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Carne',
      price: 35,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Chori argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Tocino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Piña',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Guacamole',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Salchica para asar',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Queso',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Norteña' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Longaniza',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
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
    // Pollo Crispy (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Carne',
      price: 35,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Chori argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Tocino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Piña',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Guacamole',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Salchica para asar',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Queso',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pollo Crispy' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Longaniza',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
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
    // De Arrachera (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Carne',
      price: 35,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Chori argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Tocino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Piña',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Guacamole',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Salchica para asar',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Queso',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'De Arrachera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Longaniza',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
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
    // Pastorera (ingredients)
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Carne',
      price: 35,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Chori argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Tocino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Piña',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Guacamole',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Salchica para asar',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Queso',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(
        p => p.name === 'Pastorera' && p.categoryId === categoryIds['Las Burgers']
      )!.id,
      name: 'Longaniza',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
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
    const category = categories.find(cat => cat.id === product.categoryId)

    return {
      ...product,
      options,
      groupedOptions: groupOptionsByType(options),
      categoryName: category ? category.name : 'Sin categoría'
    }
  })

  return productsWithRelations
}
