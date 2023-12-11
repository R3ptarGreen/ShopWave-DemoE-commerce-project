import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import App from '../App';
import {
  AboutPage,
  HomePage,
  LoginPage,
  ContactPage,
  CoomingSoonPage,
} from '../pages/index';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/ShopWave-DemoE-commerce-project"
          element={
            <>
              <App />
              <ScrollToTop />
            </>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/ShopWave-DemoE-commerce-project/shop" element={<CoomingSoonPage />} />
        <Route path="/ShopWave-DemoE-commerce-project/pay" element={<CoomingSoonPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
