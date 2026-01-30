import { Link } from '@tanstack/react-router'
import { Twitter, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  menu: [
    { label: 'Customers', href: '#customers' as const },
    { label: 'Resources', href: '#resources' as const },
    { label: 'Careers', href: '#careers' as const },
  ],
  company: [
    { label: 'Help', href: '#help' as const },
    { label: 'Terms', href: '#terms' as const },
    { label: 'Security', href: '#security' as const },
  ],
  social: [
    { label: 'X (Twitter)', href: 'https://twitter.com', icon: Twitter },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com', icon: Github },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-forest-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & description */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-golden to-golden-dark flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-forest-dark"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-white">Solidroad</span>
            </Link>
            <p className="text-sm text-white/50 max-w-xs">
              The optimization platform for human and AI agents. Make every customer interaction better, faster, and more consistent.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
              Menu
            </h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
              Social
            </h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Solidroad Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#cookies" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
