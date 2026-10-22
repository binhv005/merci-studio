import React, { useMemo, useState } from 'react';
import { Search, Download, Trash2, Phone, Inbox, CalendarDays, Clock, Info, MessageCircle } from 'lucide-react';
import { ZaloIcon } from '../components/common/BrandIcons';
import { getBookings, updateBooking, removeBooking, STATUSES, statusOf, formatDate } from '../lib/bookingStore';

const formatDateTime = (iso) => new Date(iso).toLocaleString('vi-VN', { dateStyle: 'short', timeStyle: 'short' });

// Xuất CSV (UTF-8 có BOM để Excel đọc đúng tiếng Việt)
const exportCsv = (rows) => {
  const header = ['Mã', 'Ngày gửi', 'Họ tên', 'SĐT', 'Liên hệ qua', 'Concept', 'Gói', 'Ngày chụp', 'Giờ', 'Số người', 'Ghi chú', 'Trạng thái', 'Ghi chú nội bộ'];
  const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const lines = rows.map((b) =>
    [b.id, formatDateTime(b.createdAt), b.fullName, b.phone, b.channel, b.conceptName, b.packageName, formatDate(b.shootDate), b.timeSlot, b.people, b.notes, statusOf(b.status).label, b.staffNote]
      .map(cell)
      .join(',')
  );
  const blob = new Blob([`﻿${[header.map(cell).join(','), ...lines].join('\n')}`], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `merci-dat-lich-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

export default function AdminPage() {
  const [bookings, setBookings] = useState(getBookings);
  const [status, setStatus] = useState('all');
  const [keyword, setKeyword] = useState('');

  const refresh = () => setBookings(getBookings());

  const changeStatus = (id, value) => {
    updateBooking(id, { status: value });
    refresh();
  };

  const saveNote = (id, value) => {
    updateBooking(id, { staffNote: value });
    refresh();
  };

  const remove = (b) => {
    if (window.confirm(`Xóa yêu cầu ${b.id} của ${b.fullName}?`)) {
      removeBooking(b.id);
      refresh();
    }
  };

  const filtered = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return bookings.filter(
      (b) =>
        (status === 'all' || b.status === status) &&
        (!q || [b.id, b.fullName, b.phone, b.conceptName].some((v) => v?.toLowerCase().includes(q)))
    );
  }, [bookings, status, keyword]);

  const countOf = (id) => bookings.filter((b) => b.status === id).length;

  return (
    <section className="min-h-screen bg-cream-100 pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="font-script text-2xl text-amber-600 font-bold">MERCI studio</p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-ink-950 tracking-tight">Quản lý yêu cầu đặt lịch</h1>
          </div>
          <button
            type="button"
            onClick={() => exportCsv(filtered)}
            disabled={filtered.length === 0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 hover:bg-ink-800 text-white text-sm font-bold transition-colors disabled:opacity-40"
          >
            <Download className="w-4 h-4" />
            Xuất Excel (CSV)
          </button>
        </div>

        <p className="flex items-start gap-2 text-xs text-ink-700 bg-white border border-cream-300 rounded-2xl px-4 py-3 mb-6">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-px" />
          <span>
            Bản demo: yêu cầu đặt lịch đang được lưu trên trình duyệt này. Để nhân viên xem chung từ nhiều máy và bảo vệ bằng đăng nhập,
            cần kết nối backend/API (thay các hàm trong <code className="font-mono">src/lib/bookingStore.js</code>).
          </span>
        </p>

        {/* Thống kê theo trạng thái — bấm để lọc */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3 mb-6">
          {[{ id: 'all', label: 'Tất cả', className: 'bg-white text-ink-900 border-cream-300' }, ...STATUSES].map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStatus(s.id)}
              className={`rounded-2xl border px-3 py-3 text-left transition-all ${s.className} ${
                status === s.id ? 'ring-2 ring-amber-500 shadow-card' : 'hover:shadow-soft'
              }`}
            >
              <span className="block text-2xl font-extrabold leading-none mb-1">
                {s.id === 'all' ? bookings.length : countOf(s.id)}
              </span>
              <span className="block text-[11px] font-bold uppercase tracking-wider">{s.label}</span>
            </button>
          ))}
        </div>

        <div className="relative mb-5">
          <Search className="w-4 h-4 text-ink-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Tìm theo mã, tên, số điện thoại hoặc concept…"
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-3xl border border-cream-200 py-16 text-center text-ink-600">
            <Inbox className="w-10 h-10 mx-auto mb-3 text-amber-400" />
            <p className="font-bold text-ink-900">Chưa có yêu cầu nào</p>
            <p className="text-sm">Yêu cầu gửi từ trang Đặt lịch sẽ xuất hiện tại đây.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((b) => {
              const st = statusOf(b.status);
              const zaloPhone = b.phone.replace(/\D/g, '');
              return (
                <article key={b.id} className="bg-white rounded-3xl border border-cream-200 shadow-soft p-4 sm:p-5">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    {/* Thông tin khách */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="font-mono text-xs font-bold text-amber-700">{b.id}</span>
                        <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-bold ${st.className}`}>{st.label}</span>
                        <span className="text-[11px] text-ink-500">Gửi lúc {formatDateTime(b.createdAt)}</span>
                      </div>
                      <h2 className="text-lg font-extrabold text-ink-950">{b.fullName}</h2>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-800 mt-1">
                        <span><strong>Concept:</strong> {b.conceptName}</span>
                        <span><strong>Gói:</strong> {b.packageName}</span>
                        <span className="inline-flex items-center gap-1"><CalendarDays className="w-4 h-4 text-amber-600" />{formatDate(b.shootDate)}</span>
                        <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4 text-amber-600" />{b.timeSlot}</span>
                        <span>{b.people} người</span>
                        <span>Liên hệ qua: <strong>{b.channel}</strong></span>
                      </div>
                      {b.notes && <p className="text-sm text-ink-700 mt-2 bg-cream-100 rounded-xl px-3 py-2">“{b.notes}”</p>}
                      <input
                        type="text"
                        defaultValue={b.staffNote || ''}
                        onBlur={(e) => e.target.value !== (b.staffNote || '') && saveNote(b.id, e.target.value)}
                        placeholder="Ghi chú nội bộ (tự lưu khi rời ô)…"
                        className="w-full mt-3 px-3 py-2 rounded-xl border border-dashed border-cream-400 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    {/* Thao tác */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:w-48 shrink-0">
                      <select
                        value={b.status}
                        onChange={(e) => changeStatus(b.id, e.target.value)}
                        className="w-full sm:flex-1 lg:flex-none px-3 py-2 rounded-xl border border-cream-300 bg-cream-50 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-500"
                        aria-label="Trạng thái"
                      >
                        {STATUSES.map((s) => (
                          <option key={s.id} value={s.id}>{s.label}</option>
                        ))}
                      </select>
                      <div className="flex gap-2 sm:w-56 lg:w-auto">
                        <a href={`tel:${zaloPhone}`} className="flex-1 h-9 rounded-xl bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center" aria-label="Gọi khách" title={`Gọi ${b.phone}`}>
                          <Phone className="w-4 h-4" />
                        </a>
                        <a href={`https://zalo.me/${zaloPhone}`} target="_blank" rel="noopener noreferrer" className="flex-1 h-9 rounded-xl bg-[#0068ff] hover:bg-[#0056d6] text-white flex items-center justify-center" aria-label="Nhắn Zalo khách" title="Nhắn Zalo">
                          <ZaloIcon className="w-7 h-7" />
                        </a>
                        <a href={`sms:${zaloPhone}`} className="flex-1 h-9 rounded-xl bg-ink-900 hover:bg-ink-800 text-white flex items-center justify-center" aria-label="Nhắn SMS khách" title="Nhắn SMS">
                          <MessageCircle className="w-4 h-4" />
                        </a>
                        <button type="button" onClick={() => remove(b)} className="flex-1 h-9 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 flex items-center justify-center" aria-label="Xóa yêu cầu" title="Xóa">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
