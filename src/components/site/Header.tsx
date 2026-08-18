import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Mail, Phone } from "lucide-react";
import { mainNav, topLinks, type NavEntry, type NavItem } from "@/data/navigation";

const LOGO = "https://www.mhssce.ac.in/images/logo.png";

function DesktopSubList({ items }: { items: NavItem[] }) {
  return (
    <ul className="menu-dropdown">
      {items.map((item) => (
        <li key={item.label} className="relative group/sub">
          <a href={item.href ?? "#"} className="menu-dropdown-link">
            <span>{item.label}</span>
            {item.children ? <ChevronDown className="h-3 w-3 -rotate-90" /> : null}
          </a>
          {item.children ? (
            <div className="invisible absolute left-full top-0 opacity-0 transition-opacity group-hover/sub:visible group-hover/sub:opacity-100">
              <DesktopSubList items={item.children} />
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function DesktopEntry({ entry }: { entry: NavEntry }) {
  const hasPanel = entry.type === "dropdown" || entry.type === "megamenu";
  return (
    <li className="group relative">
      <a href={entry.href ?? "#"} className="menu-link">
        {entry.label}
        {hasPanel ? <ChevronDown className="ml-1 h-3.5 w-3.5" /> : null}
      </a>

      {entry.type === "dropdown" && entry.items ? (
        <div className="invisible absolute left-0 top-full z-50 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
          <DesktopSubList items={entry.items} />
        </div>
      ) : null}

      {entry.type === "megamenu" && entry.columns ? (
        <div className="invisible absolute left-0 top-full z-50 w-[900px] max-w-[calc(100vw-40px)] border border-border bg-card p-6 opacity-0 shadow-md transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
          <div className="grid grid-cols-3 gap-6">
            {entry.columns.map((col, i) => (
              <ul key={i} className="space-y-0">
                {col.map((item) => (
                  <li key={item.label} className="border-b border-dashed border-border last:border-0">
                    <a
                      href={item.href ?? "#"}
                      className="block py-2 text-[13px] leading-snug text-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ) : null}
    </li>
  );
}

function MobileItem({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <a
        href={item.href ?? "#"}
        className="block border-b border-white/10 py-2.5 text-[13px] text-white/85"
        style={{ paddingLeft: 16 + depth * 14 }}
      >
        {item.label}
      </a>
    );
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between border-b border-white/10 py-2.5 pr-4 text-left text-[13px] text-white/85"
        style={{ paddingLeft: 16 + depth * 14 }}
      >
        <span>{item.label}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? item.children.map((c) => <MobileItem key={c.label} item={c} depth={depth + 1} />) : null}
    </div>
  );
}

function MobileEntry({ entry }: { entry: NavEntry }) {
  const [open, setOpen] = useState(false);
  const items: NavItem[] = entry.items ?? (entry.columns ? entry.columns.flat() : []);

  if (items.length === 0) {
    return (
      <a href={entry.href ?? "#"} className="block border-b border-white/10 px-4 py-3 text-sm font-semibold text-white">
        {entry.label}
      </a>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between border-b border-white/10 px-4 py-3 text-left text-sm font-semibold text-white"
      >
        <span>{entry.label}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? items.map((item) => <MobileItem key={item.label} item={item} />) : null}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-50">
      {/* Top utility bar */}
      <div className="bg-secondary">
        <div className="site-container">
          <ul className="flex flex-wrap items-center justify-center gap-x-2 py-2.5 text-[13px] text-secondary-foreground md:justify-end">
            {topLinks.map((link, i) => (
              <li key={link.label} className="flex items-center gap-x-2">
                <a href={link.href} target="_blank" rel="noreferrer" className="hover:underline">
                  {link.label}
                </a>
                {i < topLinks.length - 1 ? <span className="text-secondary-foreground/70">|</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logo + contact */}
      <div className="bg-card">
        <div className="site-container">
          <div className="flex flex-col items-center gap-6 py-4 md:flex-row md:items-center md:justify-between">
            <a href="https://www.mhssce.ac.in/index.php">
              <img src={LOGO} alt="Anjuman-I-Islam's M. H. Saboo Siddik College of Engineering" width={338} height={108} />
            </a>
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-6 w-6 text-primary" strokeWidth={2.2} />
                <div>
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">Mail Us</span>
                  <span className="block text-[13px] font-semibold text-foreground">aimhssce@mhssce.ac.in</span>
                  <span className="block text-[13px] font-semibold text-foreground">mhssce@yahoo.in</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-6 w-6 text-primary" strokeWidth={2.2} />
                <div>
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">Call us</span>
                  <span className="block text-[13px] font-semibold text-foreground">+91 22 23012922</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote strip */}
      <div className="bg-quote-strip">
        <div className="site-container overflow-hidden py-3.5">
          <p className="whitespace-nowrap text-right text-[17px] font-semibold text-secondary">
            Rabbi Zidni &apos;Ilma. : ربِّ زِدْنِي عِلْماً - &quot;My lord, increase me in knowledge&quot; [20:119].
          </p>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-nav">
        <div className="site-container">
          <div className="flex items-center justify-between lg:justify-center">
            <span className="py-3 text-sm font-semibold text-nav-foreground lg:hidden">Menu</span>
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((v) => !v)}
              className="p-3 text-nav-foreground lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <ul className="hidden lg:flex lg:items-center">
              {mainNav.map((entry) => (
                <DesktopEntry key={entry.label} entry={entry} />
              ))}
            </ul>
          </div>
        </div>

        {mobileOpen ? (
          <nav className="max-h-[70vh] overflow-y-auto border-t border-white/10 bg-nav lg:hidden">
            {mainNav.map((entry) => (
              <MobileEntry key={entry.label} entry={entry} />
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
