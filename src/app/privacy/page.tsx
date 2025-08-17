import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, AlertTriangle, Info, Users, Scale, FileText, Phone } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <header className="mb-12">
          <Button variant="ghost" asChild className="mb-6 p-0 h-auto hover:bg-transparent">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-2">
              Legal Document
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </header>

        <main className="space-y-8">
          {/* Privacy Commitment */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Our Commitment to Privacy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                At BoostSir, we take your privacy seriously. This policy outlines how we handle your data 
                across all our tools and services. By using our services, you agree to the collection and 
                use of information in accordance with this policy.
              </p>
            </CardContent>
          </Card>

          {/* Important Disclaimers */}
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <CardTitle className="text-2xl text-destructive">Important Disclaimers</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <p>
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
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Info className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Data Collection</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs font-bold flex items-center justify-center">F</div>
                  FrameFill
                </h3>
                <ul className="text-muted-foreground space-y-1 list-disc pl-6">
                  <li>Images you upload are processed locally in your browser when possible</li>
                  <li>No images are permanently stored on our servers</li>
                  <li>Processing data is automatically deleted after completion</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded text-white text-xs font-bold flex items-center justify-center">H</div>
                  HideBookmarks Chrome Extension
                </h3>
                <ul className="text-muted-foreground space-y-1 list-disc pl-6">
                  <li>Only accesses bookmark visibility settings in your browser</li>
                  <li>No bookmark content or personal data is collected</li>
                  <li>All functionality operates locally on your device</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded text-white text-xs font-bold flex items-center justify-center">M</div>
                  Mortgage Calculator
                </h3>
                <ul className="text-muted-foreground space-y-1 list-disc pl-6">
                  <li>All calculations are performed locally in your browser</li>
                  <li>No financial information is transmitted or stored on our servers</li>
                  <li>Shareable links contain only calculation parameters, not personal data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-indigo-500 rounded text-white text-xs font-bold flex items-center justify-center">S</div>
                  Schwab Tax Lot Extractor Chrome Extension
                </h3>
                <ul className="text-muted-foreground space-y-1 list-disc pl-6">
                  <li>All data extraction and processing happens locally on your device</li>
                  <li>No financial data, account information, or tax lot details are transmitted to external servers</li>
                  <li>Works entirely within Charles Schwab&apos;s secure environment</li>
                  <li>Exported data remains under your complete control and ownership</li>
                  <li>No tracking, analytics, or data collection of any kind</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Data Usage</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We do not:
              </p>
              <ul className="text-muted-foreground space-y-1 list-disc pl-6">
                <li>Sell your personal information to third parties</li>
                <li>Use your data for advertising purposes</li>
                <li>Store personal files or content permanently</li>
                <li>Track your activity across other websites</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies and Analytics */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Cookies and Analytics</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We use minimal analytics to improve our services:
              </p>
              <ul className="text-muted-foreground space-y-1 list-disc pl-6">
                <li>Basic usage statistics (page views, feature usage)</li>
                <li>Error reporting to improve tool reliability</li>
                <li>No personally identifiable information is collected</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our tools may use third-party services for:
              </p>
              <ul className="text-muted-foreground space-y-1 list-disc pl-6">
                <li>Content delivery (CDN services)</li>
                <li>Basic error monitoring</li>
                <li>All third-party services are chosen for their privacy-first approach</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights & Legal Compliance */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Your Rights & Legal Compliance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  User Rights
                </h3>
                <ul className="text-muted-foreground space-y-1 list-disc pl-6">
                  <li>Use our tools without creating an account</li>
                  <li>Request deletion of any data we may have (subject to legal requirements)</li>
                  <li>Opt out of any optional data collection</li>
                  <li>Contact us with privacy concerns</li>
                  <li>Access information about data processing (where applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  GDPR Compliance (EU Users)
                </h3>
                <p className="text-muted-foreground mb-2">
                  If you are located in the European Union, you have additional rights under GDPR:
                </p>
                <ul className="text-muted-foreground space-y-1 list-disc pl-6">
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  CCPA Rights (California Users)
                </h3>
                <p className="text-muted-foreground mb-2">
                  California residents have additional rights under the California Consumer Privacy Act:
                </p>
                <ul className="text-muted-foreground space-y-1 list-disc pl-6">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of sale of personal information (we do not sell data)</li>
                  <li>Right to non-discrimination for exercising these rights</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property & Usage Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Intellectual Property & Usage Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
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
            </CardContent>
          </Card>

          {/* Data Security & Breach Notification */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Data Security & Breach Notification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
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
            </CardContent>
          </Card>

          {/* Policy Updates & Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Policy Updates & Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
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
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Contact Us</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                If you have any questions about this privacy policy or our practices, 
                please contact us through our GitHub repository or support channels.
              </p>
              <p>
                <strong>Response Time:</strong> We aim to respond to privacy-related inquiries within 30 days. 
                For urgent matters, please clearly mark your communication as &quot;URGENT - PRIVACY&quot;.
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Legal Notice:</strong> This privacy policy constitutes a legally binding agreement. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}