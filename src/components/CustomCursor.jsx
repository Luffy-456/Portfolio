// components/CustomCursor.jsx
import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorTailRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let tailX = 0;
    let tailY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // main cursor follows instantly
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
    };

    // smooth trailing animation
    const animateTail = () => {
      tailX += (mouseX - tailX) * 0.12;
      tailY += (mouseY - tailY) * 0.12;

      if (cursorTailRef.current) {
        cursorTailRef.current.style.left = `${tailX}px`;
        cursorTailRef.current.style.top = `${tailY}px`;
      }

      requestAnimationFrame(animateTail);
    };

    animateTail();

    // hover effect
    const addHoverEffect = () => {
      cursorRef.current?.classList.add("cursor-hover");
      cursorTailRef.current?.classList.add("cursor-tail-hover");
    };

    const removeHoverEffect = () => {
      cursorRef.current?.classList.remove("cursor-hover");
      cursorTailRef.current?.classList.remove("cursor-tail-hover");
    };

    const hoverElements = document.querySelectorAll(
      "a, button, input, textarea, .hover-target"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={cursorTailRef} className="cursor-tail" />
    </>
  );
};