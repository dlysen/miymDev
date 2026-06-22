import { ExternalLink, Github, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with payment integration and inventory management.',
    image: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile App',
    description: 'iOS and Android banking application with real-time transactions.',
    image: 'bg-gradient-to-br from-purple-500 to-pink-600',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'Analytics Dashboard',
    category: 'Web Development',
    description: 'Real-time analytics dashboard with data visualization and reporting.',
    image: 'bg-gradient-to-br from-green-500 to-emerald-600',
    tags: ['React', 'D3.js', 'PostgreSQL'],
  },
  {
    title: 'SaaS Management System',
    category: 'Full Stack',
    description: 'Multi-tenant SaaS platform with user management and billing integration.',
    image: 'bg-gradient-to-br from-orange-500 to-red-600',
    tags: ['Next.js', 'Stripe', 'AWS'],
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    description: 'Cross-platform fitness app with wearable integration and social features.',
    image: 'bg-gradient-to-br from-pink-500 to-rose-600',
    tags: ['Flutter', 'Firebase'],
  },
  {
    title: 'Content Management System',
    category: 'Web Development',
    description: 'Headless CMS with powerful content management and API-first architecture.',
    image: 'bg-gradient-to-br from-indigo-500 to-blue-600',
    tags: ['Vue.js', 'GraphQL', 'PostgreSQL'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-semibold">Success Stories</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Showcase of our latest work and successful client collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px]"
            >
              {/* Image Container */}
              <div className={`${project.image} h-56 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-7xl mb-3 group-hover:scale-125 transition-transform duration-300">💼</div>
                  <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View Project</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-600 mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/link transition">
                    <span>View</span>
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold text-sm group/link transition">
                    <span>Code</span>
                    <Github size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
