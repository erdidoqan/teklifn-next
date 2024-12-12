import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorForm } from "@/components/calculator/calculator-form";

export function CalculatorSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black" id="calculator">
      <div className="container max-w-3xl">
        <Card className="border-yellow-500/20 bg-black/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">KDV Hesaplama</CardTitle>
          </CardHeader>
          <CardContent>
            <CalculatorForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}