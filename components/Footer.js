import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              RJR Consultancy
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Performance-driven business growth consultancy helping local businesses 
              in Delhi-NCR reach their full potential through proven strategies and 
              innovative solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919599863263"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 text-2xl"
                aria-label="WhatsApp"
              >
                📱
              </a>
              <a
                href="https://instagram.com/realjeetsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 text-2xl"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href="mailto:ixglobal012345@gmail.com"
                className="text-blue-400 hover:text-blue-300 text-2xl"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Business Consultation</li>
              <li className="text-gray-300">Marketing & Lead Generation</li>
              <li className="text-gray-300">Sales Funnel Building</li>
              <li className="text-gray-300">Brand Positioning</li>
              <li className="text-gray-300">Staff Training</li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <p className="text-gray-300 mb-4">
              Proudly serving businesses across the Delhi NCR region
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>New Delhi</span>
              <span>•</span>
              <span>Gurgaon</span>
              <span>•</span>
              <span>Noida</span>
              <span>•</span>  
              <span>Faridabad</span>
              <span>•</span>
              <span>Greater Noida</span>
              <span>•</span>
              <span>Dwarka</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RJR Consultancy. All rights reserved. 
            Built with ❤️ for Delhi NCR businesses.
          </p>
        </div>
      </div>
    </footer>
  )
}
