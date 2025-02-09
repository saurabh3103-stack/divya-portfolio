import React, { useEffect } from "react";
import gsap from "gsap";

const MagicCursor = () => {
  useEffect(() => {
    const ball = document.getElementById("ball");
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const ratio = 0.15;
    let active = false;

    gsap.set(ball, {
      xPercent: -50,
      yPercent: -50,
      width: 34,
      height: 34,
      borderWidth: 2,
      opacity: 1,
    });

    const mouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document.addEventListener("mousemove", mouseMove);

    gsap.ticker.add(() => {
      if (!active) {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;
        gsap.set(ball, { x: pos.x, y: pos.y });
      }
    });

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div id="magic-cursor">
      <div id="ball"></div>
    </div>
  );
};

export default MagicCursor;
