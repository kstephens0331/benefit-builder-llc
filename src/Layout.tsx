import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnalyticsProvider from "./lib/analytics/AnalyticsProvider";

export default function Layout() {
  return (
    <AnalyticsProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AnalyticsProvider>
  );
}
