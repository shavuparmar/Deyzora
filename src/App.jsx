import React, { lazy, Suspense, useState } from 'react';
import Loader from './components/layout/Loader';

// Lazy-load the main LandingPage component for code-splitting and faster initial page loads
const LandingPage = lazy(() => import('./pages/LandingPage'));

/**
 * Root Application Component implementing Code Splitting, Suspense, and a premium Preloader.
 */
export default function App() {
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);

  return (
    <>
      {/* Premium preloader startup screen */}
      <Loader onFinished={() => setIsLoaderFinished(true)} />

      {/* Render main page dynamically with code-splitting support */}
      <Suspense fallback={null}>
        {isLoaderFinished && <LandingPage />}
      </Suspense>
    </>
  );
}
