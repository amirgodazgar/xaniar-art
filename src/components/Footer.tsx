import React from "react";
import { OWNER_INFO } from "../data/portfolioData";
import { ArrowUp, ExternalLink } from "lucide-react";
import { PageRoute } from "../utils/router";

interface FooterProps {
  onNavigate?: (page: PageRoute, slug?: string | null) => void;
  isDarkTheme?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  isDarkTheme = false,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t transition-colors duration-200 py-12 px-6 ${
        isDarkTheme
          ? "bg-[#141414] text-[#FAFAFA] border-[#262624]"
          : "bg-[#FAFAF8] text-[#171717] border-[#E8E8E6]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Name & Copyright */}
        <div className="space-y-1">
          <div className="text-sm font-bold tracking-tight uppercase">
            {OWNER_INFO.name}
          </div>
          <div className="text-xs text-[#737373] tracking-wide">
            © {new Date().getFullYear()} Xaniar Ghaderpanah. All Rights
            Reserved.
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
          {OWNER_INFO.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              className={`flex items-center gap-1 transition-colors ${
                isDarkTheme
                  ? "text-[#A3A3A0] hover:text-[#FAFAFA]"
                  : "text-[#737373] hover:text-[#171717]"
              }`}
            >
              <span>{social.label}</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          ))}
          {onNavigate && (
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className={`transition-colors underline underline-offset-4 ${
                isDarkTheme ? "text-[#FAFAFA]" : "text-[#171717]"
              }`}
            >
              Direct Inquiry
            </button>
          )}
        </div>

        {/* Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className={`group flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-colors ${
            isDarkTheme
              ? "text-[#A3A3A0] hover:text-[#FAFAFA]"
              : "text-[#737373] hover:text-[#171717]"
          }`}
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
};
