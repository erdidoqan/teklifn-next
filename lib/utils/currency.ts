export function formatTurkishCurrency(value: number): string {
  return new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function parseTurkishCurrency(value: string): number {
  if (!value) return 0;
  
  // Remove all non-numeric characters
  const sanitized = value.replace(/\D/g, '');
  
  return Number(sanitized) || 0;
}