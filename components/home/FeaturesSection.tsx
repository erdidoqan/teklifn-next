"use client";

import { Calculator, FileSpreadsheet, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Akıllı KDV Hesaplama",
    description: "Girilen rakamlarla saniyeler içinde doğru KDV oranını hesaplayın."
  },
  {
    icon: FileSpreadsheet,
    title: "Yapay Zeka Destekli Teklif Önerileri",
    description: "Ürün bilgilerinizi girin, zekice önerilerle otomatik olarak oluşturun."
  },
  {
    icon: Zap,
    title: "Kişiselleştirilmiş Teklifler",
    description: "Şirket bilgilerinizi ekleyerek özelleştirilmiş teklifler hazırlayın."
  },
  {
    icon: Users,
    title: "Adım Adım Kolaylık",
    description: "Kullanıcı dostu tasarım sayesinde tüm işlemler kolayca tamamlayın."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Teklifn'in Öne Çıkan Özellikleri</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            İşletmenizi büyütmek için ihtiyacınız olan tüm özellikler tek bir platformda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}