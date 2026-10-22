/**
 * Lưu yêu cầu đặt lịch trong localStorage của trình duyệt.
 * Đây là bản demo phía client — khi có backend, thay các hàm dưới đây bằng lời gọi API
 * (giữ nguyên chữ ký hàm để các trang không phải sửa).
 */
const KEY = 'merci_bookings';

export const STATUSES = [
  { id: 'new', label: 'Mới', className: 'bg-amber-100 text-amber-800 border-amber-200' },
  { id: 'contacted', label: 'Đã liên hệ', className: 'bg-sky-50 text-sky-700 border-sky-200' },
  { id: 'confirmed', label: 'Đã xác nhận', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { id: 'done', label: 'Hoàn thành', className: 'bg-ink-100 text-ink-800 border-ink-200' },
  { id: 'cancelled', label: 'Đã hủy', className: 'bg-rose-50 text-rose-700 border-rose-200' },
];

export const statusOf = (id) => STATUSES.find((s) => s.id === id) || STATUSES[0];

// "2026-10-27" -> "27/10/2026"
export const formatDate = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.slice(0, 10).split('-');
  return `${d}/${m}/${y}`;
};

const read = () => {
  try {
    const list = JSON.parse(window.localStorage.getItem(KEY) || '[]');
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
};

const write = (list) => {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
};

export const getBookings = () => read().sort((a, b) => b.createdAt.localeCompare(a.createdAt));

export const addBooking = (data) => {
  const booking = {
    ...data,
    id: `MS${Date.now().toString(36).toUpperCase()}`,
    status: 'new',
    createdAt: new Date().toISOString(),
  };
  write([booking, ...read()]);
  return booking;
};

export const updateBooking = (id, patch) => {
  write(read().map((b) => (b.id === id ? { ...b, ...patch } : b)));
};

export const removeBooking = (id) => {
  write(read().filter((b) => b.id !== id));
};
