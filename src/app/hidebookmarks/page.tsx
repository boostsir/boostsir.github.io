import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Shield, Lock, Smartphone, Target, Zap, Eye, Monitor, Users, Brain, Chrome, Database, Star } from "lucide-react";

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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: "Hide Bookmarks",
    applicationCategory: "BrowserExtension",
    operatingSystem: "Chrome",
    description: "A Chrome extension to hide or show all bookmarks with one click. Perfect for screen recording, presentations, or when you want to clean up your browser interface.",
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: "4.9",
      ratingCount: "45",
    },
    offers: {
      '@type': 'Offer',
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12">
          <Button variant="ghost" asChild className="mb-6 p-0 h-auto hover:bg-transparent">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mr-6 shadow-lg">
              H
            </div>
            <div>
              <h1 className="text-6xl font-bold tracking-tight mb-2">
                Hide Bookmarks
              </h1>
              <Badge variant="secondary" className="text-sm">
                Chrome Extension
              </Badge>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Hide and restore all your bookmarks with a single click. Perfect for privacy, 
            clean browsing, presentations, and shared computers.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a
                href="https://chromewebstore.google.com/detail/hide-bookmarks/gnbeiikcchjlodiocfmmdpfacolcheaf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Add to Chrome - FREE
              </a>
            </Button>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Star className="mr-1 h-4 w-4 text-yellow-500" />
              4.9/5 Rating
            </Badge>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Hide Bookmarks?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-green-200 hover:border-green-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Privacy Protection
                </h3>
                <p className="text-muted-foreground text-sm">
                  Hide bookmarks when sharing your screen or using shared computers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-200 hover:border-green-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Clean Interface
                </h3>
                <p className="text-muted-foreground text-sm">
                  Temporarily declutter your bookmark bar for a minimalist browsing experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-200 hover:border-green-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Focus Mode
                </h3>
                <p className="text-muted-foreground text-sm">
                  Remove distractions while working or studying for better concentration
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-200 hover:border-green-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  One-Click Toggle
                </h3>
                <p className="text-muted-foreground text-sm">
                  Hide or restore all bookmarks instantly with a single click
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Detail */}
        <section className="mb-20">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-center mb-8">
                Powerful Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-600" />
                    Core Features
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
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
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Technical Benefits
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
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
            </CardContent>
          </Card>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200">
              <CardContent className="pt-6">
                <Eye className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Screen Recording</h3>
                <p className="text-muted-foreground text-sm">
                  Hide personal bookmarks during video recordings or tutorials
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
              <CardContent className="pt-6">
                <Monitor className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold mb-2">Presentations</h3>
                <p className="text-muted-foreground text-sm">
                  Clean interface for professional presentations and demos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <h3 className="font-semibold mb-2">Shared Computers</h3>
                <p className="text-muted-foreground text-sm">
                  Keep personal bookmarks private on public or shared devices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200">
              <CardContent className="pt-6">
                <Brain className="h-12 w-12 mx-auto mb-4 text-teal-600" />
                <h3 className="font-semibold mb-2">Focused Work</h3>
                <p className="text-muted-foreground text-sm">
                  Remove distractions for better concentration and productivity
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Installation Instructions */}
        <section className="mb-20">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                How to Install
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <Chrome className="h-4 w-4" />
                      Visit Chrome Web Store
                    </h3>
                    <p className="text-muted-foreground">
                      Click the &quot;Add to Chrome&quot; button above to go to our Chrome Web Store page
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Install Extension
                    </h3>
                    <p className="text-muted-foreground">
                      Click &quot;Add to Chrome&quot; and confirm the installation in the popup
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Start Using
                    </h3>
                    <p className="text-muted-foreground">
                      Click the Hide Bookmarks icon in your toolbar to toggle bookmark visibility
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a
                    href="https://chromewebstore.google.com/detail/hide-bookmarks/gnbeiikcchjlodiocfmmdpfacolcheaf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Install Now - It&apos;s Free!
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Privacy & Security */}
        <section className="mb-20">
          <Card className="max-w-4xl mx-auto border-green-200 bg-green-50/50 dark:bg-green-900/10">
            <CardHeader>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle className="text-2xl">
                  Your Privacy Matters
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-green-600" />
                    Data Protection
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• No data collection or tracking</li>
                    <li>• All operations happen locally</li>
                    <li>• No external server communication</li>
                    <li>• Open source and transparent</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-5 w-5 text-green-600" />
                    Minimal Permissions
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Only requires bookmark access</li>
                    <li>• No browsing history access</li>
                    <li>• No personal data access</li>
                    <li>• No network permissions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">
                  Is my bookmark data safe?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! Hide Bookmarks only operates locally on your device. No bookmark data 
                  is ever sent to external servers or stored anywhere outside your browser.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">
                  Will hiding bookmarks delete them permanently?
                </h3>
                <p className="text-muted-foreground">
                  No! Your bookmarks are safely stored and can be restored exactly as they were. 
                  The extension preserves all folder structures and organization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">
                  Does it work with bookmark folders?
                </h3>
                <p className="text-muted-foreground">
                  Yes! Hide Bookmarks works with all bookmark folders and maintains your complete 
                  organizational structure when restoring bookmarks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">
                  Is it really free?
                </h3>
                <p className="text-muted-foreground">
                  Yes, Hide Bookmarks is completely free with no hidden costs, subscriptions, 
                  or premium features. It&apos;s our contribution to the productivity community.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <Card className="text-center max-w-3xl mx-auto mb-20">
          <CardContent className="pt-8">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Take Control of Your Bookmarks?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of users who trust Hide Bookmarks for privacy and productivity.
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a
                  href="https://chromewebstore.google.com/detail/hide-bookmarks/gnbeiikcchjlodiocfmmdpfacolcheaf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Add to Chrome - FREE
                </a>
              </Button>
            </div>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                Rated 4.9/5 by users
              </span>
              <span className="flex items-center gap-1">
                <Lock className="h-4 w-4" />
                100% Private
              </span>
              <span className="flex items-center gap-1">
                <Zap className="h-4 w-4" />
                Works Instantly
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center border-t pt-8">
          <div className="flex justify-center gap-8 text-muted-foreground mb-4">
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/">← Back to BoostSir</Link>
            </Button>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for productivity and privacy enthusiasts.
          </p>
        </footer>
      </div>
    </div>
  );
}