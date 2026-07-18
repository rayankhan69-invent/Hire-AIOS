"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { NavItem } from "@/components/layout/nav-item";
import { primaryNav } from "@/lib/nav-config";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col p-0">
        <div className="flex h-16 items-center border-b border-sidebar-border px-5">
          <Logo className="text-sidebar-foreground [&_span]:text-sidebar-foreground" />
        </div>
        <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
          {primaryNav.map((section, i) => (
            <div key={section.title ?? i} className="space-y-1">
              {section.title ? (
                <p className="px-3 pb-1 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/40">
                  {section.title}
                </p>
              ) : null}
              {section.items.map((item) => (
                <NavItem key={item.href} item={item} onNavigate={() => setOpen(false)} />
              ))}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
