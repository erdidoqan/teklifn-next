export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Teklifn",
    "description": "KDV hesaplamalarını otomatik yapın, profesyonel teklifler hazırlayın.",
    "url": "https://teklifn.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "featureList": [
      "KDV Hesaplama",
      "Teklif Hazırlama",
      "Proforma Fatura Oluşturma",
      "Teklif Şablonları"
    ],
    "author": {
      "@type": "Organization",
      "name": "Teklifn",
      "url": "https://teklifn.com"
    }
  };
}