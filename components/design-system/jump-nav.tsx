"use client";

const links = [
  { href: "#colors", label: "Color" },
  { href: "#typography", label: "Typography" },
  { href: "#buttons", label: "Buttons" },
  { href: "#cards", label: "Cards" },
  { href: "#tables", label: "Tables" },
  { href: "#inputs", label: "Inputs" },
  { href: "#modal", label: "Modal" },
  { href: "#badges-avatars", label: "Badges & avatars" },
  { href: "#status-chips", label: "Status chips" },
  { href: "#sidebar", label: "Sidebar" },
];

export function DesignSystemJumpNav() {
  return (
    <nav className="scrollbar-thin -mx-1 flex gap-1 overflow-x-auto px-1 pb-1">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
