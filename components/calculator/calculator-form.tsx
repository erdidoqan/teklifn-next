"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { CalculatorTypeField } from "./fields/calculator-type-field";
import { AmountField } from "./fields/amount-field";
import { RateField } from "./fields/rate-field";
import { CalculateButton } from "./fields/calculate-button";
import { CalculatorResult } from "./calculator-result";
import { calculateVAT } from "@/lib/utils/calculator";
import { parseTurkishCurrency } from "@/lib/utils/currency";

const calculatorSchema = z.object({
  type: z.enum(["kdv-haric", "kdv-dahil"]),
  amount: z.string().min(1, "Tutar gereklidir"),
  rate: z.string()
});

export function CalculatorForm() {
  const [result, setResult] = useState(null);

  const form = useForm({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      type: "kdv-haric",
      amount: "",
      rate: "20"
    },
  });

  function onSubmit(values) {
    const amount = parseTurkishCurrency(values.amount);
    const rate = parseFloat(values.rate);
    const isVATIncluded = values.type === "kdv-dahil";

    if (!isNaN(amount) && !isNaN(rate)) {
      const result = calculateVAT(amount, rate, isVATIncluded);
      setResult(result);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CalculatorTypeField control={form.control} />
        <AmountField control={form.control} />
        <RateField control={form.control} />
        <CalculateButton />
        {result && <CalculatorResult {...result} rate={parseFloat(form.getValues("rate"))} />}
      </form>
    </Form>
  );
}