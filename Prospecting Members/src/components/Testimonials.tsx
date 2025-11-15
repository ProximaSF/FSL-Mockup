import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      year: 'Class of 2024',
      organization: 'Kappa Kappa Gamma (PHA)',
      quote: 'Joining a sorority was the best decision I made at Maryland. I found my best friends, developed leadership skills as social chair, and found a support system that got me through tough times.',
      major: 'Business Marketing'
    },
    {
      name: 'James Chen',
      year: 'Class of 2025',
      organization: 'Lambda Phi Epsilon (MGC)',
      quote: 'Being part of a multicultural fraternity helped me embrace my identity while learning about different cultures. The brotherhood I found here is truly lifelong.',
      major: 'Computer Science'
    },
    {
      name: 'DeAndre Williams',
      year: 'Class of 2024',
      organization: 'Alpha Phi Alpha (NPHC)',
      quote: 'The legacy and history of my fraternity inspired me to be a better student and leader. The connections I made have opened doors I never imagined.',
      major: 'Public Policy'
    },
    {
      name: 'Emily Johnson',
      year: 'Class of 2025',
      organization: 'Delta Gamma (PHA)',
      quote: "Between our philanthropy work and chapter events, I've gained real-world experience in event planning, fundraising, and teamwork. Plus, I've made memories that will last forever.",
      major: 'Communications'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-red-600 mb-4">What Students Are Saying</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Hear from current members about their Greek life experience at Maryland.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 relative">
              <Quote className="w-8 h-8 text-red-200 absolute top-4 right-4" />
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.organization}</div>
                <div className="text-sm text-gray-500">
                  {testimonial.major} • {testimonial.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#FFD200] rounded-lg p-8 text-center">
          <h3 className="text-gray-900 mb-4">Ready to Find Your Community?</h3>
          <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
            Over 4,000 students at Maryland are involved in Greek life. Join a community that will support you academically, socially, and personally throughout your college experience and beyond.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}