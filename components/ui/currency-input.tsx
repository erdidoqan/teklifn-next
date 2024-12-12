"use client"

import * as React from "react"
import { Input } from "./input"

interface CurrencyInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (value: string) => void
}

export const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ onChange, value, className, ...props }, ref) => {
    // Format the initial value
    const formatValue = (val: string) => {
      // Remove all non-numeric characters
      const numbers = val.replace(/\D/g, "")
      
      // Add thousand separators
      return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target.value.replace(/\D/g, "")
      
      if (input === "") {
        onChange?.("")
        return
      }

      const formatted = formatValue(input)
      onChange?.(formatted)
    }

    // Format display value
    const displayValue = value ? formatValue(value.toString()) : ""

    return (
      <div className="relative">
        <Input
          {...props}
          ref={ref}
          inputMode="numeric"
          value={displayValue}
          onChange={handleChange}
          className={className}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          ₺
        </span>
      </div>
    )
  }
)

CurrencyInput.displayName = "CurrencyInput"