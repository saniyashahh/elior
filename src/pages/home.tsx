import { useState } from "react";
import Sidebar from "../components/sidebar";
import Hero from "../components/hero";
import MenuDisplay from "./menuDisplay";
import About from "./about";
import Contact from "./contact";
import Footer from "../components/footer";

type View = "home" | "menu" | "about" | "contact";

export default function Home() {
  const [activeView, setActiveView] = useState<View>("home");
  const [menuOpen, setMenuOpen] = useState(true);

  const handleNavigation = (view: View) => {
    setActiveView(view);

    // Always start the selected page at the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleExploreMenu = () => {
    handleNavigation("menu");
    setMenuOpen(true);
  };

  const handleFindUs = () => {
    handleNavigation("contact");
    setMenuOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#2C211C]">
      <Sidebar
        activeView={activeView}
        menuOpen={menuOpen}
        onNavigate={handleNavigation}
        onToggle={() => setMenuOpen((open) => !open)}
      />

      <section
        className={`min-h-screen transition-all duration-500 ${
          menuOpen ? "ml-[230px]" : "ml-[88px]"
        }`}
      >
        {activeView === "home" && (
          <Hero
            onExploreMenu={handleExploreMenu}
            onFindUs={handleFindUs}
          />
        )}

        {activeView === "menu" && <MenuDisplay />}

        {activeView === "about" && <About />}

        {activeView === "contact" && <Contact />}

        <Footer />
      </section>
    </main>
  );
}