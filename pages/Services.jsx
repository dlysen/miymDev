import { Code, Smartphone, Zap, Briefcase, ArrowRight } from 'lucide-react'

const serviceDetails = [
  {
    id: 'web',
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and powerful web applications built with modern technologies.',
    features: [
      'Responsive design for all devices',
      'Fast loading and optimized performance',
      'SEO-friendly architecture',
      'Scalable backend infrastructure',
      'Real-time data processing',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform apps that deliver exceptional user experiences.',
    features: [
      'iOS and Android development',
      'Cross-platform solutions with React Native',
      'Offline functionality',
      'Push notifications',
      'Mobile-first design',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 'full-stack',
    icon: Zap,
    title: 'Full Stack Solutions',
    description: 'End-to-end development from frontend to backend and deployment.',
    features: [
      'Complete project ownership',
      'Database design and optimization',
      'API development',
      'DevOps and deployment',
      'Continuous integration & delivery',
    ],
    technologies: ['MERN Stack', 'Django', 'Docker', 'Kubernetes', 'AWS/GCP'],
    color: 'from-green-600 to-emerald-600',
  },
  {
    id: 'consulting',
    icon: Briefcase,
    title: 'Technology Consulting',
    description: 'Strategic guidance for digital transformation and technology adoption.',
    features: [
      'Technology roadmap planning',
      'Architecture design',
      'Legacy system modernization',
      'Team training & mentorship',
      'Best practices implementation',
    ],
    technologies: ['Strategy', 'Architecture', 'Best Practices', 'Mentoring', 'Training'],
    color: 'from-orange-600 to-red-600',
  },
]

export default function Services() {
  return (
    <div className="space-y-20" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Hero */}
      <section className="py-24 transition-colors duration-200" style={{ backgroundColor: 'var(--card-foreground)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold mb-6" style={{ color: 'var(--card)' }}>Our Services</h1>
          <p className="text-2xl max-w-3xl" style={{ color: 'var(--card)' }}>
            Comprehensive software solutions tailored to your business needs and growth goals.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceDetails.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className={idx % 2 === 0 ? 'grid md:grid-cols-2 gap-12 items-center' : 'grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse'}>
                  {/* Image */}
                  <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                    <div className={`bg-gradient-to-br ${service.color} rounded-2xl h-96 flex items-center justify-center text-8xl`}>
                      {idx === 0 ? '💻' : idx === 1 ? '📱' : idx === 2 ? '⚡' : '📋'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'md:order-1' : ''} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-br ${service.color} p-3 rounded-lg`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h2 className="text-4xl font-bold text-slate-900">{service.title}</h2>
                    </div>

                    <p className="text-xl text-slate-600">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h3 className="font-bold text-slate-900 text-lg">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-600">
                            <ArrowRight size={20} className="text-blue-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3 pt-6 border-t">
                      <h3 className="font-bold text-slate-900 text-lg">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition">
                      Learn More <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16" style={{ color: 'var(--foreground)' }}>Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery', desc: 'We understand your goals, challenges, and vision.' },
              { num: '02', title: 'Planning', desc: 'We create a detailed roadmap and technical architecture.' },
              { num: '03', title: 'Development', desc: 'We build with quality, testing, and best practices.' },
              { num: '04', title: 'Launch & Support', desc: 'We deploy and provide ongoing support and optimization.' },
            ].map((step, idx) => (
              <div key={idx} className="p-8 rounded-lg shadow-md hover:shadow-lg transition" style={{ backgroundColor: 'var(--card)' }}>
                <p className="text-4xl font-bold mb-3" style={{ color: 'var(--primary)' }}>{step.num}</p>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--card-foreground)' }}>{step.title}</h3>
                <p style={{ color: 'var(--muted-foreground)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
