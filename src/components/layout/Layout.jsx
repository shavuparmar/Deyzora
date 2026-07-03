import { Outlet, useLocation } from'react-router-dom';
import { AnimatePresence } from'framer-motion';
import Navbar from'./Navbar';
import Footer from'./Footer';
import InitialLoader from'../ui/InitialLoader';
import OfferPopup from'../ui/OfferPopup';
import PageTransition from'./PageTransition';

const PremiumBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
    {/* Subtle Grid */}
    <div className="absolute inset-0 bg-grid-subtle opacity-40" />
    
    {/* Floating Orbs (Mesh Gradient Simulation) */}
    <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-white/5 blur-[120px] mix-blend-screen animate-blob" />
    <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-500/10 blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
    <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-purple-500/10 blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
    
    {/* Moving Spotlight */}
    <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] spotlight animate-spotlight opacity-50 mix-blend-screen" />
  </div>
);

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <InitialLoader />
      <OfferPopup />
      <div className="min-h-screen flex flex-col relative">
        <PremiumBackground />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
