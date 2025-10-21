import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  height?: "sm" | "md" | "lg"
}

export function PageHero({ title, subtitle, backgroundImage, height = "md" }: PageHeroProps) {
  const heightClasses = {
    sm: "h-[300px] md:h-[350px]",
    md: "h-[400px] md:h-[500px]",
    lg: "h-[500px] md:h-[600px]",
  }

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center mt-16 lg:mt-20`}>
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          style={{ filter: "brightness(0.4)" }}
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-balance leading-tight">
          {title}
        </h1>
        {subtitle && <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}
