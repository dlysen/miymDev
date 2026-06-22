import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', project: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', project: '', message: '' })
  }

  return (
    <div className="space-y-16" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Hero */}
      <section className="py-24 transition-colors duration-200" style={{ backgroundColor: 'var(--card-foreground)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-6" style={{ color: 'var(--card)' }}>Let's Work Together</h1>
          <p className="text-2xl max-w-2xl mx-auto" style={{ color: 'var(--card)' }}>
            Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--card-foreground)' }}>Get In Touch</h2>
                <p className="text-lg mb-8" style={{ color: 'var(--muted-foreground)' }}>
                  Reach out to us via email, phone, or the contact form. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: 'var(--card-foreground)' }}>Email</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>hello@miym.dev</p>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Response time: within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: 'var(--card-foreground)' }}>Phone</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>+1 (555) 123-4567</p>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: 'var(--card-foreground)' }}>Address</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>123 Tech Street</p>
                    <p style={{ color: 'var(--muted-foreground)' }}>San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t">
                <h3 className="font-bold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center font-semibold transition"
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--muted)' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Send us a message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg font-semibold">
                  ✓ Message sent! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                    style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)', color: 'var(--foreground)' }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Project Type</label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none"
                  >
                    <option>Select a project type...</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Full Stack Solution</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'What\'s your typical project timeline?', a: 'Projects typically range from 2-6 months depending on scope. We\'ll provide a detailed estimate after our initial consultation.' },
              { q: 'Do you offer ongoing support?', a: 'Yes! We offer maintenance and support packages after launch to ensure your application stays secure and performant.' },
              { q: 'What\'s your pricing model?', a: 'We work with fixed-price projects, hourly rates, and retainer agreements depending on your needs. Let\'s discuss what works best for you.' },
              { q: 'Can you work with our existing team?', a: 'Absolutely! We\'re experienced in collaborating with in-house teams and can integrate seamlessly into your workflow.' },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-lg" style={{ backgroundColor: 'var(--card)' }}>
                <h3 className="font-bold mb-3" style={{ color: 'var(--card-foreground)' }}>{faq.q}</h3>
                <p style={{ color: 'var(--muted-foreground)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
