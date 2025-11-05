'use client'

import { useState } from 'react'
import { Sparkles, Video, Instagram, Youtube, TrendingUp, Zap, DollarSign, Target } from 'lucide-react'

export default function Home() {
  const [productUrl, setProductUrl] = useState('')
  const [productName, setProductName] = useState('')
  const [niche, setNiche] = useState('')
  const [contentType, setContentType] = useState('instagram-reel')
  const [generatedContent, setGeneratedContent] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const generateContent = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productUrl, productName, niche, contentType })
      })
      const data = await response.json()
      setGeneratedContent(data)
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              AI Affiliate Hub
            </h1>
          </div>
          <div className="flex space-x-4">
            <Instagram className="w-6 h-6 text-pink-500 hover:scale-110 transition cursor-pointer" />
            <Youtube className="w-6 h-6 text-red-500 hover:scale-110 transition cursor-pointer" />
            <Video className="w-6 h-6 text-indigo-500 hover:scale-110 transition cursor-pointer" />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Turn Content Into Cash with AI
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Generate viral Instagram Reels, YouTube Shorts, and TikTok videos that drive affiliate sales on autopilot
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <DollarSign className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">$10K+</h3>
              <p className="text-gray-600 dark:text-gray-400">Average Monthly Earnings</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <TrendingUp className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5M+</h3>
              <p className="text-gray-600 dark:text-gray-400">Views Generated</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <Zap className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">60 sec</h3>
              <p className="text-gray-600 dark:text-gray-400">AI Content Generation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Generator */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-indigo-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              AI Content Generator
            </h3>
          </div>

          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Product Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="e.g., Wireless Earbuds Pro"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            {/* Affiliate URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Affiliate Link
              </label>
              <input
                type="url"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                placeholder="https://amzn.to/your-affiliate-link"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            {/* Niche */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Niche/Category
              </label>
              <input
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g., Tech, Fitness, Beauty, Gaming"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            {/* Content Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Content Type
              </label>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => setContentType('instagram-reel')}
                  className={`py-3 px-4 rounded-xl font-medium transition ${
                    contentType === 'instagram-reel'
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                  }`}
                >
                  Instagram Reel
                </button>
                <button
                  onClick={() => setContentType('youtube-short')}
                  className={`py-3 px-4 rounded-xl font-medium transition ${
                    contentType === 'youtube-short'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                  }`}
                >
                  YouTube Short
                </button>
                <button
                  onClick={() => setContentType('tiktok')}
                  className={`py-3 px-4 rounded-xl font-medium transition ${
                    contentType === 'tiktok'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                  }`}
                >
                  TikTok
                </button>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateContent}
              disabled={loading || !productName || !niche}
              className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <Sparkles className="animate-spin mr-2" />
                  Generating...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Sparkles className="mr-2" />
                  Generate Viral Content
                </span>
              )}
            </button>
          </div>

          {/* Generated Content */}
          {generatedContent && (
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Your Viral Content Script 🎬
              </h4>

              <div className="space-y-4">
                {/* Hook */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                  <h5 className="font-bold text-indigo-600 mb-2">🎣 Hook (First 3 seconds)</h5>
                  <p className="text-gray-800 dark:text-gray-200">{generatedContent.hook}</p>
                </div>

                {/* Main Content */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                  <h5 className="font-bold text-purple-600 mb-2">📱 Main Content</h5>
                  <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">{generatedContent.mainContent}</p>
                </div>

                {/* Call to Action */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                  <h5 className="font-bold text-pink-600 mb-2">🎯 Call to Action</h5>
                  <p className="text-gray-800 dark:text-gray-200">{generatedContent.cta}</p>
                </div>

                {/* Hashtags */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                  <h5 className="font-bold text-blue-600 mb-2">#️⃣ Hashtags</h5>
                  <p className="text-gray-800 dark:text-gray-200">{generatedContent.hashtags}</p>
                </div>

                {/* Caption */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                  <h5 className="font-bold text-green-600 mb-2">✍️ Caption</h5>
                  <p className="text-gray-800 dark:text-gray-200">{generatedContent.caption}</p>
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => {
                  const fullContent = `${generatedContent.hook}\n\n${generatedContent.mainContent}\n\n${generatedContent.cta}\n\n${generatedContent.caption}\n\n${generatedContent.hashtags}`
                  navigator.clipboard.writeText(fullContent)
                }}
                className="mt-6 w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition"
              >
                📋 Copy All Content
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Why Choose AI Affiliate Hub?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <Sparkles className="w-12 h-12 text-indigo-500 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">AI-Powered Scripts</h4>
            <p className="text-gray-600 dark:text-gray-400">Generate viral-worthy scripts in seconds</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <TrendingUp className="w-12 h-12 text-pink-500 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Conversion Optimized</h4>
            <p className="text-gray-600 dark:text-gray-400">Scripts designed to maximize affiliate clicks</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <Video className="w-12 h-12 text-purple-500 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Multi-Platform</h4>
            <p className="text-gray-600 dark:text-gray-400">Content for Instagram, YouTube, TikTok</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <Zap className="w-12 h-12 text-yellow-500 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Lightning Fast</h4>
            <p className="text-gray-600 dark:text-gray-400">Create content in under 60 seconds</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">🚀 Start earning through affiliate marketing today</p>
          <p className="text-sm">AI Affiliate Hub - Your path to passive income</p>
        </div>
      </footer>
    </div>
  )
}
