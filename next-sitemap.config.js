/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://boostsir.com",
  generateRobotsTxt: true,
  additionalPaths: async () => [
    // Hidebookmarks
    { loc: "/hidebookmarks", changefreq: "monthly", priority: 0.8 },
    // Framefill
    { loc: "/framefill", changefreq: "monthly", priority: 0.8 },
    // Mortgage Calculator
    { loc: "/mortgage-calculator", changefreq: "monthly", priority: 0.8 },
    // Schwab Tax Lot Extractor
    { loc: "/SchwabTaxLotExtractor", changefreq: "monthly", priority: 0.8 },
  ],
};