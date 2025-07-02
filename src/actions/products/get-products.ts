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
    // Las ligeras
    {
      id: randomUUID(),
      name: 'Marinera',
      description: 'Jamón, queso Deysi, tomate, cebolla curtida, lechuga',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889399/marinera_k4x5xv.png',
      categoryId: categoryIds['Las ligeras'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Capitán Fit',
      description: 'Jamón, queso panela, rayadura de zanahoria, pepino, germinado, cebolla curtida, tomate, aguacate, lechuga',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889412/capitan_fit_pybhyi.png',
      categoryId: categoryIds['Las ligeras'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Corbeta',
      description: 'Pechuga de pollo a la plancha, queso panela, rayadura de zanahoria, aguacate, tomate, pepino, lechuga, cebolla curtida',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750814006/corbeta_gwjgqa.png',
      categoryId: categoryIds['Las ligeras'],
      isAvailable: true,
      createdAt: new Date()
    },

    // Dulce y Salado
    {
      id: randomUUID(),
      name: 'Fragata',
      description: 'Jamón claveteado, queso Deisy, lechuga, cebolla curtida',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750891998/fragata_d8afnm.png',
      categoryId: categoryIds['Dulce y Salado'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Surtida',
      description: 'Pierna de cerdo, Jamón claveteado, queso Deisy, tocineta, jamón de pavo, tomate, aguacate, cebolla curtida, lechuga',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889398/hot_cakes_numgcb.png',
      categoryId: categoryIds['Dulce y Salado'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Teniente',
      description: 'Milanesa de pollo empanizada, jamón claveteato, queso Deisy, tomate, aguacate, cebolla curtida, lechuga',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750813994/teniente_yhpvhs.png',
      categoryId: categoryIds['Dulce y Salado'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Almirante',
      description: 'Milanesa de pollo empanizada, jamón claveteado, pierna de cerdo, queso Deisy y gouda, tomate, aguacate, cebolla curtida, lechuga',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889407/almirante_tmracj.png',
      categoryId: categoryIds['Dulce y Salado'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Sándwich Club',
      description: 'Pierna de cerdo, jamón claveteado, huevo, tocino, tomate, cebolla, lechuga, papas a la francesa',
      price: 125,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750813995/sandwich_club_fc8ahc.png',
      categoryId: categoryIds['Dulce y Salado'],
      isAvailable: true,
      createdAt: new Date()
    },

    // PARMESANAS
    {
      id: randomUUID(),
      name: 'Navy Pizza',
      description: 'Jamón, queso gouda, salami, salsa pizzera, lechuga, cubierta de parmesano',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889399/navy_pizza_msychp.png',
      categoryId: categoryIds.Parmesanas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Navio Parmesana',
      description: 'Milanesa de pollo empanizada, queso gouda, salsa pizzera, aguacate, lechuga, cubierta de parmesano',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750813997/navio_parmesano_ty2xvu.png',
      categoryId: categoryIds.Parmesanas,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Búfalo Parmesana',
      description: 'Milanesa de pollo empanizada, queso gouda, salsa búfalo, aguacate, cebolla morada, lechuga, cubierta de parmesano',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750813994/bufalo_parmesano_ifv50o.png',
      categoryId: categoryIds.Parmesanas,
      isAvailable: true,
      createdAt: new Date()
    },

    // PARA ROMPER LA DIETA
    {
      id: randomUUID(),
      name: 'Timón',
      description: 'Cochinita, cebolla curtida, aguacate',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889406/timon_g90jxd.png',
      categoryId: categoryIds['Para romper la dieta'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'But Negro',
      description: 'Carne molida guisado con recado negro, huevo duro, aguacate, cebolla curtida',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889411/but_negro_eif3i8.png',
      categoryId: categoryIds['Para romper la dieta'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Propela',
      description: 'Carne asada al carbón, salsa de tomate asado, cebolla asada, aguacate, repollo, frijol',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750813993/propela_yplghu.png',
      categoryId: categoryIds['Para romper la dieta'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Navio',
      description: 'Milanesa de pollo empanizada, queso Deisy, tomate, aguacate, cebolla curtida, lechuga, aderezo, frijol',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889399/navio_ljbcs7.png',
      categoryId: categoryIds['Para romper la dieta'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Capitán',
      description: 'Pierna de cerdo, tocineta, jamón, queso Deisy, tomate, aguacate, lechuga, cebolla curtida',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750813995/capitan_c0adii.png',
      categoryId: categoryIds['Para romper la dieta'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Castacán',
      description: 'Castacán, cáscara de chicharron, aguacate, pico de gallo, repollo',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750813997/castacan_hmyisa.png',
      categoryId: categoryIds['Exclusivo viernes y sábado'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Comandante',
      description: 'Media barra de francés con 2 a 3 especialidades a elegir del menú',
      price: 125,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889397/comandante_vgrutd.png',
      categoryId: categoryIds['Para romper la dieta'],
      isAvailable: true,
      createdAt: new Date()
    },

    // ESPECIALIDADES Y QUESADILLAS
    {
      id: randomUUID(),
      name: 'Gringas Propela (2 piezas)',
      description: 'Poc-Chuc asado al carbón, queso, cebolla asada, repollo, aguacate, tomate asado',
      price: 80,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750892578/gringas_propelas_iwq7gj.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Gringas de Castacán (2 piezas)',
      description: 'Castacán, cáscara de chicharron, aguacate, pico de gallo, repollo',
      price: 85,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750892396/gringas_castacan_m1v73p.png',
      categoryId: categoryIds['Exclusivo viernes y sábado'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Burritas con Champiñón (2 piezas)',
      description: 'Jamón, queso Deisy, champiñón',
      price: 60,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750813995/burritas_con_champi%C3%B1on_uedot6.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Burritas con Jamón y Queso (2 piezas)',
      description: 'Jamón, queso Deisy',
      price: 50,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889408/burritas_j_y_q_nexhdm.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Quesadillas con champiñón (2 piezas)',
      description: 'Queso gouda, champiñón',
      price: 48,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889400/quesadilla_con_champi%C3%B1on_egszou.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Mini hotcakes',
      description: '5 mini hotcakes decorados con plátano, Hershey\'s, chispas, crema batida',
      price: 65,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889398/mini_hot_cakes_toh3ul.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Hotcakes',
      description: '4 piezas de hotcakes decorados con fruta',
      price: 89,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750891819/hot_cakes_iumyd9.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Hotcakes Navy',
      description: '2 piezas de hotcakes, 2 piezas de huevo revuelto, tocino',
      price: 100,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750814007/hot_cakes_navy_vagzol.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Hotcake Burguer',
      description: '2 piezas de hotcakes carne de hamburguesa, omelete de huevo, queso Deisy, tocino',
      price: 120,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750813995/hot_burger_xlemtz.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Classic Burguer',
      description: 'Carne de la casa (res), queso gouda, tomate, aros de cebolla morada, lechuga, tocino, papas a la francesa',
      price: 115,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750892244/classic_burger_e2nk1a.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Navy Hawaii',
      description: 'Carne de la casa (res), queso gouda, tomate, aros de cebolla morada, lechuga, piña asada, tocino, papas a la francesa',
      price: 135,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889399/navy_hawaii_tgyn6i.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Fungi Navy',
      description: 'Carne de la casa (res), queso gouda, tocino, aros de cebolla morada, champiñones al ajillo, lechuga papas a la francesa',
      price: 135,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889398/fungy_navy_uo4rwx.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Miniburguer (res)',
      description: 'Carne de la casa (res), queso Deisy, tocino, lechuga, aros de cebolla morada',
      price: 50,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750814007/mini_burger_rxc3yz.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Miniburguer (pollo)',
      description: 'Carne de la casa (pollo), queso Deisy, tocino, lechuga, aros de cebolla morada',
      price: 50,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750814007/mini_burger_rxc3yz.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Papas a la francesa',
      description: '',
      price: 65,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889401/papas_rffqju.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Papas Navy',
      description: 'Papas a la francesa con salsa especial de la casa',
      price: 80,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889400/papas_navy_xdhfwr.png',
      categoryId: categoryIds['Especialidades y quesadillas'],
      isAvailable: true,
      createdAt: new Date()
    },

    // REFRESCOS
    {
      id: randomUUID(),
      name: 'Coca cola',
      description: 'Coca cola fría de 600ml',
      price: 32,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889412/coca_vauuy3.png',
      categoryId: categoryIds.Refrescos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Coca cola sin azúcar',
      description: 'Coca cola sin azúcar fría de 600ml',
      price: 32,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889412/coca_zero_fusr3q.png',
      categoryId: categoryIds.Refrescos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Té Reca',
      description: '',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750891063/reca_nxauzh.jpg',
      categoryId: categoryIds.Refrescos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Agua Purificada',
      description: 'Agua purificada fría de 600ml',
      price: 22,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889407/agua_bvurkt.png',
      categoryId: categoryIds.Refrescos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Refresco natural',
      description: 'Variedad de sabores por temporada',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889400/naturales_bubhvc.png',
      categoryId: categoryIds.Refrescos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Peñafiel',
      description: 'Peñafiel de 600ml varios sabores',
      price: 0,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750891820/pe%C3%B1afiel_vhs1sp.png',
      categoryId: categoryIds.Refrescos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Chocomilk',
      description: '',
      price: 38,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889412/chocomilk_hovchk.png',
      categoryId: categoryIds.Refrescos,
      isAvailable: true,
      createdAt: new Date()
    },
    {
      id: randomUUID(),
      name: 'Malteada',
      description: '',
      price: 70,
      image: 'https://res.cloudinary.com/dhyds3mnm/image/upload/v1750889398/malteada_hbnzjb.png',
      categoryId: categoryIds.Refrescos,
      isAvailable: true,
      createdAt: new Date()
    }
  ]

  const initialOptions: ProductOption[] = [
    // LAS LIGERAS

    // Marinera (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Francés',
      price: 50,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Telera',
      price: 50,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Cuernito',
      price: 50,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Sándwich',
      price: 50,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Gloria',
      price: 38,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Marinera (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Marinera (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Marinera')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Capitán Fit (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Francés',
      price: 68,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Telera',
      price: 68,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Cuernito',
      price: 68,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Sándwich',
      price: 68,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Gloria',
      price: 45,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Capitán Fit (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Capitán Fit (variables)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán Fit')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Corbeta (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Francés',
      price: 72,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Telera',
      price: 72,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Cuernito',
      price: 72,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Sándwich',
      price: 69,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Corbeta (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Corbeta (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Corbeta')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // DULCE Y SALADO

    // Fragata (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Francés',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Telera',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Cuernito',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Sándwich',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Gloria',
      price: 40,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Fragata (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Fragata (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Fragata')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Surtida (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Francés',
      price: 80,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Telera',
      price: 80,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Cuernito',
      price: 80,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Sándwich',
      price: 70,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Gloria',
      price: 55,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Surtida (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Surtida (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Surtida')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Teniente (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Francés',
      price: 80,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Telera',
      price: 80,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Cuernito',
      price: 80,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Sándwich',
      price: 70,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Gloria',
      price: 55,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Teniente (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Teniente (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Teniente')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Almirante (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Francés',
      price: 88,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Telera',
      price: 88,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Cuernito',
      price: 88,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Sándwich',
      price: 78,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Gloria',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Almirante (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Almirante (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Almirante')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // PARMESANAS

    // Navy Pizza (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Francés',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Telera',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Cuernito',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Sándwich',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Gloria',
      price: 40,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Navy Pizza (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Navy Pizza (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navy Pizza')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Navio Parmesana (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Francés',
      price: 75,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Telera',
      price: 75,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Cuernito',
      price: 75,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Sándwich',
      price: 68,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Gloria',
      price: 40,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Navio Parmesana (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Navio Parmesana (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio Parmesana')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Búfalo Parmesana (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Francés',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Telera',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Cuernito',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Sándwich',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Gloria',
      price: 40,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Búfalo Parmesana (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Búfalo Parmesana (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Búfalo Parmesana')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Timón (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Francés',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Telera',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Cuernito',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Sándwich',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Gloria',
      price: 40,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Timón (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Timón (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Timón')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // But Negro (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Francés',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Telera',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Cuernito',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Sándwich',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Gloria',
      price: 40,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // But Negro (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // But Negro (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'But Negro')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Propela (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Francés',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Telera',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Cuernito',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Sándwich',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Gloria',
      price: 40,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Propela (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Propela (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Propela')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Navio (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Francés',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Telera',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Cuernito',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Sándwich',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Gloria',
      price: 40,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Navio (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Navio (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Navio')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Capitán (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Francés',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Telera',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Cuernito',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Sándwich',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Gloria',
      price: 40,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Capitán (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Capitán (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Capitán')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Castacán (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Francés',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Telera',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Cuernito',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Sándwich',
      price: 60,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Gloria',
      price: 40,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Castacán (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Castacán (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Castacán')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },

    // Comandante (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Cebolla asada',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Queso',
      price: 18,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Chorizo argentino',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Cubierta de parmesano',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Jamón claveteado',
      price: 20,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Tocino (1 rebanada)',
      price: 12,
      quantity: 0,
      isAvailable: true,
      type: 'ingredient'
    },
    // Comandante (comment)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Comentario',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'note'
    },
    // Comandante (limited ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Marinera',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Capitán Fit',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Corbeta',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Fragata',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Surtida',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Teniente',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Almirante',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Navy Pizza',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Navio Parmesana',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Búfalo Parmesana',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Timón',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'But Negro',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Propela',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Navio',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Capitán',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Comandante')!.id,
      name: 'Castacán (viernes y sábado)',
      price: 0,
      quantity: 0,
      isAvailable: true,
      type: 'limited_ingredient'
    },

    // REFRESCOS
    // refresco natural (ingredients)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Horchata 500ml',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Horchata 1lt',
      price: 42,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Jamaica 500ml',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Jamaica 1lt',
      price: 42,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Limonada fresa 500 ml',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Limonada fresa 1 lt',
      price: 42,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Pepino limón 500ml',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Pepino limón 1 lt',
      price: 42,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Chaya Piña 500ml (solo en temporada)',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Chaya Piña 1 lt (solo en temporada)',
      price: 42,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Piña 500ml (solo en temporada)',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Piña 1 lt (solo en temporada)',
      price: 42,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Lima 500ml (solo en temporada)',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Mandarina 500ml (solo en temporada)',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Mandarina 1 lt (solo en temporada)',
      price: 42,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Pitalla 500 ml (solo en temporada)',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Pitalla 1 lt (solo en temporada)',
      price: 42,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Marañon 500ml (solo en temporada)',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Refresco natural')!.id,
      name: 'Marañon 1 lt (solo en temporada)',
      price: 42,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Peñafiel')!.id,
      name: 'Fresa',
      price: 32,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Peñafiel')!.id,
      name: 'Manzana',
      price: 32,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Peñafiel')!.id,
      name: 'Agua mineral',
      price: 32,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    // Té Reca (sizes)
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Té Reca')!.id,
      name: 'Original 500ml',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Té Reca')!.id,
      name: 'Original ligero 500ml',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Té Reca')!.id,
      name: 'Con limón 500ml',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Té Reca')!.id,
      name: 'Verde',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Té Reca')!.id,
      name: 'Original 1lt',
      price: 25,
      quantity: 0,
      isAvailable: true,
      type: 'size'
    },
    {
      id: randomUUID(),
      productId: products.find(p => p.name === 'Té Reca')!.id,
      name: 'Con limón 1lt',
      price: 25,
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
