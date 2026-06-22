import { ExternalLink, Github } from 'lucide-react'

const caseStudies = [
  {
    title: 'E-Commerce Revolution',
    client: 'RetailFlow Inc',
    category: 'Web Development',
    challenge: 'Legacy system couldn\'t handle seasonal traffic spikes, causing 40% revenue loss during peak seasons.',
    solution: 'Built a modern, scalable e-commerce platform with microservices architecture and cloud infrastructure.',
    results: [
      '300% increase in peak traffic capacity',
      '45% improvement in page load times',
      '$2M additional annual revenue',
      '98.9% uptime SLA',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    image: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'FinTech Mobile Platform',
    client: 'PayFlow Technologies',
    category: 'Mobile App',
    challenge: 'Needed a secure, cross-platform banking app to reach iOS and Android users simultaneously.',
    solution: 'Developed a React Native app with end-to-end encryption, biometric authentication, and real-time transaction processing.',
    results: [
      '500K+ downloads in 6 months',
      '4.8/5 star rating on app stores',
      '$50M in transaction volume',
      '99.95% security audit score',
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'Stripe API', 'AWS'],
    image: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Analytics Dashboard',
    client: 'DataViz Corp',
    category: 'Full Stack',
    challenge: 'Needed real-time analytics for processing 10M+ data points daily across distributed systems.',
    solution: 'Built a full-stack solution with real-time WebSocket connections, optimized database queries, and interactive visualizations.',
    results: [
      'Processes 10M+ data points daily',
      '<200ms query response time',
      '50+ concurrent users supported',
      'Reduced data latency by 85%',
    ],
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'ClickHouse'],
    image: 'from-green-500 to-emerald-600',
  },
  {
    title: 'SaaS Platform',
    client: 'CloudSync Solutions',
    category: 'Full Stack',
    challenge: 'Build multi-tenant SaaS with flexible billing, user management, and team collaboration features.',
    solution: 'Developed enterprise SaaS platform with role-based access control, Stripe integration, and real-time collaboration.',
    results: [
      '500+ active customers',
      '$1.2M annual recurring revenue',
      '99.9% uptime maintained',
      '40% reduction in support tickets',
    ],
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS'],
    image: 'from-orange-500 to-red-600',
  },
  {
    title: 'IoT Management System',
    client: 'SmartBuildings Inc',
    category: 'Full Stack',
    challenge: 'Needed unified platform to manage 50K+ IoT devices across multiple locations with real-time monitoring.',
    solution: 'Built IoT management platform with real-time MQTT communication, predictive analytics, and automated alerts.',
    results: [
      '50K+ devices managed',
      '45% energy cost reduction',
      '<100ms device response time',
      '99.99% data accuracy',
    ],
    technologies: ['Vue.js', 'MQTT', 'Python', 'InfluxDB', 'Kubernetes'],
    image: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Content Management System',
    client: 'MediaHub Group',
    category: 'Web Development',
    challenge: 'Editorial team needed intuitive CMS for managing 10K+ articles across multiple publications.',
    solution: 'Developed headless CMS with powerful content editor, version control, and multi-channel publishing.',
    results: [
      '10K+ articles managed',
      '80% faster publishing workflow',
      'Multi-language support (20+ languages)',
      '2M+ monthly visitors',
    ],
    technologies: ['Next.js', 'GraphQL', 'MongoDB', 'S3', 'Vercel'],
    image: 'from-pink-500 to-rose-600',
  },
]

export default function Portfolio() {
  return (
    <div className="space-y-20" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Hero */}
      <section className="py-24 transition-colors duration-200" style={{ backgroundColor: 'var(--card-foreground)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold mb-6" style={{ color: 'var(--card)' }}>Our Portfolio</h1>
          <p className="text-2xl max-w-3xl" style={{ color: 'var(--muted-foreground)' }}>
            Real projects, real results. See how we've helped businesses transform through technology.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {caseStudies.map((project, idx) => (
            <div key={idx} className="border-b last:border-b-0 pb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className={`bg-gradient-to-br ${project.image} rounded-2xl h-96 flex items-center justify-center text-6xl`}>
                    {idx === 0 ? '🛍️' : idx === 1 ? '💳' : idx === 2 ? '📊' : idx === 3 ? '☁️' : idx === 4 ? '🏢' : '📝'}
                  </div>
                </div>

                {/* Content */}
                <div className={idx % 2 === 1 ? 'md:order-1' : ''} className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-blue-600 mb-2">{project.category} • {project.client}</p>
                    <h2 className="text-4xl font-bold text-slate-900">{project.title}</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Challenge</h3>
                      <p className="text-slate-600">{project.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Solution</h3>
                      <p className="text-slate-600">{project.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="font-bold text-slate-900 mb-3">Results</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-blue-600 font-bold mt-1">✓</span>
                          <span className="text-slate-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-bold text-slate-900 mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                      View Project <ExternalLink size={16} />
                    </button>
                    <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold">
                      View Code <Github size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with custom software solutions.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 rounded-lg font-bold inline-block transition hover:opacity-90"
            style={{ backgroundColor: 'white', color: 'var(--primary)' }}
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
