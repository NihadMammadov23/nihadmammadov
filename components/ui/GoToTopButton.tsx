"use client";

import { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setVisible(window.scrollY > 200);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const reloadPageToTop = () => {
    // Reload the whole page (this will reset scroll to top)
    if (typeof window !== "undefined") {
      window.location.href = window.location.pathname;
    }
    // or use window.location.reload(); but this reloads current URL with hash
  };

  if (!visible) return null;

  return (
    <button
      onClick={reloadPageToTop}
      aria-label="Go to top"
      className="fixed bottom-8 right-8 z-50 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transition"
      style={{ width: "48px", height: "48px" }}
    >
      ↑
    </button>
  );
};

export default GoToTopButton;
