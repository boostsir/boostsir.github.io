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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: "Schwab Tax Lot Extractor",
    applicationCategory: "BrowserExtension",
    operatingSystem: "Chrome",
    description: "A Chrome extension to automate the extraction of tax lot data from Charles Schwab positions. Export cost basis, gains/losses, and holding periods for easy tax reporting and analysis.",
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: "5.0",
      ratingCount: "5",
    },
    offers: {
      '@type': 'Offer',
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <div className="flex justify-center mb-6">
            <a
              href="https://chromewebstore.google.com/detail/nfngfaakmkihccflfeikhdogangajljc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              <span className="mr-2">⬇️</span>
              Add to Chrome - FREE
            </a>
          </div>
          
          {/* Open Source Badge */}
          <div className="flex justify-center">
            <a
              href="https://github.com/boostsir/CharlesSchwab-Tax-Lot-Extractor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              🌟 Open Source on GitHub
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

        {/* Open Source Section */}
        <section className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                🌟 Open Source & Transparent
              </h2>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The Schwab Tax Lot Extractor is completely open source. You can review the code, 
                contribute improvements, or fork the project for your own use.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    👨‍💻 Developer Benefits
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Review all source code</li>
                    <li>• Understand security implementation</li>
                    <li>• Contribute features and bug fixes</li>
                    <li>• Fork for custom modifications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🔍 Transparency
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• No hidden functionality</li>
                    <li>• Test-driven development approach</li>
                    <li>• Community-driven improvements</li>
                    <li>• MIT License for maximum freedom</li>
                  </ul>
                </div>
              </div>
              <a
                href="https://github.com/boostsir/CharlesSchwab-Tax-Lot-Extractor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white font-medium text-lg rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
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
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
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
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
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
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Start Extracting
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Navigate to your Schwab positions page and click the extension icon to begin
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://chromewebstore.google.com/detail/nfngfaakmkihccflfeikhdogangajljc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                <span className="mr-2">⬇️</span>
                Install Now - It&apos;s Free!
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Ready to Streamline Your Tax Reporting?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join users who have already simplified their tax preparation with automated tax lot extraction.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/nfngfaakmkihccflfeikhdogangajljc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg mr-4"
          >
            <span className="mr-2">⬇️</span>
            Add to Chrome - FREE
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            ⭐ Open Source • 🔒 100% Private • ⚡ Works Instantly
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
            Made with ❤️ for investors and tax preparation professionals.
          </p>
        </footer>
      </div>
    </div>
  );
}