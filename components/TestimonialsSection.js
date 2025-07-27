"use client"
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: "Priya Sharma",
    business: "Fitness First Gym, Gurgaon",
    content: "RJR Consultancy transformed our gym's revenue. We saw 300% growth in memberships within 6 months through their strategic approach to lead generation and customer engagement.",
    rating: 5,
    avatar: "👩‍🏫"
  },
  {
    name: "Rajesh Kumar", 
    business: "Kumar Dental Clinic, Delhi",
    content: "Their lead generation system helped us fill our appointment calendar. Patient inquiries increased by 400% after implementing their WhatsApp automation and local SEO strategies.",
    rating: 5,
    avatar: "👨‍⚕️"
  },
  {
    name: "Neha Gupta",
    business: "Style Studio Salon, Noida", 
    content: "Professional service and amazing results. Our salon bookings doubled in just 3 months with their marketing automation and social media strategies. Highly recommended!",
    rating: 5,
    avatar: "👩‍💼"
  }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses across Delhi NCR. See how we've helped 
            transform their operations and multiply their revenue.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              {/* Avatar */}
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                {testimonials[currentTestimonial].avatar}
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {testimonials[currentTestimonial].business}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid (for SEO and accessibility) */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                "{testimonial.content.substring(0, 150)}..."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
