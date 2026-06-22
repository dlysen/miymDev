import { Code, Smartphone, Zap, BarChart3, Lock, Headphones, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized solutions that are fast, scalable, and reliable.',
    color: 'from-yellow-600 to-orange-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Data-driven insights to track and measure success.',
    color: 'from-green-600 to-emerald-600',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Enterprise-grade security to protect your data and users.',
    color: 'from-red-600 to-rose-600',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Dedicated support throughout development and beyond.',
    color: 'from-indigo-600 to-purple-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Our Services</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Comprehensive solutions tailored to your business needs with proven expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            const colors = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444', '#6366f1']
            return (
              <div
                key={idx}
                className="group relative rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:translate-y-[-8px]"
                style={{ backgroundColor: 'var(--card)' }}
              >
                {/* Gradient border */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: colors[idx] }}></div>

                <div className="p-8 space-y-4">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: colors[idx] }}>
                    <Icon className="text-white" size={28} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--card-foreground)' }}>{service.title}</h3>
                    <p className="leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{service.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center font-semibold group-hover:translate-x-2 transition-transform duration-300" style={{ color: 'var(--primary)' }}>
                    <span>Learn more</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
