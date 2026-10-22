import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal - Performant, GPU-accelerated scroll reveal component
 * Triggers animations when elements scroll into the viewport and resets smoothly on scroll away.
 */
export default function ScrollReveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
  delay = 0,
  duration = 650,
  distance = 36,
  threshold = 0.1,
  className = '',
  as: Component = 'div',
  style = {},
  once = false,
  ...rest
}) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  // Compute hidden transform based on direction
  const getHiddenTransform = () => {
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(${distance}px, 0, 0)`;
      case 'zoom':
        return 'scale(0.92)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const dynamicStyles = {
    ...style,
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translate3d(0, 0, 0) scale(1)' : getHiddenTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: isInView ? `${delay}ms` : '0ms',
    willChange: 'opacity, transform',
  };

  return (
    <Component
      ref={elementRef}
      className={className}
      style={dynamicStyles}
      {...rest}
    >
      {children}
    </Component>
  );
}
