"use client"
import { useEffect, useRef } from 'react'

export default function HubSpotForm() {
  const formRef = useRef(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && !scriptLoadedRef.current) {
      loadHubSpotForm()
    }
  }, [])

  const loadHubSpotForm = () => {
    try {
      // Remove any existing HubSpot script
      const existingScript = document.getElementById('hs-script-loader')
      if (existingScript) {
        existingScript.remove()
      }

      // Create and load HubSpot forms script
      const script = document.createElement('script')
      script.src = 'https://js.hsforms.net/forms/v2.js'
      script.async = true
      script.id = 'hs-script-loader'
      document.body.appendChild(script)

      script.onload = () => {
        if (window.hbspt && formRef.current) {
          window.hbspt.forms.create({
            region: 'na1', // Change this to your HubSpot region (na1, eu1, etc.)
            portalId: 'YOUR_PORTAL_ID', // Replace with your actual Portal ID
            formId: 'YOUR_FORM_ID', // Replace with your actual Form ID
            target: '#hubspot-form-container',
            onFormReady: function() {
              console.log('HubSpot form ready')
            },
            onFormSubmit: function() {
              console.log('HubSpot form submitted')
            }
          })
          scriptLoadedRef.current = true
        }
      }

      script.onerror = () => {
        console.error('Failed to load HubSpot forms script')
        showFallbackForm()
      }
    } catch (error) {
      console.error('Error loading HubSpot form:', error)
      showFallbackForm()
    }
  }

  const showFallbackForm = () => {
    if (formRef.current) {
      formRef.current.innerHTML = `
        <form class="space-y-4" action="mailto:ixglobal012345@gmail.com" method="post" enctype="text/plain">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label for="business" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Business Name
            </label>
            <input
              type="text"
              id="business"
              name="business"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your business name"
            />
          </div>

          <div>
            <label for="service" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select a service</option>
              <option value="consultation">Business Consultation</option>
              <option value="marketing">Marketing & Lead Generation</option>
              <option value="funnel">Sales Funnel Building</option>
              <option value="branding">Brand Positioning</option>
              <option value="training">Staff Training</option>
            </select>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Tell us about your business and how we can help..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>

          <p class="text-xs text-gray-500 dark:text-gray-400 text-center">
            Prefer WhatsApp? 
            <a href="https://wa.me/919599863263" target="_blank" class="text-blue-600 hover:text-blue-700">
              Message us directly
            </a>
          </p>
        </form>
      `
    }
  }

  return (
    <div className="w-full">
      <div
        id="hubspot-form-container"
        ref={formRef}
        className="min-h-[400px]"
      />

      {/* Fallback message while loading */}
      <div className="text-center text-gray-500 dark:text-gray-400 mt-4">
        <p className="text-sm">
          Form loading... If it doesn't appear, please{' '}
          <a
            href="https://wa.me/919599863263"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            contact us directly
          </a>
        </p>
      </div>
    </div>
  )
}
