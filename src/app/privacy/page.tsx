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
              across all our tools and services. By using our services, you agree to the collection and 
              use of information in accordance with this policy.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-red-800 dark:text-red-300 mb-4">
              Important Disclaimers
            </h2>
            <div className="text-red-700 dark:text-red-300 space-y-3">
              <p className="font-medium">
                <strong>Use At Your Own Risk:</strong> Our tools are provided &quot;as-is&quot; without warranties of any kind. 
                Users assume all risks associated with using our services.
              </p>
              <p>
                <strong>No Liability:</strong> BoostSir shall not be liable for any direct, indirect, incidental, 
                special, consequential, or punitive damages resulting from your use of our services.
              </p>
              <p>
                <strong>Content Responsibility:</strong> Users are solely responsible for any content they upload, 
                process, or share through our tools. We do not monitor or control user-generated content.
              </p>
              <p>
                <strong>Service Availability:</strong> We do not guarantee uninterrupted service availability 
                and reserve the right to modify or discontinue services at any time without notice.
              </p>
            </div>
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
              Your Rights & Legal Compliance
            </h2>
            
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              User Rights
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6 mb-4">
              <li>Use our tools without creating an account</li>
              <li>Request deletion of any data we may have (subject to legal requirements)</li>
              <li>Opt out of any optional data collection</li>
              <li>Contact us with privacy concerns</li>
              <li>Access information about data processing (where applicable)</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              GDPR Compliance (EU Users)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              If you are located in the European Union, you have additional rights under GDPR:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6 mb-4">
              <li>Right to rectification of inaccurate data</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent at any time</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              CCPA Rights (California Users)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              California residents have additional rights under the California Consumer Privacy Act:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of sale of personal information (we do not sell data)</li>
              <li>Right to non-discrimination for exercising these rights</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Intellectual Property & Usage Terms
            </h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                <strong>Service Ownership:</strong> BoostSir retains all rights, title, and interest in our services, 
                including all intellectual property rights.
              </p>
              <p>
                <strong>User Content:</strong> You retain ownership of content you upload but grant us a limited 
                license to process it for service functionality. We do not claim ownership of your content.
              </p>
              <p>
                <strong>Prohibited Uses:</strong> Users may not use our services for illegal activities, 
                copyright infringement, spam, malware distribution, or any harmful purposes.
              </p>
              <p>
                <strong>Account Termination:</strong> We reserve the right to suspend or terminate access 
                for users who violate our terms or engage in harmful activities.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Security & Breach Notification
            </h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                <strong>Security Measures:</strong> We implement appropriate technical and organizational 
                security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                <strong>Breach Notification:</strong> In the unlikely event of a data breach affecting personal information, 
                we will notify affected users within 72 hours where feasible and as required by applicable law.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> While we strive to protect your information, no method of 
                transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Policy Updates & Governing Law
            </h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                <strong>Policy Changes:</strong> We may update this privacy policy from time to time. 
                Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
              <p>
                <strong>Notification of Changes:</strong> Material changes will be communicated through our website 
                or other appropriate means at least 30 days before becoming effective.
              </p>
              <p>
                <strong>Governing Law:</strong> This privacy policy is governed by the laws of the jurisdiction 
                where our services are operated, without regard to conflict of law principles.
              </p>
              <p>
                <strong>Dispute Resolution:</strong> Any disputes arising from this policy shall be resolved 
                through binding arbitration in accordance with applicable arbitration rules.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                If you have any questions about this privacy policy or our practices, 
                please contact us through our GitHub repository or support channels.
              </p>
              <p>
                <strong>Response Time:</strong> We aim to respond to privacy-related inquiries within 30 days. 
                For urgent matters, please clearly mark your communication as &quot;URGENT - PRIVACY&quot;.
              </p>
              <p className="text-sm">
                <strong>Legal Notice:</strong> This privacy policy constitutes a legally binding agreement. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}