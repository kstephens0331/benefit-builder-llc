import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Home from "./pages/Home";
import { getAllSlugs } from "./lib/blog/posts";
import { getAllStatePaths, getAllCityPaths } from "./lib/locations/locations";

const lazyDefault = (loader: () => Promise<{ default: React.ComponentType }>) =>
  async () => ({ Component: (await loader()).default });

const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      { index: true, element: <Home />, entry: "src/pages/Home.tsx" },
      { path: "services", lazy: lazyDefault(() => import("./pages/Services")) },
      { path: "services/employers", lazy: lazyDefault(() => import("./pages/services/Employers")) },
      { path: "services/brokers", lazy: lazyDefault(() => import("./pages/services/Brokers")) },
      { path: "platform", lazy: lazyDefault(() => import("./pages/Platform")) },
      { path: "savings-calculator", lazy: lazyDefault(() => import("./pages/SavingsCalculator")) },
      { path: "compliance", lazy: lazyDefault(() => import("./pages/Compliance")) },
      { path: "about", lazy: lazyDefault(() => import("./pages/About")) },
      { path: "partners", lazy: lazyDefault(() => import("./pages/Partners")) },
      { path: "contact", lazy: lazyDefault(() => import("./pages/Contact")) },
      { path: "legal/privacy", lazy: lazyDefault(() => import("./pages/legal/Privacy")) },
      { path: "legal/terms", lazy: lazyDefault(() => import("./pages/legal/Terms")) },
      { path: "blog", lazy: lazyDefault(() => import("./pages/blog/BlogList")) },
      {
        path: "blog/:slug",
        lazy: lazyDefault(() => import("./pages/blog/BlogPost")),
        getStaticPaths: () => getAllSlugs().map((s) => `/blog/${s}`),
      },
      { path: "locations", lazy: lazyDefault(() => import("./pages/locations/LocationsHub")) },
      {
        path: "locations/:state",
        lazy: lazyDefault(() => import("./pages/locations/StatePage")),
        getStaticPaths: () => getAllStatePaths(),
      },
      {
        path: "locations/:state/:city",
        lazy: lazyDefault(() => import("./pages/locations/CityPage")),
        getStaticPaths: () => getAllCityPaths(),
      },
      // Explicit "/404" so vite-react-ssg prerenders dist/404/index.html.
      // We post-process this into dist/404.html so Caddy can serve it with HTTP 404.
      { path: "404", lazy: lazyDefault(() => import("./pages/NotFound")) },
      { path: "*", lazy: lazyDefault(() => import("./pages/NotFound")) },
    ],
  },
];

export default routes;
