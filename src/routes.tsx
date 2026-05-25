import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Home from "./pages/Home";

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
      // Explicit "/404" so vite-react-ssg prerenders dist/404/index.html.
      // We post-process this into dist/404.html so Caddy can serve it with HTTP 404.
      { path: "404", lazy: lazyDefault(() => import("./pages/NotFound")) },
      { path: "*", lazy: lazyDefault(() => import("./pages/NotFound")) },
    ],
  },
];

export default routes;
