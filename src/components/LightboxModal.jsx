import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ images, isOpen, initialIndex, onClose }) {
  const gallery = { images };
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex || 0);

  useEffect(() => {
    if (initialIndex !== undefined && initialIndex !== null) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const currentImage = gallery.images[currentIndex] || gallery.images[0];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.images.length) % gallery.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-10"
        aria-label="Đóng"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-10"
        aria-label="Ảnh trước"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-10"
        aria-label="Ảnh kế tiếp"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Image & Caption */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center text-center">
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
        />
        <div className="mt-4 text-white">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
            {currentImage.category} ({currentIndex + 1}/{gallery.images.length})
          </span>
          <h4 className="text-lg font-sans font-bold">
            {currentImage.title}
          </h4>
        </div>
      </div>
    </div>
  );
}

// Hook tiện dụng: trả về [mở lightbox tại vị trí idx, phần tử modal để render]
export function useLightbox(images) {
  const [state, setState] = React.useState({ open: false, index: 0 });
  const open = (index) => setState({ open: true, index });
  const element = (
    <LightboxModal
      images={images}
      isOpen={state.open && images.length > 0}
      initialIndex={state.index}
      onClose={() => setState((s) => ({ ...s, open: false }))}
    />
  );
  return [open, element];
}
