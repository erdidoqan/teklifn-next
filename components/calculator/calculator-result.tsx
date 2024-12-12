"use client"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface CalculatorResultProps {
  baseAmount: string;
  vatAmount: string;
  totalAmount: string;
  rate: number;
}

export function CalculatorResult({ baseAmount, vatAmount, totalAmount, rate }: CalculatorResultProps) {
  const currentDate = new Date().toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="mt-6 p-6 bg-black/40 border-yellow-500/20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-white">Teklif Özeti</h3>
            <p className="text-sm text-gray-400">Tarih: {currentDate}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Teklif No:</p>
            <p className="text-sm text-white">#TKF-{Math.floor(Math.random() * 10000)}</p>
          </div>
        </div>

        <Separator className="bg-yellow-500/20" />

        {/* Details */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Ara Toplam</span>
            <span className="text-white font-medium">{baseAmount} ₺</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">KDV (%{rate})</span>
            <span className="text-white font-medium">{vatAmount} ₺</span>
          </div>
        </div>

        <Separator className="bg-yellow-500/20" />

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="text-lg text-gray-300">Genel Toplam</span>
          <span className="text-xl font-bold text-yellow-500">{totalAmount} ₺</span>
        </div>

        {/* Notes */}
        <div className="text-sm text-gray-400 space-y-1">
          <p>* Bu teklif 7 gün geçerlidir.</p>
          <p>* Fiyatlara KDV dahildir.</p>
          <p>* Ödeme şartları: Peşin</p>
        </div>
      </div>
    </Card>
  );
}