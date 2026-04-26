"use client"

import { useEffect, useRef } from "react"
import { X, Download, Share2, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import QRCode from "qrcode"

interface QRCodeModalProps {
  onClose: () => void
}

export function QRCodeModal({ onClose }: QRCodeModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const menuUrl = typeof window !== "undefined" ? window.location.href : ""

  useEffect(() => {
    if (canvasRef.current && menuUrl) {
      QRCode.toCanvas(canvasRef.current, menuUrl, {
        width: 220,
        margin: 2,
        color: {
          dark: "#1f2937",
          light: "#ffffff",
        },
      })
    }
  }, [menuUrl])

  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement("a")
      link.download = "roof-409-menu-qr.png"
      link.href = canvasRef.current.toDataURL()
      link.click()
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "RooF 409 Menu",
          text: "Check out the menu at RooF 409 - Cafe and Restaurant",
          url: menuUrl,
        })
      } catch {
        // User cancelled or share failed
      }
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-b from-card to-background border border-border/50 shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Header */}
        <div className="pt-10 pb-6 px-6 text-center bg-gradient-to-b from-primary/10 to-transparent">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4">
            <Coffee className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">
            R<span className="text-primary">oo</span>F 4<span className="text-primary">0</span>9
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            امسح الكود لفتح المنيو
          </p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center px-6 pb-6">
          <div className="bg-white p-5 rounded-2xl shadow-lg shadow-black/20">
            <canvas ref={canvasRef} />
          </div>
        </div>

        {/* URL Display */}
        <div className="mx-6 mb-6 bg-muted/50 rounded-xl px-4 py-3 overflow-hidden border border-border/50">
          <p className="text-xs text-muted-foreground truncate text-center" dir="ltr">
            {menuUrl}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6 flex gap-3">
          <Button
            variant="outline"
            className="flex-1 rounded-xl h-12 border-border/50"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4 ml-2" />
            تحميل
          </Button>
          {typeof navigator !== "undefined" && navigator.share && (
            <Button
              className="flex-1 rounded-xl h-12"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 ml-2" />
              مشاركة
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
