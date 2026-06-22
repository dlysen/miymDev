import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ color: 'white' }}>
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 opacity-90">
          Let's discuss how we can help transform your ideas into reality.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
          <a
            href="mailto:hello@miym.dev"
            className="px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition hover:opacity-90"
            style={{ backgroundColor: 'white', color: 'var(--primary)' }}
          >
            <Mail size={20} /> Email Us
          </a>
          <a
            href="tel:+1234567890"
            className="border-2 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition hover:opacity-90"
            style={{ borderColor: 'white', color: 'white' }}
          >
            <Phone size={20} /> Call Us
          </a>
        </div>

        <button className="px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition hover:opacity-90" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>
          Schedule a Consultation <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}
