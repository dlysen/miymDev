import { Target, Users, Zap, Award } from 'lucide-react'

export default function About() {
  return (
    <div className="space-y-16" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Hero Section */}
      <section className="py-24 transition-colors duration-200" style={{ backgroundColor: 'var(--card-foreground)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold mb-6" style={{ color: 'var(--card)' }}>About MIYM</h1>
          <p className="text-2xl max-w-3xl" style={{ color: 'var(--card)' }}>
            We're a team of passionate software developers, designers, and problem-solvers dedicated to transforming businesses through innovative technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Target style={{ color: 'var(--primary)' }} size={32} />
                <h2 className="text-4xl font-bold" style={{ color: 'var(--card-foreground)' }}>Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                To deliver exceptional software solutions that drive measurable business growth. We believe in building technology that's not just functional, but strategic—solutions that give our clients a competitive edge in their market.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Zap style={{ color: 'var(--primary)' }} size={32} />
                <h2 className="text-4xl font-bold" style={{ color: 'var(--card-foreground)' }}>Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                To be the most trusted software development partner for businesses that want to innovate boldly. We envision a future where technology empowers organizations to achieve their boldest ambitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16" style={{ color: 'var(--foreground)' }}>Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Collaboration', desc: 'We work closely with clients as true partners, not just vendors.' },
              { icon: Award, title: 'Excellence', desc: 'We never compromise on quality, always delivering our best work.' },
              { icon: Zap, title: 'Innovation', desc: 'We stay ahead of technology trends and embrace new approaches.' },
              { icon: Target, title: 'Integrity', desc: 'We are transparent, honest, and accountable in everything we do.' },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="p-8 rounded-lg shadow-md text-center" style={{ backgroundColor: 'var(--card)' }}>
                  <Icon style={{ color: 'var(--primary)' }} className="mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--card-foreground)' }}>{value.title}</h3>
                  <p style={{ color: 'var(--muted-foreground)' }}>{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-xl opacity-80">Projects Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">30+</p>
              <p className="text-xl opacity-80">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100+</p>
              <p className="text-xl opacity-80">Team Members</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">5+</p>
              <p className="text-xl opacity-80">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16" style={{ color: 'var(--card-foreground)' }}>Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Alex Johnson', role: 'Founder & CEO', image: '👨‍💼' },
              { name: 'Sarah Chen', role: 'Lead Developer', image: '👩‍💻' },
              { name: 'Mike Rodriguez', role: 'Design Director', image: '👨‍🎨' },
              { name: 'Emma Williams', role: 'Project Manager', image: '👩‍📊' },
            ].map((member, idx) => (
              <div key={idx} className="p-8 rounded-lg text-center hover:shadow-lg transition" style={{ backgroundColor: 'var(--muted)' }}>
                <p className="text-6xl mb-4">{member.image}</p>
                <h3 className="text-xl font-bold" style={{ color: 'var(--card-foreground)' }}>{member.name}</h3>
                <p style={{ color: 'var(--muted-foreground)' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
