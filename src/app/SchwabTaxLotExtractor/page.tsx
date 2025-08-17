import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Bot, BarChart, TrendingUp, Lock, FileText, Shield, Database, Github, Star, Chrome, Zap } from "lucide-react";

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
            <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mr-6 shadow-lg">
              S
            </div>
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-2">
                Schwab Tax Lot Extractor
              </h1>
              <Badge variant="secondary" className="text-sm">
                Chrome Extension
              </Badge>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Automate extraction of tax lot data from Charles Schwab positions page. 
            Export detailed holding information with cost basis, gains/losses, and dates for tax reporting.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <a
                href="https://chromewebstore.google.com/detail/nfngfaakmkihccflfeikhdogangajljc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Add to Chrome - FREE
              </a>
            </Button>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Star className="mr-1 h-4 w-4 text-yellow-500" />
              5.0/5 Rating
            </Badge>
          </div>
          
          {/* Open Source Badge */}
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/boostsir/CharlesSchwab-Tax-Lot-Extractor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Open Source on GitHub
              </a>
            </Button>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Powerful Tax Lot Extraction Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-indigo-200 hover:border-indigo-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Automated Extraction
                </h3>
                <p className="text-muted-foreground text-sm">
                  Automatically visits each holding and extracts complete tax lot details
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-indigo-200 hover:border-indigo-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Complete Data Export
                </h3>
                <p className="text-muted-foreground text-sm">
                  Export to JSON or CSV with all cost basis, dates, and gain/loss information
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-indigo-200 hover:border-indigo-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Tax Reporting Ready
                </h3>
                <p className="text-muted-foreground text-sm">
                  Organized data perfect for tax preparation and portfolio analysis
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-indigo-200 hover:border-indigo-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Secure & Private
                </h3>
                <p className="text-muted-foreground text-sm">
                  All processing happens locally - no data sent to external servers
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Features */}
        <section className="mb-20">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                What Data Is Extracted
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-indigo-600" />
                    Core Information
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      Symbol and Account ID
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      Open Date for each tax lot
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      Quantity and Price per share
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      Current Market Value
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      Original Cost Basis
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-indigo-600" />
                    Tax & Performance Data
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      Unrealized Gain/Loss ($)
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      Unrealized Gain/Loss (%)
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      Holding Period (Short/Long term)
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      Cost Per Share calculation
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      Organized by account and symbol
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            How It Works
          </h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-8">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-6 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Navigate to Schwab Positions
                    </h3>
                    <p className="text-muted-foreground">
                      Open your Charles Schwab account and go to the positions page 
                      (https://client.schwab.com/app/accounts/positions/#/)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-6 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Start Extraction Process
                    </h3>
                    <p className="text-muted-foreground">
                      Click the extension icon and press &quot;Start Extraction&quot;. The tool will automatically 
                      find all holdings and begin processing each one.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-6 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Automated Data Collection
                    </h3>
                    <p className="text-muted-foreground">
                      For each holding, the extension clicks &quot;Next Steps&quot; → &quot;Lot Details&quot;, 
                      extracts all tax lot information from the modal, and moves to the next position.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-6 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Export Your Data
                    </h3>
                    <p className="text-muted-foreground">
                      Once complete, export your data as JSON or CSV. All information is organized 
                      by account and symbol for easy tax preparation.
                    </p>
                  </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold mb-2">Tax Preparation</h3>
                <p className="text-muted-foreground text-sm">
                  Gather all cost basis and holding period data needed for accurate tax reporting
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
              <CardContent className="pt-6">
                <BarChart className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold mb-2">Portfolio Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Analyze performance, unrealized gains, and tax implications across holdings
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <h3 className="font-semibold mb-2">Tax Loss Harvesting</h3>
                <p className="text-muted-foreground text-sm">
                  Identify opportunities for tax loss harvesting with detailed lot-level data
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="mb-20">
          <Card className="max-w-4xl mx-auto border-indigo-200 bg-indigo-50/50 dark:bg-indigo-900/10">
            <CardHeader>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                <CardTitle className="text-2xl">
                  Security & Privacy First
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-indigo-600" />
                    Data Protection
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• All processing happens locally on your device</li>
                    <li>• No external server communication</li>
                    <li>• Financial data never leaves your browser</li>
                    <li>• No tracking or analytics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-5 w-5 text-indigo-600" />
                    Technical Security
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Manifest V3 Chrome extension</li>
                    <li>• Minimal required permissions</li>
                    <li>• Open source and transparent</li>
                    <li>• Works entirely within Schwab&apos;s secure environment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Open Source Section */}
        <section className="mb-20">
          <Card className="max-w-4xl mx-auto bg-muted/30">
            <CardHeader>
              <div className="text-center">
                <Github className="h-12 w-12 mx-auto mb-4 text-foreground" />
                <CardTitle className="text-2xl">
                  Open Source & Transparent
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-muted-foreground mb-6">
                  The Schwab Tax Lot Extractor is completely open source. You can review the code, 
                  contribute improvements, or fork the project for your own use.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Developer Benefits
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Review all source code</li>
                      <li>• Understand security implementation</li>
                      <li>• Contribute features and bug fixes</li>
                      <li>• Fork for custom modifications</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Transparency
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• No hidden functionality</li>
                      <li>• Test-driven development approach</li>
                      <li>• Community-driven improvements</li>
                      <li>• MIT License for maximum freedom</li>
                    </ul>
                  </div>
                </div>
                <Button asChild size="lg" variant="default">
                  <a
                    href="https://github.com/boostsir/CharlesSchwab-Tax-Lot-Extractor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
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
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
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
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
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
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Start Extracting
                    </h3>
                    <p className="text-muted-foreground">
                      Navigate to your Schwab positions page and click the extension icon to begin
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <a
                    href="https://chromewebstore.google.com/detail/nfngfaakmkihccflfeikhdogangajljc"
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

        {/* Final CTA */}
        <Card className="text-center max-w-3xl mx-auto mb-20">
          <CardContent className="pt-8">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Streamline Your Tax Reporting?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join users who have already simplified their tax preparation with automated tax lot extraction.
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <a
                  href="https://chromewebstore.google.com/detail/nfngfaakmkihccflfeikhdogangajljc"
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
                <Github className="h-4 w-4" />
                Open Source
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
            Made with ❤️ for investors and tax preparation professionals.
          </p>
        </footer>
      </div>
    </div>
  );
}