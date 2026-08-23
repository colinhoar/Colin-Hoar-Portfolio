import Header from "./components/Header/Header";
import About from "./components/About/About";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid";
import InterestGrid from "./components/InterestGrid/InterestGrid";
import Footer from "./components/Footer/Footer";

/**
 * App
 * ------------------------------------------------------------
 * Composes the page from independent section components, in
 * order: Header (intro) -> About -> Projects -> Interests -> Footer.
 * Reorder sections by reordering these lines.
 */
function App() {
  return (
    <>
      {/* Skip link for keyboard users to bypass the header nav */}
      <a href="#main-content" className="visually-hidden">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <About />
        <ProjectGrid />
        <InterestGrid />
      </main>

      <Footer />
    </>
  );
}

export default App;
