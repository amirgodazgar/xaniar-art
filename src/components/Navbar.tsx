import React, { useState } from "react";
import { PageRoute } from "../utils/router";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, slug?: string | null) => void;
  isDarkTheme?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  isDarkTheme = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: "WORK", page: "work" },
    { label: "ABOUT", page: "about" },
    { label: "EXPERTISE", page: "expertise" },
    { label: "CONTACT", page: "contact" },
  ];

  const handleLinkClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 border-b ${
        isDarkTheme
          ? "bg-[#141414]/95 text-[#FAFAFA] border-[#262624] backdrop-blur-md"
          : "bg-[#FAFAF8]/95 text-[#171717] border-[#E8E8E6] backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title (Wordmark in display face, single element, no subtext) */}
        <button
          type="button"
          onClick={() => handleLinkClick("home")}
          className="text-lg md:text-xl font-bold tracking-tight uppercase whitespace-nowrap shrink-0 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          aria-label="xaniar ghaderpanah home"
        >
          xaniar ghaderpanah
        </button>

        {/* Zone 2: Clean 4 nav links */}
        <nav
          className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-muted"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                type="button"
                onClick={() => handleLinkClick(item.page)}
                className={`py-2 whitespace-nowrap shrink-0 transition-colors border-b-2 text-xs tracking-widest ${
                  isActive
                    ? isDarkTheme
                      ? "text-[#FAFAFA] border-[#FAFAFA]"
                      : "text-[#171717] border-[#171717]"
                    : isDarkTheme
                      ? "text-[#A3A3A0] border-transparent hover:text-[#FAFAFA]"
                      : "text-[#737373] border-transparent hover:text-[#171717]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick("contact")}
            className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              isDarkTheme
                ? "bg-[#FAFAFA] text-[#141414] hover:bg-[#EAEAEA] active:scale-98"
                : "bg-[#171717] text-[#FAFAF8] hover:bg-[#2B2B28] active:scale-98"
            }`}
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2.5 transition-colors focus-visible:outline-2 ${
            isDarkTheme
              ? "text-[#FAFAFA] hover:text-[#A3A3A0]"
              : "text-[#171717] hover:text-[#737373]"
          }`}
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden fixed inset-x-0 top-20 h-[calc(100vh-5rem)] z-[100] p-6 flex flex-col justify-between overflow-y-auto border-t border-[#E8E8E6] dark:border-[#262624] shadow-2xl ${
            isDarkTheme
              ? "bg-[#141414] text-[#FAFAFA]"
              : "bg-[#FAFAF8] text-[#171717]"
          }`}
        >
          <div className="space-y-6 pt-4">
            <span className="text-[11px] font-mono tracking-widest text-[#737373] uppercase">
              INDEX // NAVIGATION
            </span>
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleLinkClick(item.page)}
                  className={`text-2xl font-bold tracking-tight text-left py-2 transition-colors ${
                    currentPage === item.page
                      ? "underline underline-offset-8"
                      : "text-[#737373] hover:text-[#171717]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#E8E8E6] dark:border-[#262624] space-y-4">
            <button
              type="button"
              onClick={() => handleLinkClick("contact")}
              className="w-full py-4 text-center text-xs font-semibold tracking-widest uppercase bg-[#171717] text-[#FAFAF8] dark:bg-[#FAFAFA] dark:text-[#141414]"
            >
              INITIATE INQUIRY
            </button>
            <div className="flex items-center justify-between text-xs text-[#737373] font-mono">
              <span>MUNICH / REMOTE</span>
              <span>CET (UTC+2)</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
