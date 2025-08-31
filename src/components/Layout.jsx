import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-sand text-charcoal">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-10">{children}</main>
      <Footer />
    </div>
  );
}
