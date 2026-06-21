import { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Loader from './components/Loader.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const PMVikas = lazy(() => import('./pages/PMVikas.jsx'));
const Tinkercad = lazy(() => import('./pages/Tinkercad.jsx'));
const Resume = lazy(() => import('./pages/Resume.jsx'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/pmvikas" element={<Page><PMVikas /></Page>} />
          <Route path="/tinkercad" element={<Page><Tinkercad /></Page>} />
          <Route path="/resume" element={<Page><Resume /></Page>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AnimatedRoutes />
    </Suspense>
  );
}
