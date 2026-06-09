const SITE = process.env.LHCI_BASE_URL || "http://localhost:4173";

const ROUTES = [
  "/",
  "/services",
  "/services/employers",
  "/services/brokers",
  "/platform",
  "/savings-calculator",
  "/compliance",
  "/about",
  "/partners",
  "/contact",
  "/legal/privacy",
  "/legal/terms",
];

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run preview",
      url: ROUTES.map((p) => `${SITE}${p}`),
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 1.0 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./.lhci",
    },
  },
};
