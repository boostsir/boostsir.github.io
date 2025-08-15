import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schwab Tax Lot Extractor - Chrome Extension | BoostSir",
  description: "Automate extraction of tax lot data from Charles Schwab positions page. Export detailed holding information with cost basis, gains/losses, and dates for tax reporting.",
  keywords: "schwab, tax lots, cost basis, chrome extension, tax reporting, investment tracking, portfolio management",
  openGraph: {
    title: "Schwab Tax Lot Extractor - Chrome Extension",
    description: "Automate extraction of tax lot data from Charles Schwab for easy tax reporting and portfolio analysis.",
    type: "website",
    url: "https://boostsir.com/SchwabTaxLotExtractor",
  },
};

export default function SchwabTaxLotExtractor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-6"
          >
            ← Back to Home
          </Link>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mr-6 shadow-lg">
              S
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Schwab Tax Lot Extractor
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Automate extraction of tax lot data from Charles Schwab positions page. 
            Export detailed holding information with cost basis, gains/losses, and dates for tax reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              disabled
              className="inline-flex items-center px-8 py-4 bg-gray-400 text-white font-medium text-lg rounded-lg cursor-not-allowed shadow-lg"
            >
              <span className="mr-2">🚧</span>
              Coming Soon - In Development
            </button>
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
            Powerful Tax Lot Extraction Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Automated Extraction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Automatically visits each holding and extracts complete tax lot details
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Complete Data Export
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Export to JSON or CSV with all cost basis, dates, and gain/loss information
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Tax Reporting Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Organized data perfect for tax preparation and portfolio analysis
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                All processing happens locally - no data sent to external servers
              </p>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              What Data Is Extracted
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  📋 Core Information
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Symbol and Account ID
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Open Date for each tax lot
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Quantity and Price per share
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Current Market Value
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Original Cost Basis
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  💰 Tax & Performance Data
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Unrealized Gain/Loss ($)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Unrealized Gain/Loss (%)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Holding Period (Short/Long term)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Cost Per Share calculation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Organized by account and symbol
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-6 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Navigate to Schwab Positions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Open your Charles Schwab account and go to the positions page 
                    (https://client.schwab.com/app/accounts/positions/#/)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-6 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Start Extraction Process
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Click the extension icon and press &quot;Start Extraction&quot;. The tool will automatically 
                    find all holdings and begin processing each one.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-6 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Automated Data Collection
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    For each holding, the extension clicks &quot;Next Steps&quot; → &quot;Lot Details&quot;, 
                    extracts all tax lot information from the modal, and moves to the next position.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-6 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Export Your Data
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Once complete, export your data as JSON or CSV. All information is organized 
                    by account and symbol for easy tax preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 text-center">
              <span className="text-4xl mb-4 block">📋</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tax Preparation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Gather all cost basis and holding period data needed for accurate tax reporting
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 text-center">
              <span className="text-4xl mb-4 block">📊</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Portfolio Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Analyze performance, unrealized gains, and tax implications across holdings
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-6 text-center">
              <span className="text-4xl mb-4 block">🔄</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tax Loss Harvesting</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Identify opportunities for tax loss harvesting with detailed lot-level data
              </p>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-4xl mb-2 block">🛡️</span>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Security & Privacy First
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  🔐 Data Protection
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• All processing happens locally on your device</li>
                  <li>• No external server communication</li>
                  <li>• Financial data never leaves your browser</li>
                  <li>• No tracking or analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  ⚙️ Technical Security
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Manifest V3 Chrome extension</li>
                  <li>• Minimal required permissions</li>
                  <li>• Open source and transparent</li>
                  <li>• Works entirely within Schwab&apos;s secure environment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Status */}
        <section className="mb-16">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-4xl mb-2 block">🚧</span>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Currently In Development
              </h2>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The Schwab Tax Lot Extractor is currently being developed following a test-driven 
                development approach. We&apos;re building this tool with reliability and security as top priorities.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    ✅ Planned Features
                  </h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Complete tax lot data extraction</li>
                    <li>• JSON and CSV export options</li>
                    <li>• Progress tracking and resume capability</li>
                    <li>• Error handling and retry logic</li>
                    <li>• Comprehensive testing suite</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    🎯 Development Timeline
                  </h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Core extraction engine (Days 1-3)</li>
                    <li>• User interface development (Days 4-5)</li>
                    <li>• Export functionality (Days 6-7)</li>
                    <li>• Testing and polish (Days 8-9)</li>
                    <li>• Chrome Web Store submission</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon CTA */}
        <section className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Get Notified When Available
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Be the first to know when the Schwab Tax Lot Extractor is ready for download.
          </p>
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Follow our progress and get updates:
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Visit BoostSir for Updates
            </Link>
          </div>
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
            Made with ❤️ for investors and tax preparation professionals.
          </p>
        </footer>
      </div>
    </div>
  );
}