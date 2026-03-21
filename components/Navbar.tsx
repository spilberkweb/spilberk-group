"use client";
import { Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { bg, border, ctaBtn, gold, goldL } from "./home/constants";
import { useLanguage } from "./home/LanguageContext";

const LOGO_SVG = "/spilberk-logo-white.png";

interface MenuItem {
  title: string;
  url?: string;
  className?: string;
  links?: {
    label: string;
    description?: string;
    url: string;
    image?: string;
  }[];
}

interface MobileNavigationMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  navItems: MenuItem[];
}

const MOBILE_BREAKPOINT = 1024;

interface Navbar8Props {
  className?: string;
}

export default function Navbar8({ className }: Navbar8Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const { lang, setLang, t } = useLanguage();

  const navItems: MenuItem[] = [
    { title: t.nav.about, url: "#about" },
    { title: t.nav.ecosystem, url: "#ecosystem" },
    { title: t.nav.contact, url: "#contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleMobileMenu = () => {
    setOpen(!open);
  };

  const isScrolled = scrollY > 60;

  return (
    <header className={cn("sticky top-0 z-[100] w-full", className)}>
      <div
        className="w-full transition-all duration-300"
        style={{
          background: isScrolled ? "rgba(10,4,40,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(24px)" : "none",
          borderBottom: isScrolled ? `1px solid ${border}` : "none",
        }}
      >
        <div className="container px-6 mx-auto">
          <div className="flex items-center justify-between gap-3.5 py-4">
            <a
              href="#"
              className="flex items-center gap-3 text-lg font-semibold tracking-tighter"
              style={{ textDecoration: "none" }}
            >
              <div
                className="hidden sm:flex items-center justify-center shrink-0"
                style={{
                  width: 34,
                  height: 34,
                  background: `linear-gradient(135deg, ${gold}, ${goldL})`,
                  borderRadius: 7,
                  fontWeight: 800,
                  color: bg,
                  fontSize: 15,
                }}
              >
                S
              </div>
              <img src={LOGO_SVG} alt="SPILBERK" style={{ height: 30 }} className="shrink-0 max-w-[140px] sm:max-w-none" />
            </a>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-2">
                {navItems.map((item, index) => (
                  <NavigationMenuItem
                    key={`desktop-menu-item-${index}`}
                    value={`${index}`}
                  >
                    <NavigationMenuLink
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetId = item.url?.replace("#", "");
                        if (targetId) {
                          const el = document.getElementById(targetId);
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                            window.history.pushState(null, "", item.url);
                          }
                        }
                      }}
                      className="!bg-transparent text-white/55 hover:text-white hover:!bg-transparent focus:!bg-transparent data-[active]:!bg-transparent transition-all px-4 py-2 text-[13px] font-medium hover:underline hover:decoration-[rgba(200,169,110,0.8)] decoration-2 underline-offset-4"
                      style={{ textDecorationColor: "rgba(200,169,110,0.8)" }}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-lg p-1">
                {(["CZ", "EN", "IT"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    style={{
                      padding: "6px 12px",
                      background:
                        lang === l ? "rgba(200,169,110,0.2)" : "transparent",
                      color: lang === l ? gold : "rgba(255,255,255,0.5)",
                      border: "none",
                      borderRadius: 6,
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <Button
                className="hidden lg:inline-flex shrink-0 whitespace-nowrap"
                onClick={() =>
                  window.open(
                    "https://www.avantfunds.cz/fondy/spilberk-investicni-fond-sicav-a-s/",
                    "_blank",
                  )
                }
                style={{ ...ctaBtn, padding: "10px 24px", fontSize: 13, display: undefined }}
              >
                {t.nav.invest}
              </Button>
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleMobileMenu}
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="size-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNavigationMenu open={open} setOpen={setOpen} navItems={navItems} />
    </header>
  );
}

const MobileNavigationMenu = ({
  open,
  setOpen,
  navItems,
}: MobileNavigationMenuProps) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        aria-describedby={undefined}
        side="top"
        className="inset-0 z-[600] h-[100dvh] w-full border-b-0 p-0 [&>button]:hidden"
        style={{
          background: "rgba(10,4,40,0.98)",
          backdropFilter: "blur(24px)",
        }}
      >
        <div className="flex-1 overflow-y-auto h-full">
          <div className="container px-6 pb-12 h-full mx-auto">
            <div className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
              <SheetTitle className="text-white">Mobile Navigation</SheetTitle>
            </div>

            <div className="flex justify-between items-center py-4">
              <a href="#" className="flex items-center gap-3">
                <div
                  style={{
                    width: 30,
                    height: 30,
                    background: `linear-gradient(135deg, ${gold}, ${goldL})`,
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    color: bg,
                    fontSize: 13,
                  }}
                >
                  S
                </div>
                <img src={LOGO_SVG} alt="SPILBERK" style={{ height: 36 }} />
              </a>
              <SheetClose asChild>
                <Button
                  size="icon"
                  className="size-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="size-6" />
                </Button>
              </SheetClose>
            </div>

            <div className="flex flex-col justify-center h-full pb-32">
              <ul className="flex flex-col gap-6 mb-12">
                {navItems.map((item, index) => (
                  <li key={`mobile-nav-link-${index}`}>
                    <a
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        const targetId = item.url?.replace("#", "");
                        if (targetId) {
                          setTimeout(() => {
                            const el = document.getElementById(targetId);
                            if (el) {
                              el.scrollIntoView({ behavior: "smooth" });
                              window.history.pushState(null, "", item.url);
                            }
                          }, 150);
                        }
                      }}
                      className="text-white text-3xl font-bold hover:text-white/80 transition-colors"
                      style={{ textDecoration: "none" }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-6">
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 8,
                    padding: 4,
                    width: "fit-content",
                  }}
                >
                  {(["CZ", "EN", "IT"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      style={{
                        padding: "8px 16px",
                        background:
                          lang === l ? "rgba(200,169,110,0.2)" : "transparent",
                        color: lang === l ? gold : "rgba(255,255,255,0.5)",
                        border: "none",
                        borderRadius: 6,
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>

                <Button
                  onClick={() => {
                    setOpen(false);
                    window.open(
                      "https://www.avantfunds.cz/fondy/spilberk-investicni-fond-sicav-a-s/",
                      "_blank",
                    );
                  }}
                  style={{
                    ...ctaBtn,
                    width: "100%",
                    justifyContent: "center",
                    padding: "14px 0",
                    fontSize: 15,
                  }}
                >
                  {t.nav.invest}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
