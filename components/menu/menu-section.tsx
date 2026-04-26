"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { MenuCategory } from "@/lib/menu-data"

interface MenuSectionProps {
  category: MenuCategory
}

export const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(
  function MenuSection({ category }, ref) {
    return (
      <section ref={ref} className="scroll-mt-36 mb-2">
        {/* Section Header with Image */}
        <div className="relative h-56 md:h-64 overflow-hidden group">
          <Image
            src={category.image}
            alt={category.nameAr}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          
          {/* Section Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <span className="text-primary text-4xl mb-2">{category.icon}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center tracking-wide">
              {category.nameAr}
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <span className="h-px w-12 bg-primary/60" />
              <p className="text-white/70 text-sm tracking-widest uppercase">
                {category.name}
              </p>
              <span className="h-px w-12 bg-primary/60" />
            </div>
          </div>
        </div>

        {/* Items List */}
        <div className="px-4 py-6 bg-background">
          <div className="max-w-2xl mx-auto space-y-3">
            {category.items.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between p-4 bg-card rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  {/* Item Info */}
                  <div className="flex-1 pl-4">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">
                        {item.nameAr}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5 font-light">
                      {item.name}
                    </p>
                    {item.descriptionAr && (
                      <p className="text-xs text-muted-foreground/70 mt-2 leading-relaxed line-clamp-2">
                        {item.descriptionAr}
                      </p>
                    )}
                  </div>
                  
                  {/* Price Tag */}
                  <div className="flex flex-col items-center justify-center min-w-[70px] mr-2">
                    <div className="bg-primary/10 rounded-xl px-4 py-2 border border-primary/20">
                      <span className="text-xl font-bold text-primary">
                        {item.price}
                      </span>
                      <span className="text-[10px] text-primary/70 block text-center">
                        EGP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
)
