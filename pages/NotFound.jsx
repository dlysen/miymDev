import { Home, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <div className="max-w-lg w-full text-center space-y-8">
        {/* 404 Text */}
        <div>
          <h1 className="text-9xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            404
          </h1>
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Page Not Found
          </h2>
          <p className="text-xl" style={{ color: 'var(--muted-foreground)' }}>
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Illustration */}
        <div
          className="py-12 px-8 rounded-lg text-6xl"
          style={{ backgroundColor: 'var(--card)' }}
        >
          🔍
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition hover:opacity-90"
            style={{ backgroundColor: 'var(--primary)', color: 'white' }}
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition border"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Helpful Info */}
        <div
          className="p-6 rounded-lg text-sm"
          style={{ backgroundColor: 'var(--muted)' }}
        >
          <p style={{ color: 'var(--muted-foreground)' }}>
            Here are some helpful links instead:
          </p>
          <div className="mt-4 space-y-2 flex flex-col">
            <Link
              to="/"
              className="hover:opacity-70 transition"
              style={{ color: 'var(--primary)' }}
            >
              → Home
            </Link>
            <Link
              to="/about"
              className="hover:opacity-70 transition"
              style={{ color: 'var(--primary)' }}
            >
              → About Us
            </Link>
            <Link
              to="/services"
              className="hover:opacity-70 transition"
              style={{ color: 'var(--primary)' }}
            >
              → Services
            </Link>
            <Link
              to="/portfolio"
              className="hover:opacity-70 transition"
              style={{ color: 'var(--primary)' }}
            >
              → Portfolio
            </Link>
            <Link
              to="/contact"
              className="hover:opacity-70 transition"
              style={{ color: 'var(--primary)' }}
            >
              → Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
