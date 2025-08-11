import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <main className="prose prose-gray dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Commitment to Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At BoostSir, we take your privacy seriously. This policy outlines how we handle your data 
              across all our tools and services.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Collection
            </h2>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              FrameFill
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 mb-4 list-disc pl-6">
              <li>Images you upload are processed locally in your browser when possible</li>
              <li>No images are permanently stored on our servers</li>
              <li>Processing data is automatically deleted after completion</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              HideBookmarks Chrome Extension
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 mb-4 list-disc pl-6">
              <li>Only accesses bookmark visibility settings in your browser</li>
              <li>No bookmark content or personal data is collected</li>
              <li>All functionality operates locally on your device</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Usage
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We do not:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6">
              <li>Sell your personal information to third parties</li>
              <li>Use your data for advertising purposes</li>
              <li>Store personal files or content permanently</li>
              <li>Track your activity across other websites</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Cookies and Analytics
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use minimal analytics to improve our services:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6">
              <li>Basic usage statistics (page views, feature usage)</li>
              <li>Error reporting to improve tool reliability</li>
              <li>No personally identifiable information is collected</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our tools may use third-party services for:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6">
              <li>Content delivery (CDN services)</li>
              <li>Basic error monitoring</li>
              <li>All third-party services are chosen for their privacy-first approach</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6">
              <li>Use our tools without creating an account</li>
              <li>Request deletion of any data we may have</li>
              <li>Opt out of any optional data collection</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about this privacy policy or our practices, 
              please contact us through our GitHub repository or support channels.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}