"use client"
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join hundreds of successful Delhi NCR businesses that have achieved remarkable 
          growth with our proven strategies. Let's discuss your growth potential today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/919599863263"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center"
          >
            <span className="mr-2">📱</span>
            WhatsApp Us Now
          </a>
          <a
            href="https://instagram.com/realjeetsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center"
          >
            <span className="mr-2">📸</span>
            Follow on Instagram
          </a>
          <Link
            href="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
          >
            Get Full Contact Info
          </Link>
        </div>

        <div className="mt-12 text-blue-100">
          <p>💬 Quick response guaranteed • 🎯 Personalized solutions • 📊 Free initial consultation</p>
        </div>
      </div>
    </section>
  )
}
