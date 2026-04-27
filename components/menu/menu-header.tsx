"use client"

import { QrCode, MapPin, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MenuHeaderProps {
  onShowQR: () => void
}

export function MenuHeader({ onShowQR }: MenuHeaderProps) {
  return (
    <header className="relative min-h-[60vh] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9pSmC3f75uI8n3qw1UfAwCP3dheWPBCzOw&s')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
      </div>
      
      {/* Floating QR Button */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={onShowQR}
          className="bg-black/30 border-white/20 text-white hover:bg-black/50 hover:text-white backdrop-blur-md rounded-full h-12 w-12 shadow-xl"
        >
          <QrCode className="h-5 w-5" />
          <span className="sr-only">Show QR Code</span>
        </Button>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 py-12">
        {/* Coffee Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm mb-6">
          <Coffee className="w-8 h-8 text-primary" />
        </div>
        
        {/* Logo */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
          R<span className="text-primary">oo</span>F 4<span className="text-primary">0</span>9
        </h1>
        
        {/* Tagline */}
        <p className="text-white/90 text-xl md:text-2xl font-light mb-2">
          كافيه ومطعم في نجع حمادي
        </p>
        <p className="text-white/60 text-sm tracking-widest uppercase">
          Cafe & Restaurant
        </p>
        
        {/* Location Badge */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white/90 text-sm border border-white/10">
            <MapPin className="h-4 w-4 text-primary" />
            <span> قنا - نجع حمادي - الدور الثالث اعلى نادي الزراعيين</span>
          </div>
        </div>

        {/* Powered by */}
        <p className="text-white/40 text-xs mt-8 tracking-wide">
          Delivery :التواصل <span className="text-primary/80"> 01202521270</span>
        </p>
      </div>
      
      
      {/* <footer className="fixed bottom-0 left-0 w-full text-center pb-4 bg-black">
  <p className="text-white/40 text-xs tracking-wide">
  <span>    قنا - نجع حمادي - الدور الثالث اعلى نادي الزراعيين ----- </span>
     Delivery :<span className="text-primary/80">  01202521270  </span><br></br>
    Powered by <span className="text-primary/80">Mostafa Abdo </span>
  </p>
</footer> */}



      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </header>
  )
}
