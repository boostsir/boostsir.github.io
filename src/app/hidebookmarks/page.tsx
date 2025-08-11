import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hide Bookmarks - Chrome Extension | BoostSir",
  description: "Hide and restore all your bookmarks with a single click. Perfect for privacy, clean browsing, presentations, and shared computers. Free Chrome extension.",
  keywords: "chrome extension, hide bookmarks, privacy, presentations, clean browsing, productivity",
  openGraph: {
    title: "Hide Bookmarks - Chrome Extension",
    description: "Hide and restore all your bookmarks with a single click. Perfect for privacy and presentations.",
    type: "website",
    url: "https://boostsir.com/hidebookmarks",
  },
};

export default function HideBookmarks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 mb-6"
          >
            ← Back to Home
          </Link>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mr-6 shadow-lg">
              H
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Hide Bookmarks
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Hide and restore all your bookmarks with a single click. Perfect for privacy, 
            clean browsing, presentations, and shared computers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium text-lg rounded-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              <span className="mr-2">🛒</span>
              Add to Chrome - FREE
            </a>
            <a
              href="#features"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium text-lg rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Hide Bookmarks?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Privacy Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Hide bookmarks when sharing your screen or using shared computers
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Clean Interface
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Temporarily declutter your bookmark bar for a minimalist browsing experience
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Focus Mode
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Remove distractions while working or studying for better concentration
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                One-Click Toggle
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Hide or restore all bookmarks instantly with a single click
              </p>
            </div>
          </div>
        </section>

        {/* Features Detail */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  ✨ Core Features
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    One-click hide/restore for ALL bookmarks
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Preserves folder structure and organization
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Lightweight and fast - no performance impact
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Works offline - no data sent to servers
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Clean, intuitive interface
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  🛡️ Technical Benefits
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Uses Chrome&apos;s native bookmark API
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Local storage only - your data stays private
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Manifest V3 for future compatibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Thoroughly tested and reliable
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    No tracking or analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 text-center">
              <span className="text-4xl mb-4 block">🎥</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Screen Recording</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Hide personal bookmarks during video recordings or tutorials
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 text-center">
              <span className="text-4xl mb-4 block">📊</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Presentations</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Clean interface for professional presentations and demos
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-6 text-center">
              <span className="text-4xl mb-4 block">👥</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Shared Computers</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Keep personal bookmarks private on public or shared devices
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-lg p-6 text-center">
              <span className="text-4xl mb-4 block">🧘</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Focused Work</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Remove distractions for better concentration and productivity
              </p>
            </div>
          </div>
        </section>

        {/* Installation Instructions */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              How to Install
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Visit Chrome Web Store
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Click the &quot;Add to Chrome&quot; button above to go to our Chrome Web Store page
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Install Extension
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Click &quot;Add to Chrome&quot; and confirm the installation in the popup
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Start Using
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Click the Hide Bookmarks icon in your toolbar to toggle bookmark visibility
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium text-lg rounded-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                <span className="mr-2">🛒</span>
                Install Now - It&apos;s Free!
              </a>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="mb-16">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-4xl mb-2 block">🛡️</span>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Your Privacy Matters
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  🔐 Data Protection
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• No data collection or tracking</li>
                  <li>• All operations happen locally</li>
                  <li>• No external server communication</li>
                  <li>• Open source and transparent</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  ⚙️ Minimal Permissions
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Only requires bookmark access</li>
                  <li>• No browsing history access</li>
                  <li>• No personal data access</li>
                  <li>• No network permissions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is my bookmark data safe?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! Hide Bookmarks only operates locally on your device. No bookmark data 
                is ever sent to external servers or stored anywhere outside your browser.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Will hiding bookmarks delete them permanently?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No! Your bookmarks are safely stored and can be restored exactly as they were. 
                The extension preserves all folder structures and organization.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Does it work with bookmark folders?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! Hide Bookmarks works with all bookmark folders and maintains your complete 
                organizational structure when restoring bookmarks.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is it really free?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, Hide Bookmarks is completely free with no hidden costs, subscriptions, 
                or premium features. It&apos;s our contribution to the productivity community.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Ready to Take Control of Your Bookmarks?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of users who trust Hide Bookmarks for privacy and productivity.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium text-lg rounded-lg hover:bg-green-700 transition-colors shadow-lg mr-4"
          >
            <span className="mr-2">🛒</span>
            Add to Chrome - FREE
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            ⭐ Rated 4.9/5 by users • 🔒 100% Private • ⚡ Works Instantly
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="flex justify-center gap-8 text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              ← Back to BoostSir
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Made with ❤️ for productivity and privacy enthusiasts.
          </p>
        </footer>
      </div>
    </div>
  );
}