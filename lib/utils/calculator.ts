import { formatTurkishCurrency } from "./currency";

export function calculateVAT(amount: number, rate: number, isVATIncluded: boolean) {
  if (isVATIncluded) {
    // KDV dahil tutardan KDV hariç tutar hesaplama
    const baseAmount = amount / (1 + rate / 100);
    const vatAmount = amount - baseAmount;
    return {
      baseAmount: formatTurkishCurrency(baseAmount),
      vatAmount: formatTurkishCurrency(vatAmount),
      totalAmount: formatTurkishCurrency(amount)
    };
  } else {
    // KDV hariç tutardan KDV dahil tutar hesaplama
    const vatAmount = amount * (rate / 100);
    const totalAmount = amount + vatAmount;
    return {
      baseAmount: formatTurkishCurrency(amount),
      vatAmount: formatTurkishCurrency(vatAmount),
      totalAmount: formatTurkishCurrency(totalAmount)
    };
  }
}