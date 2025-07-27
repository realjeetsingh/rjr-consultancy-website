"use client"
import { useEffect, useRef } from 'react'

export default function InteractiveMap() {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    // Only initialize map on client-side
    if (typeof window !== 'undefined' && mapRef.current && !mapInstanceRef.current) {
      initializeMap()
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  const initializeMap = async () => {
    try {
      // Dynamically import Leaflet to avoid SSR issues
      const L = (await import('leaflet')).default

      // Fix for default markers in Leaflet
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })

      // Initialize map centered on Delhi NCR
      const map = L.map(mapRef.current).setView([28.5355, 77.3910], 10)
      mapInstanceRef.current = map

      // Add OpenStreetMap tiles (free)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map)

      // Service locations in Delhi NCR
      const locations = [
        {
          lat: 28.6139,
          lng: 77.2090,
          title: "New Delhi",
          description: "Central Business District - Serving corporate offices, clinics, and service businesses"
        },
        {
          lat: 28.4595,
          lng: 77.0266,
          title: "Gurgaon",
          description: "IT Hub & Financial Center - Specializing in tech startups and financial services"
        },
        {
          lat: 28.5355,
          lng: 77.3910,
          title: "Noida",
          description: "Tech & Media Hub - Supporting media companies, educational institutes, and retail"
        },
        {
          lat: 28.4089,
          lng: 77.3178,
          title: "Faridabad",
          description: "Industrial Center - Helping manufacturing businesses and industrial service providers"
        }
      ]

      // Add markers for each service location
      locations.forEach(location => {
        L.marker([location.lat, location.lng])
          .addTo(map)
          .bindPopup(`
            <div class="text-center p-2">
              <h3 class="font-bold text-lg text-gray-900 mb-2">${location.title}</h3>
              <p class="text-sm text-gray-600 mb-3">${location.description}</p>
              <a 
                href="https://wa.me/919599863263?text=Hi! I'm interested in business consultation in ${location.title}"
                target="_blank"
                class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                Get Consultation
              </a>
            </div>
          `)
      })

      // Add service area circle
      L.circle([28.5355, 77.3910], {
        color: '#2563eb',
        fillColor: '#3b82f6',
        fillOpacity: 0.1,
        radius: 25000
      }).addTo(map).bindPopup(`
        <div class="text-center p-2">
          <h3 class="font-bold text-lg text-gray-900 mb-2">RJR Consultancy Service Area</h3>
          <p class="text-sm text-gray-600">We serve businesses throughout this region</p>
        </div>
      `)

      // Handle map resize
      setTimeout(() => {
        map.invalidateSize()
      }, 100)

    } catch (error) {
      console.error('Error initializing map:', error)
      // Fallback: show static message
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div class="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div class="text-center p-8">
              <div class="text-4xl mb-4">🗺️</div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Delhi NCR Service Area</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                We serve businesses across New Delhi, Gurgaon, Noida, and Faridabad
              </p>
              <a
                href="https://wa.me/919599863263"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        `
      }
    }
  }

  return (
    <div className="w-full">
      <div
        ref={mapRef}
        className="w-full h-96 rounded-lg border border-gray-200 dark:border-gray-700"
        style={{ minHeight: '400px' }}
      />
      <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        📍 Click on markers to learn more about our services in each area
      </div>
    </div>
  )
}
