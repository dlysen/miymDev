import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="transition-colors duration-200" style={{ backgroundColor: 'var(--sidebar)', color: 'var(--sidebar-foreground)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>MIYM</h3>
            <p style={{ color: 'var(--sidebar-foreground)' }}>
              Building software solutions that drive business growth.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: 'var(--sidebar-foreground)' }}>Services</h4>
            <ul className="space-y-2" style={{ color: 'var(--sidebar-foreground)' }}>
              <li><a href="#" className="hover:opacity-70 transition" style={{ color: 'inherit' }}>Web Development</a></li>
              <li><a href="#" className="hover:opacity-70 transition" style={{ color: 'inherit' }}>Mobile Apps</a></li>
              <li><a href="#" className="hover:opacity-70 transition" style={{ color: 'inherit' }}>Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: 'var(--sidebar-foreground)' }}>Company</h4>
            <ul className="space-y-2" style={{ color: 'var(--sidebar-foreground)' }}>
              <li><a href="#" className="hover:opacity-70 transition" style={{ color: 'inherit' }}>About</a></li>
              <li><a href="#" className="hover:opacity-70 transition" style={{ color: 'inherit' }}>Blog</a></li>
              <li><a href="#" className="hover:opacity-70 transition" style={{ color: 'inherit' }}>Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: 'var(--sidebar-foreground)' }}>Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition" style={{ color: 'var(--sidebar-foreground)' }}>
                <Github size={24} />
              </a>
              <a href="#" className="hover:opacity-70 transition" style={{ color: 'var(--sidebar-foreground)' }}>
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:opacity-70 transition" style={{ color: 'var(--sidebar-foreground)' }}>
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:opacity-70 transition" style={{ color: 'var(--sidebar-foreground)' }}>
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-sm" style={{ borderTop: '1px solid var(--sidebar-border)', color: 'var(--sidebar-foreground)' }}>
          <p>&copy; {currentYear} MIYM. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-70 transition" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" className="hover:opacity-70 transition" style={{ color: 'inherit' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
