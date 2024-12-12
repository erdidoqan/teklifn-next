import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-black py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Teklifn. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-yellow-500">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500">
              Kullanım Koşulları
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}