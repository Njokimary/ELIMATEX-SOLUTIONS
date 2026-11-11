"use client";

import { useEffect, useRef, useState } from "react";

// Fades its children in when they scroll into view.
type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds
};

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect(); // clean up when the component unmounts
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
