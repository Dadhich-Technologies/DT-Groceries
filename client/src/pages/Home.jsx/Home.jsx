import { lazy, Suspense } from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import HeroSection from '../../components/Hero_Section/Hero_Section';
import Features from '../../components/Features_Section/Features';

// Lazy-loaded components
const Product = lazy(() => import('../../components/Products_section/Product'));
const Plan = lazy(() => import('../../components/Plan_Section/Plan'));
const Testimonials = lazy(() => import('../../components/Testimonials/Testimonials'));

const Home = () => {
  return (
    <>
      <Navbar bgcolor="" logocolor="primary-green" linkscolor="white" />

      <HeroSection />
      <Features />

      <Suspense fallback={<span>Loading...</span>}>
        <LazyLoadedComponent component={Product} />
        <LazyLoadedComponent component={Plan} />
        <LazyLoadedComponent component={Testimonials} />
      </Suspense>
    </>
  );
};

const LazyLoadedComponent = ({ component: Component }) => (
  <Suspense fallback={<span>Loading...</span>}>
    <Component />
  </Suspense>
);

export default Home;
