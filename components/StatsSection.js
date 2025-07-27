"use client"

const stats = [
  {
    number: "150+",
    label: "Businesses Transformed",
    icon: "🏢"
  },
  {
    number: "300%",
    label: "Average Revenue Growth",
    icon: "📈"
  },
  {
    number: "24hrs",
    label: "Average Response Time",
    icon: "⚡"
  },
  {
    number: "98%",
    label: "Client Satisfaction Rate",
    icon: "⭐"
  }
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-600 dark:bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We measure our success by the growth and satisfaction of our clients 
            throughout the Delhi NCR region.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
