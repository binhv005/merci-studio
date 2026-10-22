import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConceptsPage from './pages/ConceptsPage';
import ConceptDetailPage from './pages/ConceptDetailPage';
import PricingPage from './pages/PricingPage';
import GalleryPage from './pages/GalleryPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import { useRoute, ROUTES } from './lib/router';

const TITLES = {
  [ROUTES.about]: 'Giới thiệu',
  [ROUTES.concepts]: 'Danh sách concept',
  [ROUTES.pricing]: 'Bảng giá theo gói',
  [ROUTES.gallery]: 'Bộ sưu tập ảnh',
  [ROUTES.booking]: 'Đặt lịch chụp',
  [ROUTES.contact]: 'Liên hệ',
  [ROUTES.admin]: 'Quản lý đặt lịch',
};

function renderPage({ path, query }) {
  if (path === ROUTES.home) return <HomePage />;
  if (path === ROUTES.about) return <AboutPage />;
  if (path === ROUTES.concepts) return <ConceptsPage query={query} />;
  if (path.startsWith(`${ROUTES.concepts}/`)) return <ConceptDetailPage slug={path.slice(ROUTES.concepts.length + 1)} />;
  if (path === ROUTES.pricing) return <PricingPage />;
  if (path === ROUTES.gallery) return <GalleryPage query={query} />;
  if (path === ROUTES.booking) return <BookingPage query={query} />;
  if (path === ROUTES.contact) return <ContactPage />;
  if (path === ROUTES.admin) return <AdminPage />;
  return <NotFoundPage />;
}

export default function App() {
  const route = useRoute();
  const isAdmin = route.path === ROUTES.admin;

  // Always scroll to top when page reloads / mounts
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const page = TITLES[route.path];
    document.title = page ? `${page} | MERCI studio` : 'MERCI studio | Tiệm chụp ảnh concept tại Hồ Chí Minh';
  }, [route.path]);

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-ink-950 text-ink-950 font-sans selection:bg-amber-500 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar path={route.path} overHero={route.path === ROUTES.home} />

      {/* Main Content — key theo trang để hiệu ứng ScrollReveal chạy lại khi đổi trang */}
      <main key={route.path}>{renderPage(route)}</main>

      {/* Footer */}
      <Footer />

      {/* Floating Zalo / Messenger / Đặt lịch */}
      {!isAdmin && <FloatingCTA />}
    </div>
  );
}
