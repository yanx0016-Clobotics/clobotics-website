import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function Root() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
