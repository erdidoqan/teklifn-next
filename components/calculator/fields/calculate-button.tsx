import { Button } from "@/components/ui/button";

export function CalculateButton() {
  return (
    <Button 
      type="submit" 
      className="w-full bg-yellow-500 hover:bg-yellow-400 text-black"
    >
      Hesapla
    </Button>
  );
}