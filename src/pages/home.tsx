import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Hero from "../components/hero";
import MenuDisplay from "./menuDisplay";
import About from "./about";
import Contact from "./contact";
import Footer from "../components/footer";

type View = "home" | "menu" | "about" | "contact";

export default function Home() {
  const [activeView, setActiveView] = useState<View>("home");
  const [menuOpen, setMenuOpen] = useState(
    () => window.innerWidth >= 768
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  const sidebarWidth = menuOpen ? "lg:ml-[230px]" : "lg:ml-[88px]";
  const pageWidth = menuOpen
    ? "lg:w-[calc(100%_-_230px)]"
    : "lg:w-[calc(100%_-_88px)]";

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F5EFE6] text-[#2C211C]">
      <Sidebar
        activeView={activeView}
        menuOpen={menuOpen}
        onNavigate={setActiveView}
        onToggle={() => setMenuOpen((open) => !open)}
      />

      <section
        className={`min-h-screen w-full pt-[72px] transition-all duration-500 md:pt-0 ${sidebarWidth} ${pageWidth}`}
      >
        {activeView === "home" && (
          <Hero
            onExploreMenu={() => setActiveView("menu")}
            onFindUs={() => setActiveView("contact")}
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