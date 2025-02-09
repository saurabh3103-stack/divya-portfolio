import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
    const [cursorVisible, setCursorVisible] = useState(false);

    useEffect(() => {
        const ball = document.getElementById("ball");
        const cursor = document.getElementById("magic-cursor");
        if (!ball || !cursor) return;

        let mouse = { x: 0, y: 0 };
        let pos = { x: 0, y: 0 };
        let ratio = 0.2; // Adjust smoothness

        // Set the initial styles for the ball
        gsap.set(ball, {
            xPercent: -50,
            yPercent: -50,
            width: 34,
            height: 34,
            borderWidth: 2,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.5)",
            position: "absolute",
            pointerEvents: "none",
        });

        const mouseMove = (e) => {
            setCursorVisible(true); // Show cursor when mouse moves
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const mouseLeave = () => {
            setCursorVisible(false); // Hide cursor when mouse leaves
        };

        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseleave", mouseLeave);

        gsap.ticker.add(() => {
            pos.x += (mouse.x - pos.x) * ratio;
            pos.y += (mouse.y - pos.y) * ratio;
            gsap.set(ball, { x: pos.x, y: pos.y });
        });

        return () => {
            document.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <>
            {/* Preloader Section */}
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="preloader__content text-center">
                            <div className="preloader__top-text d-flex align-items-center justify-content-between">
                                <p className="preloader__loading text-start">Loading</p>
                                <h2 id="tp-loading-number" className="text-end">0</h2>
                            </div>
                            <div id="tp-loading-bar" className="preloader__bar">
                                <div id="tp-loading-line" className="preloader__bar-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Magic Cursor - Smooth hide and show */}
            <div
                id="magic-cursor"
                style={{
                    opacity: cursorVisible ? 1 : 0,
                    visibility: cursorVisible ? "visible" : "hidden",
                    position: "fixed", // Fix the position
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    zIndex: 99999, // Ensures the cursor stays on top of all other content
                    width: "100%",
                    height: "100%",
                }}
            >
                <div id="ball" style={{ position: "absolute" }}></div>
            </div>
        </>
    );
};

export default Preloader;
