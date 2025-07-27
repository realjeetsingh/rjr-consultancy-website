"use client"
import { useState } from 'react'

export default function WhatsAppWidget() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Expanded Chat Bubble */}
        {isExpanded && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 mb-4 w-80 max-w-[calc(100vw-3rem)] border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg">📱</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">RJR Consultancy</h4>
                <p className="text-sm text-green-600">Online • Quick Reply</p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="ml-auto text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 mb-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                👋 Hi there! Ready to grow your business?
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Typically replies within minutes
              </p>
            </div>

            <div className="space-y-2">
              <a
                href="https://wa.me/919599863263?text=Hi! I'm interested in business growth consultation for my Delhi NCR business."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                onClick={() => setIsExpanded(false)}
              >
                💬 Start Conversation
              </a>
              <a
                href="https://wa.me/919599863263?text=I'd like to book a free growth audit for my business."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-green-500 text-green-600 dark:text-green-400 text-center py-2 px-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-sm font-medium"
                onClick={() => setIsExpanded(false)}
              >
                📊 Free Growth Audit
              </a>
            </div>
          </div>
        )}

        {/* WhatsApp Floating Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          aria-label="Open WhatsApp Chat"
        >
          <span className="text-2xl">📱</span>
        </button>
      </div>

      {/* Background Overlay (when expanded) */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  )
}
