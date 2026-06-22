import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Client Name 1',
    role: 'CEO, Company A',
    quote: 'Outstanding work! The team delivered exactly what we needed on time and within budget.',
    rating: 5,
  },
  {
    name: 'Client Name 2',
    role: 'Founder, Company B',
    quote: 'Professional, communicative, and highly skilled developers. We recommend them.',
    rating: 5,
  },
  {
    name: 'Client Name 3',
    role: 'Product Manager, Company C',
    quote: 'The quality of the code and attention to detail exceeded our expectations.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 transition-colors duration-200" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>What Clients Say</h2>
          <p className="text-xl" style={{ color: 'var(--muted-foreground)' }}>Trusted by businesses worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg shadow-md hover:shadow-lg transition"
              style={{ backgroundColor: 'var(--card)' }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 italic" style={{ color: 'var(--muted-foreground)' }}>"{testimonial.quote}"</p>

              {/* Author */}
              <div>
                <p className="font-bold" style={{ color: 'var(--primary)' }}>{testimonial.name}</p>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
