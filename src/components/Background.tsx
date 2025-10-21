"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Background({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [vel, setVel] = useState({ x: 1, y: 1 });
  const dvdRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frame: number;
    let x = pos.x;
    let y = pos.y;
    let vx = vel.x;
    let vy = vel.y;

    const speed = 0.8;
    const size = 120;

    // helper for collision detection
    const detectCollision = (
      nextX: number,
      nextY: number,
      w: number,
      h: number
    ) => {
      let collidedX = false;
      let collidedY = false;

      // Left or Right wall
      if (nextX <= 0 || nextX + size >= w) collidedX = true;

      // Top or Bottom wall
      if (nextY <= 0 || nextY + size >= h) collidedY = true;

      return { collidedX, collidedY };
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const nextX = x + vx * speed;
      const nextY = y + vy * speed;

      const { collidedX, collidedY } = detectCollision(nextX, nextY, w, h);

      if (collidedX) vx *= -1;
      if (collidedY) vy *= -1;

      x += vx * speed;
      y += vy * speed;

      setPos({ x, y });
      setVel({ x: vx, y: vy });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <img
        ref={dvdRef}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
        src="/logo.png"
        alt="Logo"
        className="size-24 rounded-full border-slate-400 border"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
