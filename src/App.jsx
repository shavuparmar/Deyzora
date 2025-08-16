import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./Utility/LoadingPage";
import AboutPage from "./Pages/AboutPage";
import SitemapSection from "./Common/SiteMap";
import ContactPage from "./Pages/ContactPage";
import ServicePage from "./Pages/ServicePage";

// Lazy-loaded pages
// const Homepage = lazy(() => import("./Pages/HomePage"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sitemap" element={<SitemapSection />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
