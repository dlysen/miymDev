import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-32 relative overflow-hidden transition-colors duration-200" style={{ backgroundColor: 'var(--card-foreground)', color: 'var(--card)' }}>
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ backgroundColor: 'var(--card)' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ backgroundColor: 'var(--card)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border w-fit" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--card)', color: 'var(--card-foreground)' }}>
              <Sparkles size={16} />
              <span className="text-sm font-semibold">Building Tomorrow's Solutions</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight" style={{ color: 'var(--card)' }}>
              Software That Transforms
            </h1>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--card)' }}>
              We craft custom software, powerful web applications, and scalable digital solutions that help businesses of all sizes achieve their goals.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                Get Started <ArrowRight size={20} />
              </button>
              <button className="border-2 px-8 py-4 rounded-lg font-semibold transition-all" style={{ borderColor: 'var(--card)', color: 'var(--card)', backgroundColor: 'transparent' }}>
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8" style={{ borderTop: '1px solid var(--card)', color: 'var(--card)' }}>
              <div>
                <p className="text-3xl font-bold" style={{ color: 'var(--card)' }}>50+</p>
                <p className="text-sm" style={{ color: 'var(--card)' }}>Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: 'var(--card)' }}>30+</p>
                <p className="text-sm" style={{ color: 'var(--card)' }}>Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: 'var(--card)' }}>5+</p>
                <p className="text-sm" style={{ color: 'var(--card)' }}>Years Experience</p>
              </div>
            </div>
          </div>

          {/* Animated Image Placeholder */}
          <div className="relative h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <div className="text-center space-y-4">
                <div className="text-8xl animate-bounce">🚀</div>
                <p className="text-blue-300 text-lg font-semibold">Innovation in Motion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
