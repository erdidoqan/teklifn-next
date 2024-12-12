"use client";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="secondary" className="mb-4">
          Teklif hazırlamayı kolaylaştırıyoruz
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Teklifn ile<br />
          Hızlı Teklif Hazırlayın
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          KDV hesaplamalarını otomatik yapın, profesyonel teklifler hazırlayın ve işinizi büyütün. Ücretsiz teklif şablonları ile zamandan tasarruf edin.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8">
            Hemen Teklif Hazırla
          </Button>
          <Button variant="outline" size="lg">
            Kullanmaya başlayın
          </Button>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-secondary border-2 border-background"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            1000+ işletme tarafından Teklifn ile hazırlanır
          </span>
        </div>
      </div>
    </section>
  );
}