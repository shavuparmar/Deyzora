import { motion } from'framer-motion';
import { useLocation } from'react-router-dom';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
    filter:"blur(4px)"
  },
  enter: {
    opacity: 1,
    y: 0,
    filter:"blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      when:"beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    filter:"blur(4px)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="w-full h-full min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
