'use server'

import { type Category } from '@/lib/types'

export async function getCategories(): Promise<Category[]> {
  const categories: Category[] = [
    {
      id: '052f8c37-9713-476e-bcea-b75d3b9c2f18',
      name: 'Tacos',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: '1d975b19-a4a7-4b9f-802b-764650f07df2',
      name: 'Gringas',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: '956512ec-edac-4484-967d-1009e92cc9a4',
      name: 'Tortas',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: 'dc659333-dcb6-47e9-96b7-272b8cdd0b71',
      name: 'Promociones',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    },
    {
      id: 'e3bd5418-9ece-459d-b95c-4a6499843ef4',
      name: 'Refrescos',
      image: 'https://res.cloudinary.com/djq34ckkj/image/upload/v1749682954/placeholder_ugdi4t.webp'
    }
  ]

  if (!categories) return []
  return categories
}
