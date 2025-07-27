import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import WhatsAppWidget from '../../../components/WhatsAppWidget'

export const metadata = {
  title: 'Business Growth Blog - RJR Consultancy',
  description: 'Latest insights, tips, and strategies for business growth in Delhi NCR. Expert advice from RJR Consultancy.',
}

const blogPosts = [
  {
    id: 1,
    title: "5 Proven Strategies to Double Your Gym's Revenue in 6 Months",
    excerpt: "Learn the exact methods we use to help fitness centers achieve exponential growth through strategic marketing and operational improvements.",
    date: "January 15, 2024",
    category: "Fitness Industry",
    readTime: "8 min read",
    image: "/images/blog-gym.jpg"
  },
  {
    id: 2,
    title: "Local SEO for Delhi NCR Businesses: A Complete Guide",
    excerpt: "Master local search optimization to dominate your neighborhood market and attract more customers to your business.",
    date: "January 10, 2024", 
    category: "Digital Marketing",
    readTime: "12 min read",
    image: "/images/blog-seo.jpg"
  },
  {
    id: 3,
    title: "WhatsApp Business Automation: Converting Leads While You Sleep",
    excerpt: "Discover how to set up automated WhatsApp workflows that nurture leads and increase conversion rates 24/7.",
    date: "January 5, 2024",
    category: "Automation",
    readTime: "6 min read", 
    image: "/images/blog-whatsapp.jpg"
  },
  {
    id: 4,
    title: "Building a High-Converting Sales Funnel for Service Businesses",
    excerpt: "Step-by-step guide to creating sales funnels that consistently generate qualified leads for your service-based business.",
    date: "December 28, 2023",
    category: "Sales Strategy",
    readTime: "10 min read",
    image: "/images/blog-funnel.jpg"
  },
  {
    id: 5,
    title: "Instagram Marketing for Local Businesses: 2024 Strategies",
    excerpt: "Latest Instagram marketing tactics specifically designed for Delhi NCR businesses to maximize reach and engagement.",
    date: "December 20, 2023",
    category: "Social Media",
    readTime: "7 min read",
    image: "/images/blog-instagram.jpg"
  },
  {
    id: 6,
    title: "Staff Training That Actually Increases Sales: A Practical Approach",
    excerpt: "Proven training methodologies that transform your team into a high-performing sales force, with real case studies.",
    date: "December 15, 2023",
    category: "Team Development",
    readTime: "9 min read",
    image: "/images/blog-training.jpg"
  }
]

export default function Blog() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Business Growth Insights
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Expert strategies, proven tactics, and real-world case studies to help 
              your Delhi NCR business achieve exponential growth.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-6xl">📊</span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-4">
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {blogPosts[0].readTime}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get Weekly Growth Tips
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of Delhi NCR business owners getting actionable growth 
              strategies delivered to their inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
