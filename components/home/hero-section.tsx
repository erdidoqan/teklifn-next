import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container relative text-center">
        <Badge variant="outline" className="mb-4 text-white border-white/20">
          Teklif hazırlamayı kolaylaştırıyoruz
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Teklifn ile<br />
          Hızlı Teklif Hazırlayın
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          KDV hesaplamalarını otomatik yapın, profesyonel teklifler hazırlayın ve işinizi büyütün. 
          Ücretsiz teklif şablonları ile zamandan tasarruf edin.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 bg-yellow-500 text-black hover:bg-yellow-400">
            Hemen Teklif Hazırla
          </Button>
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
            Kullanmaya başlayın
          </Button>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/40?img=${i}`}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-black"
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">
            1000+ işletme tarafından Teklifn ile hazırlanır
          </span>
        </div>
      </div>
    </section>
  )
}