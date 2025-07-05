'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'
import { ProductOptionButton } from './product-options-button'
import ProductOptionsModal from './product-options-modal'
import { Button } from '@/components/ui/button'
import type { Product } from '@/lib/types'
import { useCartStore } from '@/store'

interface ProductCardProps {
  product: Product
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  },
  hover: {
    y: -5,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: { duration: 0.2 }
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const hasOptions = product.options && product.options.length > 0
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddToCart = () => {
    if (hasOptions) {
      setIsModalOpen(true)
      return
    }

    setIsSubmitting(true)
    // Simulate a small delay for the animation
    setTimeout(() => {
      addToCart(product)
      setIsSubmitting(false)
      toast.success(`${product.name} agregado al carrito`, {
        position: 'bottom-right'
      })
    }, 300)
  }

  return (
    <>
      <motion.div className="bg-card border border-secondary rounded-lg shadow-md overflow-hidden h-full flex flex-col" variants={cardVariants} whileHover="hover">
        <div className="relative h-48">
          <Image
            src={product.image || '/images/placeholder.webp'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4 flex-grow">
          <h3 className="text-lg md:text-xl font-semibold mb-1">{product.name}</h3>

          {product.description && <p className="text-secondary text-sm lg:text-base mb-3 line-clamp-2 font-medium">
            {product.description}
          </p>}

        </div>
        <div className="flex justify-between items-center p-4 pt-0">
          <Button
            onClick={handleAddToCart}
            disabled={isSubmitting}
            size="sm"
            variant={'secondary'}
            className="bg-secondary hover:bg-secondary/80"
          >
            <ProductOptionButton product={product} />
          </Button>

          <p className="text-xl font-extrabold text-secondary">{`${product.price ? `$ ${product.price}` : ''}`}</p>
        </div>
      </motion.div>

      <ProductOptionsModal product={product} isOpen={isModalOpen} onClose={() => { setIsModalOpen(false) }} />

    </>
  )
}
