import React, { useEffect, useRef, useState } from 'react';

/**
 * Router tối giản dựa trên hash (#/duong-dan?x=1) — chạy được trên mọi hosting tĩnh
 * mà không cần cấu hình rewrite.
 */
const parse = () => {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const [path, query = ''] = raw.split('?');
  return { path: path || '/', query: Object.fromEntries(new URLSearchParams(query)) };
};

export function useRoute() {
  const [route, setRoute] = useState(parse);
  const pathRef = useRef(route.path);

  useEffect(() => {
    const onChange = () => {
      const next = parse();
      // Chỉ cuộn lên đầu khi đổi trang, không cuộn khi chỉ đổi bộ lọc (query)
      if (next.path !== pathRef.current) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      pathRef.current = next.path;
      setRoute(next);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export const href = (path, query) => {
  const qs = query ? new URLSearchParams(query).toString() : '';
  return `#${path}${qs ? `?${qs}` : ''}`;
};

export const navigate = (path, query) => {
  window.location.hash = href(path, query).slice(1);
};

export function Link({ to, query, children, ...rest }) {
  return (
    <a href={href(to, query)} {...rest}>
      {children}
    </a>
  );
}

// Danh sách trang — dùng chung cho Navbar và Footer
export const ROUTES = {
  home: '/',
  about: '/gioi-thieu',
  concepts: '/concept',
  pricing: '/bang-gia',
  gallery: '/bo-suu-tap',
  booking: '/dat-lich',
  contact: '/lien-he',
  admin: '/quan-ly',
};
