"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export function CalculatorSection() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-6">KDV Hesaplama</h2>
          
          <div className="space-y-6">
            <RadioGroup defaultValue="kdv-haric" className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 border rounded-lg p-4">
                <RadioGroupItem value="kdv-haric" id="kdv-haric" />
                <Label htmlFor="kdv-haric">KDV Hariç Tutardan KDV Dahil Tutar Hesapla</Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-4">
                <RadioGroupItem value="kdv-dahil" id="kdv-dahil" />
                <Label htmlFor="kdv-dahil">KDV Dahil Tutardan KDV Hariç Tutar Hesapla</Label>
              </div>
            </RadioGroup>

            <div>
              <Label htmlFor="amount">KDV Hariç Tutar</Label>
              <Input id="amount" type="number" placeholder="0,00" className="mt-1" />
            </div>

            <div>
              <Label>KDV Oranı</Label>
              <div className="grid grid-cols-5 gap-2 mt-1">
                {["%20", "%18", "%10", "%8", "Diğer"].map((rate) => (
                  <Button
                    key={rate}
                    variant={rate === "%20" ? "default" : "outline"}
                    className="w-full"
                  >
                    {rate}
                  </Button>
                ))}
              </div>
            </div>

            <Button className="w-full">Hesapla</Button>
          </div>
        </div>
      </div>
    </section>
  );
}