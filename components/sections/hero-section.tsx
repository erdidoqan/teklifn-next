import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserAvatars } from "@/components/ui/user-avatars";

export function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-6 text-yellow-500 border-yellow-500/20">
            Teklif hazırlamayı kolaylaştırıyoruz
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Teklifn ile<br />
            Hızlı Teklif Hazırlayın
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            KDV hesaplamalarını otomatik yapın, profesyonel teklifler hazırlayın ve işinizi büyütün.
            Ücretsiz teklif şablonları ile zamandan tasarruf edin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8">
              Hemen Teklif Hazırla
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              Kullanmaya başlayın
            </Button>
          </div>
          <UserAvatars />
        </div>
      </div>
    </section>
  );
}