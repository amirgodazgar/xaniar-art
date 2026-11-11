import { Outlet, useLocation } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export default function Layout() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        isContactPage
          ? "bg-cinema text-cinema-light"
          : "bg-canvas text-charcoal"
      }`}
    >
      <Navbar isDarkTheme={isContactPage} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer isDarkTheme={isContactPage} />
    </div>
  );
}
