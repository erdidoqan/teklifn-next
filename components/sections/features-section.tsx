"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileSpreadsheet, Users, Zap } from "lucide-react"

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
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Teklifn'in Öne Çıkan Özellikleri</h2>
          <p className="mt-4 text-lg text-gray-400">
            İşletmenizi büyütmek için ihtiyacınız olan tüm özellikler tek bir platformda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-black/40 border-yellow-500/20 backdrop-blur-sm">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}