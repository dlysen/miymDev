import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { useTheme } from '../contexts/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', submenu: true },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="shadow-lg sticky top-0 z-50 transition-colors duration-200" style={{ backgroundColor: 'var(--card)', color: 'var(--foreground)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>
            MIYM
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center gap-1 hover:opacity-70 transition font-medium"
                  style={{ color: 'var(--foreground)' }}
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>

                {/* Submenu for Services */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}>
                    <Link to="/services#web" className="block px-4 py-3 hover:opacity-70 rounded-t-lg">Web Development</Link>
                    <Link to="/services#mobile" className="block px-4 py-3 hover:opacity-70">Mobile Apps</Link>
                    <Link to="/services#full-stack" className="block px-4 py-3 hover:opacity-70">Full Stack Solutions</Link>
                    <Link to="/services#consulting" className="block px-4 py-3 hover:opacity-70 rounded-b-lg">Consulting</Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:block px-6 py-2 rounded-lg font-semibold transition"
            style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
          >
            Get Started
          </Link>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors hover:opacity-70"
              style={{ backgroundColor: 'var(--muted)', color: 'var(--primary)' }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2 rounded-lg mt-2 p-4 transition-colors duration-200" style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}>
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen && item.submenu)}
                  className="w-full text-left block hover:opacity-70 transition font-medium py-2"
                >
                  <Link to={item.href} className="flex items-center justify-between">
                    {item.label}
                    {item.submenu && <ChevronDown size={16} className={`transition ${isServicesOpen ? 'rotate-180' : ''}`} />}
                  </Link>
                </button>
                {item.submenu && isServicesOpen && (
                  <div className="pl-4 flex flex-col gap-1">
                    <Link to="/services#web" className="block py-1 text-sm hover:opacity-70" style={{ color: 'var(--muted-foreground)' }}>Web Development</Link>
                    <Link to="/services#mobile" className="block py-1 text-sm hover:opacity-70" style={{ color: 'var(--muted-foreground)' }}>Mobile Apps</Link>
                    <Link to="/services#full-stack" className="block py-1 text-sm hover:opacity-70" style={{ color: 'var(--muted-foreground)' }}>Full Stack Solutions</Link>
                    <Link to="/services#consulting" className="block py-1 text-sm hover:opacity-70" style={{ color: 'var(--muted-foreground)' }}>Consulting</Link>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-2 rounded-lg font-semibold transition text-center mt-2"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
