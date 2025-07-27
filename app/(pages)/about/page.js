import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import WhatsAppWidget from '../../../components/WhatsAppWidget'

export const metadata = {
  title: 'About Us - RJR Consultancy',
  description: 'Learn about RJR Consultancy and founder Jeet Singh. Our mission to help Delhi NCR businesses achieve exponential growth.',
}

export default function About() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About RJR Consultancy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Performance-driven business growth consultancy dedicated to helping local businesses, 
              especially in Delhi-NCR, reach their full potential.
            </p>
          </div>

          {/* Founder Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Founder's Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  RJR Consultancy was born out of extensive experience managing and scaling fitness centers. 
                  Over the past few years, we've helped gyms grow exponentially—by revamping their sales 
                  funnels, improving lead capture, automating customer engagement, and boosting footfall 
                  with proven marketing techniques.
                </p>
                <p>
                  Now, we're on a mission to expand this impact beyond the fitness industry. Our goal is 
                  to empower small and mid-sized businesses—from salons, clinics, and cafés to educational 
                  institutions and retail stores—by providing them with the right tools, strategies, and 
                  systems to generate consistent leads and grow revenue.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Jeet Singh
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Founder & CEO
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://instagram.com/realjeetsingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    @realjeetsingh
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower Delhi NCR businesses with proven growth strategies and innovative solutions.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our Values
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Integrity, innovation, and results-driven approach in everything we do.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the leading business growth partner for SMEs across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
