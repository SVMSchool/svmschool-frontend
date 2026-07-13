import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NewNavbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function MainLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="app-layout">
      <NewNavbar />
      <main className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
