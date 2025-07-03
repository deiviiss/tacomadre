'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, List } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useUiStore, useCartStore } from '@/store'

export function Navbar() {
  const { openSideCart, toggleCategories } = useUiStore()
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <header className="bg-card shadow-md sticky top-0 z-40">
      <div className="container mx-auto pl-2 pr-3 sm:px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1"
          >
            <Link href="/" >
              <Image
                src="/images/logo.webp"
                alt="taco-madre logo"
                width={180}
                height={180}
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex items-center space-x-3">

            {/* Category button */}
            <Button variant="ghost" size="sm" onClick={toggleCategories} className="flex items-center md:hidden">
              <List className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Categorías</span>
            </Button>

            {/* Cart button */}
            <Button variant="ghost" size="sm" onClick={openSideCart} className="flex items-center relative">
              <ShoppingCart className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Carrito</span>
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-destructive text-muted px-1.5 py-0.5 text-xs rounded-full">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
