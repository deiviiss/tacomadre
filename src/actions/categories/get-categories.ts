'use server'

import { type Category } from '@/lib/types'

export async function getCategories(): Promise<Category[]> {
  const categories: Category[] = [
    {
      id: '052f8c37-9713-476e-bcea-b75d3b9c2f18',
      name: 'Tacos',
      description: 'Tortilla artesanal de maíz azul, cebolla asada y guacamole',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: '1d975b19-a4a7-4b9f-802b-764650f07df2',
      name: 'Tortas',
      description: 'Frijol, queso, cebolla asada y guacamole',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: '956512ec-edac-4484-967d-1009e92cc9a4',
      name: 'Gringas',
      description: 'Queso, cebolla asada y guacamole',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    // {
    //   id: 'dc659333-dcb6-47e9-96b7-272b8cdd0b71',
    //   name: 'Promociones',
    //   image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    // },
    // {
    //   id: 'e3bd5418-9ece-459d-b95c-4a6499843ef4',
    //   name: 'Refrescos',
    //   image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    // },
    {
      id: '29a1c64f-173e-4d4d-9d1e-8b73a54e1f5e',
      name: 'Burritos',
      description: 'Queso, cebolla asada, guacamole, lechuga y frijol',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    // {
    //   id: '8e402f16-1cb1-40f3-8eb1-2a2dbf6c9245',
    //   name: 'Chori-pan',
    //   image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    // },
    {
      id: 'c90dc4aa-d6e7-41fa-a08c-24c8f4d1b181',
      name: 'Parrilladas',
      description: '',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: 'fbd1e6f4-7f7b-4fa9-8fb6-47ff2e3f877f',
      name: 'Carne al Pastor',
      description: '',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: '3cb1eac1-77c0-45d5-947d-53c4c6e07c80',
      name: 'Carne Asada de Cerdo',
      description: '',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: '6d2d8f6f-c5ae-40fb-9145-1c2f0fc321d9',
      name: 'Las Burgers',
      description: '',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: '37a0eb90-f79b-4766-bb6d-f8f04c39b18a',
      name: 'Papas Fritas',
      description: '',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: 'fae8f2d2-1453-4d0c-9572-88e462d8b76f',
      name: 'Extras',
      description: '',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    }
  ]

  if (!categories) return []
  return categories
}
