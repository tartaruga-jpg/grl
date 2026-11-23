import { useEffect, useRef } from "react";

/**
 * Robust scroll reveal hook.
 * Sets both class "visible" and attribute "data-revealed=true"
 * so React state re-renders can never accidentally wipe it out.
 */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const makeVisible = () => {
      el.classList.add("visible");
      el.setAttribute("data-revealed", "true");
    };

    // If element is already in or near viewport on mount, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 100) {
      makeVisible();
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          makeVisible();
          obs.unobserve(el);
        }
      },
      { threshold: 0.01, rootMargin: "60px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
