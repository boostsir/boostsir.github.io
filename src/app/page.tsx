import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            BoostSir
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful productivity tools to boost your workflow. Free, fast, and reliable.
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  F
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  FrameFill
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Transform any image to any size with beautiful AI-generated backgrounds. 
                Perfect for Chrome Web Store, YouTube thumbnails, and social media uploads. 
                100% free to use.
              </p>
              <a
                href="/framefill"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try FrameFill →
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  H
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  HideBookmarks
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Chrome extension to hide or show all bookmarks with one click. 
                Perfect for screen recording, presentations, or when you want to 
                clean up your browser interface. Now available on Chrome Web Store!
              </p>
              <div className="flex gap-3">
                <a
                  href="https://chromewebstore.google.com/detail/hide-bookmarks/gnbeiikcchjlodiocfmmdpfacolcheaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  ⬇️ Add to Chrome
                </a>
                <a
                  href="/hidebookmarks"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  M
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Mortgage Calculator
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Calculate mortgage payments, taxes, insurance, and HOA fees with detailed cost breakdown. 
                Share your calculations with others using shareable links or QR codes. 
                Perfect for home buyers and real estate professionals.
              </p>
              <a
                href="/mortgage-calculator"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
              >
                Calculate Now →
              </a>
            </div>
          </div>

          <section className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose BoostSir Tools?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fast & Reliable</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Built for speed and reliability, our tools work when you need them most.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🆓</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">100% Free</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  No subscriptions, no hidden fees. All our tools are completely free to use.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy First</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Your data stays with you. We don&apos;t track, store, or sell your information.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center">
          <div className="flex justify-center gap-8 text-gray-600 dark:text-gray-400">
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            © 2024 BoostSir. Built with ❤️ for productivity enthusiasts.
          </p>
        </footer>
      </div>
    </div>
  );
}
