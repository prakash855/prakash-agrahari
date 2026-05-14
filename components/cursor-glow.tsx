"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [point, setPoint] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-0 hidden size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/12 blur-3xl lg:block"
      style={{ left: point.x, top: point.y }}
    />
  );
}
