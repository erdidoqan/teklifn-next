"use client"

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function CalculatorTypeField({ control }) {
  return (
    <FormField
      control={control}
      name="type"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 border border-yellow-500/20 rounded-lg p-4 cursor-pointer hover:bg-yellow-500/5">
                <RadioGroupItem value="kdv-haric" id="kdv-haric" />
                <FormLabel htmlFor="kdv-haric" className="cursor-pointer text-gray-300">
                  KDV Hariç Tutardan KDV Dahil Tutar Hesapla
                </FormLabel>
              </div>
              <div className="flex items-center space-x-2 border border-yellow-500/20 rounded-lg p-4 cursor-pointer hover:bg-yellow-500/5">
                <RadioGroupItem value="kdv-dahil" id="kdv-dahil" />
                <FormLabel htmlFor="kdv-dahil" className="cursor-pointer text-gray-300">
                  KDV Dahil Tutardan KDV Hariç Tutar Hesapla
                </FormLabel>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}