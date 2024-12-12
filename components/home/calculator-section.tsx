import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalculatorForm } from "../calculator/calculator-form"

export function CalculatorSection() {
  return (
    <section className="py-12 bg-background" id="calculator">
      <div className="container max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>KDV Hesaplama</CardTitle>
          </CardHeader>
          <CardContent>
            <CalculatorForm />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}