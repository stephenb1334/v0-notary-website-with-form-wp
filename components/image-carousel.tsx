"use client"

export function ImageCarousel() {
  const images = [
    { src: "/images/carousel/signature-1.jpg", alt: "Professional signature" },
    { src: "/images/carousel/document-pen.jpg", alt: "Document with pen" },
    { src: "/images/carousel/notaries-signature.jpg", alt: "Notaries signature" },
    { src: "/images/carousel/house-model.jpg", alt: "House model for real estate" },
    { src: "/images/carousel/jill-portrait.jpg", alt: "Jill Munoz portrait" },
    { src: "/images/carousel/signing-document.jpg", alt: "Signing document" },
    { src: "/images/carousel/handshake-house.jpg", alt: "Business handshake" },
    { src: "/images/carousel/syringe.jpg", alt: "Medical notarization" },
    { src: "/images/carousel/munoz-signature.jpg", alt: "Munoz signature" },
    { src: "/images/carousel/house-keys.jpg", alt: "House keys" },
  ]

  return (
    <div className="relative overflow-hidden bg-background py-8">
      <div className="carousel-track flex gap-6">
        {/* First set of images */}
        {images.map((image, index) => (
          <div key={`first-${index}`} className="carousel-item flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((image, index) => (
          <div key={`second-${index}`} className="carousel-item flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .carousel-track {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
