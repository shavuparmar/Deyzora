import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <SEO title="404 - Page Not Found | Deyzora Infotech" />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)]">
        <h1 className="text-9xl font-bold text-[var(--color-accent)] mb-4">404</h1>
        <h2 className="text-2xl text-[var(--color-foreground)] mb-8">Page Not Found</h2>
        <Link to="/" className="px-8 py-3 rounded-full bg-[var(--color-accent)] hover:opacity-90 text-white font-medium transition-all">
          Return Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
