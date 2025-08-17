import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, ExternalLink, Zap, Shield, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <header className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 text-sm">
            Free productivity tools for everyone
          </Badge>
          <h1 className="text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            BoostSir
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powerful productivity tools to boost your workflow. Free, fast, and reliable solutions for modern professionals.
          </p>
        </header>

        <main className="max-w-6xl mx-auto">
          {/* Product Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* FrameFill */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    F
                  </div>
                  <div>
                    <CardTitle className="text-2xl">FrameFill</CardTitle>
                    <Badge variant="outline" className="mt-1">AI-Powered</Badge>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Transform any image to any size with beautiful AI-generated backgrounds. Perfect for Chrome Web Store, YouTube thumbnails, and social media uploads.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/framefill">
                    Try FrameFill <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* HideBookmarks */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200 dark:hover:border-green-800">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    H
                  </div>
                  <div>
                    <CardTitle className="text-2xl">HideBookmarks</CardTitle>
                    <Badge variant="outline" className="mt-1">Chrome Extension</Badge>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Chrome extension to hide or show all bookmarks with one click. Perfect for screen recording, presentations, or cleaning up your browser interface.
                </CardDescription>
              </CardHeader>
              <CardFooter className="gap-3">
                <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                  <a
                    href="https://chromewebstore.google.com/detail/hide-bookmarks/gnbeiikcchjlodiocfmmdpfacolcheaf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" /> Add to Chrome
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/hidebookmarks">
                    <ExternalLink className="mr-2 h-4 w-4" /> Learn More
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Mortgage Calculator */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200 dark:hover:border-orange-800">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    M
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Mortgage Calculator</CardTitle>
                    <Badge variant="outline" className="mt-1">Financial Tool</Badge>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Calculate mortgage payments, taxes, insurance, and HOA fees with detailed cost breakdown. Share calculations with QR codes for easy access.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/mortgage-calculator">
                    Calculate Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Schwab Tax Lot Extractor */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-indigo-200 dark:hover:border-indigo-800">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    S
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Schwab Tax Lot Extractor</CardTitle>
                    <Badge variant="outline" className="mt-1">Chrome Extension</Badge>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Chrome extension to automate extraction of tax lot data from Charles Schwab positions. Export cost basis, gains/losses, and holding periods.
                </CardDescription>
              </CardHeader>
              <CardFooter className="gap-3">
                <Button asChild className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                  <a
                    href="https://chromewebstore.google.com/detail/nfngfaakmkihccflfeikhdogangajljc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" /> Add to Chrome
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/SchwabTaxLotExtractor">
                    <ExternalLink className="mr-2 h-4 w-4" /> Learn More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Features Section */}
          <Card className="text-center p-8 bg-gradient-to-br from-card to-muted/5">
            <CardHeader>
              <CardTitle className="text-3xl mb-8">Why Choose BoostSir Tools?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Fast & Reliable</h3>
                  <p className="text-muted-foreground">
                    Built for speed and reliability, our tools work when you need them most.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">100% Free</h3>
                  <p className="text-muted-foreground">
                    No subscriptions, no hidden fees. All our tools are completely free to use.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Privacy First</h3>
                  <p className="text-muted-foreground">
                    Your data stays with you. We don&apos;t track, store, or sell your information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="mt-20 text-center border-t pt-8">
          <div className="flex justify-center gap-8 text-muted-foreground mb-4">
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 BoostSir. Built with <Heart className="inline h-4 w-4 text-red-500" /> for productivity enthusiasts.
          </p>
        </footer>
      </div>
    </div>
  );
}
