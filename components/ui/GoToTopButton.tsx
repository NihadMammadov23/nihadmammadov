"use client";

import { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reloadPageToTop = () => {
    window.location.href = window.location.pathname;
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
