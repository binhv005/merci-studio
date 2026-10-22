import React from 'react';
import { Link, ROUTES } from '../lib/router';

export default function NotFoundPage() {
  return (
    <section className="min-h-[80vh] bg-cream-100 flex items-center justify-center px-4 pt-24 text-center">
      <div>
        <p className="font-display text-7xl text-amber-200 mb-2">404</p>
        <h1 className="font-script text-5xl text-amber-600 font-bold mb-3">Không tìm thấy trang</h1>
        <p className="text-ink-700 mb-6">Trang bạn tìm có thể đã được đổi tên hoặc không còn tồn tại.</p>
        <Link
          to={ROUTES.home}
          className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm shadow-md"
        >
          Về trang chủ
        </Link>
      </div>
    </section>
  );
}
