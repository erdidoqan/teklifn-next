"use client"

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { CurrencyInput } from "@/components/ui/currency-input"
import { useFormContext } from "react-hook-form"

export function AmountField({ control }) {
  const { watch } = useFormContext()
  const type = watch("type")

  return (
    <FormField
      control={control}
      name="amount"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gray-300">
            {type === "kdv-haric" ? "KDV Hariç Tutar" : "KDV Dahil Tutar"}
          </FormLabel>
          <FormControl>
            <CurrencyInput
              placeholder="0,00"
              className="bg-black/40 border-yellow-500/20 text-white pr-8"
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}