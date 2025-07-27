"use client"
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering{' '}
              <span className="text-blue-600 dark:text-blue-400">Delhi NCR</span>{' '}
              Businesses to Achieve{' '}
              <span className="text-blue-600 dark:text-blue-400">Exponential Growth</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Performance-driven business growth consultancy helping local businesses reach 
              their full potential through proven strategies, lead generation, and operational excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/919599863263"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
              >
                Book Free Growth Audit
              </a>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Businesses Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">300%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Scale Your Business?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join hundreds of successful Delhi NCR businesses that have achieved 
                  remarkable growth with our proven strategies.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <div className="font-semibold text-green-800 dark:text-green-400">✓ Lead Generation</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <div className="font-semibold text-blue-800 dark:text-blue-400">✓ Sales Funnels</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <div className="font-semibold text-purple-800 dark:text-purple-400">✓ Marketing Automation</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                    <div className="font-semibold text-orange-800 dark:text-orange-400">✓ Staff Training</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
