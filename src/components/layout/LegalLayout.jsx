import { useEffect } from'react';
import { motion } from'framer-motion';
import { ArrowLeft } from'lucide-react';
import { Link } from'react-router-dom';
import SEO from'../SEO';
import FinalCTA from'../sections/FinalCTA';

const LegalLayout = ({ title, icon: Icon, description, lastUpdated, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 bg-black min-h-screen">
      <SEO title={`${title} | Deyzora Infotech`} description={description} />
      
      <div className="container mx-auto px-6 max-w-4xl pb-24">
        {/* Breadcrumbs */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        {/* Hero */}
        <div className="mb-12 border-b border-white/10 pb-8">
          {Icon && <Icon className="w-12 h-12 text-primary mb-6" />}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight"
          >
            {title}
          </motion.h1>
          <p className="text-gray-400 text-lg">Last updated: {lastUpdated}</p>
        </div>

        {/* Prose Content */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8 prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary-dark">
          {children}
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};

export default LegalLayout;
