'use client'

import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import type { Promotion } from '@/lib/types'
import { useCartStore } from '@/store'

interface PromotionBannerProps {
  promotions: Promotion[]
}

export function PromotionBanner({ promotions }: PromotionBannerProps) {
  const { addToCart } = useCartStore()
  const [activePromotions, setActivePromotions] = useState<Promotion[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Filter active promotions within the state
    const filtered = promotions.filter((promo) => {
      return promo.isActive
    })
    setActivePromotions(filtered)
  }, [promotions])

  if (activePromotions.length === 0) {
    return null
  }

  const handleAddPromoToCart = (promotion: Promotion) => {
    // Add all products from the promotion to the cart
    const promoProduct = {
      id: promotion.id,
      name: promotion.name,
      description: promotion.description,
      price: promotion.promoPrice,
      image: promotion.image,
      categoryId: promotion.categoryId,
      categoryName: 'Promoción',
      isAvailable: true,
      isPromotion: true,
      createdAt: new Date()
    }

    addToCart(promoProduct)
    setIsLoading(false)
    toast.success(`${promoProduct.name} agregado al carrito`, {
      position: 'bottom-right'
    })
  }

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center max-w-screen-lg mx-auto">
      {activePromotions.map((promotion, index) => {
        // Calculate total price and discounted price
        const { promoPrice } = promotion

        return (
          <motion.div
            key={promotion.id}
            className="bg-card border border-primary rounded-lg shadow-md overflow-hidden max-w-lg w-full h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="relative h-48">
              <Image
                src={promotion.image || '/images/placeholder.webp'}
                alt={promotion.name}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                {/* <h3 className="font-bold text-xl text-white">{promotion.name}</h3> */}
                {/* <div className="flex items-center mt-1">
                  <Tag className="h-4 w-4 text-white mr-1" />
                  <span className="text-white font-semibold text-sm">
                    {discountPercentage}% DESCUENTO
                  </span>
                </div> */}
              </div>
            </div>
            <div className="p-4 flex-grow justify-between flex flex-col">
              <h3 className="font-bold text-xl text-white">{promotion.name}</h3>
              <p className="text-muted-foreground mb-3 text-sm">{promotion.description}</p>
              {
                promoPrice > 0 && (<div className="flex justify-end items-center mb-4">
                  <span className="text-xl font-bold text-secondary">$ {promoPrice}</span>
                </div>)
              }
            </div>

            {
              promotion.promoPrice > 0
                ? (
                  <div className="flex justify-between items-center p-4 pt-0">
                    <Button
                      variant='secondary'
                      onClick={() => { handleAddPromoToCart(promotion) }}
                      disabled={isLoading}
                      className="w-full"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Agregar al carrito
                    </Button>
                  </div>)
                : (
                  <div className="flex justify-between items-center p-4 pt-0">
                    <Button
                      variant='secondary'
                      onClick={() => { scrollToCategory(promotion.categoryId) }}
                      disabled={isLoading}
                      className="w-full"
                    >
                      Ver
                    </Button>
                  </div>)
            }

          </motion.div>
        )
      })}
    </div>
  )
}
