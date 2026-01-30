import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <div className="fixed inset-0 bg-white p-3 sm:p-4 flex flex-col font-sans">
      <Navigation />
      <div className="flex-1 rounded-[2.5rem] bg-forest-dark overflow-y-auto overflow-x-hidden relative scroll-smooth no-scrollbar">
        <Outlet />
        <Footer />
      </div>
    </div>
  ),
});
