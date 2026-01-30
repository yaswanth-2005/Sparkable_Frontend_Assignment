import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  {
    label: "Products",
    href: "#products", // Keep hrefs for now
    dropdown: [
      { label: "QA Platform", href: "#qa" },
      { label: "Training Suite", href: "#training" },
      { label: "Analytics", href: "#analytics" },
    ],
  },
  {
    label: "Customers",
    href: "#customers",
  },
  {
    label: "Careers",
    href: "#careers",
  },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Clean white rounded header design
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-0">
      <nav className="relative bg-white rounded-b-[2.5rem] px-8 h-[5.5rem] w-full max-w-7xl shadow-sm flex items-center justify-between transition-all duration-300">
        {/* Left: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 z-10">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() =>
                link.dropdown && setActiveDropdown(link.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                  />
                )}
              </a>

              {/* Dropdown */}
              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-0 pt-6">
                  {" "}
                  {/* Padding for gap */}
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-48 overflow-hidden animate-fade-in">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Link to="/" className="flex items-center gap-2.5 group">
            {/* Simple Logo Icon */}
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full text-black group-hover:scale-105 transition-transform"
                fill="currentColor"
              >
                {/* Placeholder "bird" type shape or just a simple generic logo to match Solidroad approx */}
                <path
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                  style={{ display: "none" }}
                />
                {/* Using the run icon concept from the previous logo but simplified black */}
                <path d="M19 14l-4-2 4-2V7l-4 3H9l-4-3-4 5h7l-2 5 3 2 9-5v-2z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-black tracking-tight">
              Solidroad
            </span>
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-6 z-10">
          <a
            href="#signin"
            className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
          >
            Sign in
          </a>
          <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-[15px] px-6 py-5 rounded-full shadow-lg shadow-green-500/20 flex items-center gap-2 group transition-all">
            See a demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-black ml-auto z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-[2rem] shadow-2xl border border-gray-100 lg:hidden animate-slide-up origin-top z-50">
            <div className="flex flex-col gap-2 p-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors font-medium"
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1 mt-1 border-l-2 border-gray-100 ml-4">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-black transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <hr className="my-2 border-gray-100" />
              <a
                href="#signin"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl font-medium"
              >
                Sign in
              </a>
              <Button className="w-full mt-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold py-6 rounded-xl flex items-center justify-center gap-2">
                See a demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
