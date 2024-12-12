"use client"

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export function RateField({ control }) {
  return (
    <FormField
      control={control}
      name="rate"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gray-300">KDV Oranı</FormLabel>
          <FormControl>
            <div className="grid grid-cols-5 gap-2">
              {["20", "18", "10", "8", "1"].map((rate) => (
                <Button
                  key={rate}
                  type="button"
                  variant={field.value === rate ? "default" : "outline"}
                  onClick={() => field.onChange(rate)}
                  className={`w-full ${
                    field.value === rate
                      ? "bg-yellow-500 hover:bg-yellow-400 text-black"
                      : "border-yellow-500/20 text-gray-300 hover:bg-yellow-500/5"
                  }`}
                >
                  %{rate}
                </Button>
              ))}
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}