"use client";

import React, { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function Spotlight() {
  const { x, y } = useMousePosition();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-all duration-300 lg:absolute spotlight-glow"
      style={{
        "--mouse-x": `${x}px`,
        "--mouse-y": `${y}px`,
      } as React.CSSProperties}
    />
  );
}
