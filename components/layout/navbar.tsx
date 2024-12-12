"use client"

import Link from "next/link"
import { NavLinks } from "./nav-links"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="text-xl font-bold">
            Teklifn
          </Link>
        </div>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
          <Button>Ücretsiz Dene</Button>
        </div>
      </div>
    </nav>
  )
}