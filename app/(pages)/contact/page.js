import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import WhatsAppWidget from '../../../components/WhatsAppWidget'
import InteractiveMap from '../../../components/InteractiveMap'
import HubSpotForm from '../../../components/HubSpotForm'

export const metadata = {
  title: 'Contact Us - RJR Consultancy',
  description: 'Get in touch with RJR Consultancy for business growth consultation. Serving Delhi NCR businesses.',
}

export default function Contact() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve 
              exponential growth in the Delhi NCR market.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                WhatsApp
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Quick response guaranteed
              </p>
              <a
                href="https://wa.me/919599863263"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                +91 9599863263
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Instagram
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Follow our growth tips
              </p>
              <a
                href="https://instagram.com/realjeetsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 font-medium"
              >
                @realjeetsingh
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional inquiries
              </p>
              <a
                href="mailto:ixglobal012345@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ixglobal012345@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us A Message
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <HubSpotForm />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Service Area
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <InteractiveMap />
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Serving businesses across Delhi NCR including New Delhi, Gurgaon, 
                  Noida, and Faridabad with on-site consultations available.
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
