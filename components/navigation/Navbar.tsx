"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Experiments", href: "/experiments" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-border/70 bg-background/80 px-3 py-3 backdrop-blur-xl">
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-xl px-3 py-2"
          aria-label="Hirdesh home"
        >
          <span className="font-mono text-sm font-medium tracking-tight">
            H.
          </span>

          <span className="hidden text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:block">
            Hirdesh
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-surface-elevated text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="ml-1 hidden items-center gap-1 rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 !text-zinc-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-200 sm:flex"
          >
            Let's talk
            <ArrowUpRight className="size-3.5 text-zinc-950" />
          </Link>
        </div>
      </nav>
    </header>
  );
}