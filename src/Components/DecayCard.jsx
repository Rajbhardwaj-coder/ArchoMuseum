'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DecayCard = ({
  width = 300,
  height = 400,
  image = 'https://picsum.photos/300/400?grayscale',
  children,
}) => {
  const svgRef = useRef(null);
  const displacementMapRef = useRef(null);
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cachedCursor = useRef({ ...cursor.current });
  const winsize = useRef({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    // Disable motion on mobile devices for better experience
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // On mobile, do not add motion event listeners or animation
      return;
    }

    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
    const distance = (x1, x2, y1, y2) => Math.hypot(x1 - x2, y1 - y2);

    const handleResize = () => {
      winsize.current = { width: window.innerWidth, height: window.innerHeight };
    };

    const handleMouseMove = (ev) => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    const handleTouchMove = (ev) => {
      if (ev.touches && ev.touches.length > 0) {
        cursor.current = { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
        // console.log('Touch move:', cursor.current);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0,
    };

    const render = () => {
      let targetX = lerp(
        imgValues.imgTransforms.x,
        map(cursor.current.x, 0, winsize.current.width, -120, 120),
        0.07 // smoother
      );
      let targetY = lerp(
        imgValues.imgTransforms.y,
        map(cursor.current.y, 0, winsize.current.height, -120, 120),
        0.07
      );
      let targetRz = lerp(
        imgValues.imgTransforms.rz,
        map(cursor.current.x, 0, winsize.current.width, -10, 10),
        0.07
      );

      const bound = 50;
      if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
      if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
      if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
      if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      if (svgRef.current) {
        gsap.set(svgRef.current, {
          x: imgValues.imgTransforms.x,
          y: imgValues.imgTransforms.y,
          rotateZ: imgValues.imgTransforms.rz,
          ease: 'power2.out',
        });
      }

      const cursorTravelledDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );

      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        Math.min(map(cursorTravelledDistance, 0, 200, 0, 600), 600), // increased scale for mobile visibility
        0.08 // slower lerp for softer response
      );

      if (displacementMapRef.current) {
        gsap.set(displacementMapRef.current, {
          attr: { scale: imgValues.displacementScale },
          ease: 'power2.out',
        });
      }

      cachedCursor.current = { ...cursor.current };

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={svgRef}
      className="relative rounded-xl overflow-hidden shadow-lg transform-gpu will-change-transform group mx-auto"
      style={{ width: '100%', height: 'auto', maxWidth: `${width}px`, maxHeight: `${height}px` }}
    >
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="relative w-full h-auto block bg-orange-300 will-change-transform transform-gpu"
        style={{ maxHeight: `${height}px` }}
      >
        <filter id="imgFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.01"
            numOctaves="2"
            seed="2"
            stitchTiles="stitch"
            result="turbulence1"
          />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence1"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displacementMap3"
          />
        </filter>
        <g>
          <image
            href={image}
            x="0"
            y="0"
            width="600"
            height="750"
            filter="url(#imgFilter)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="absolute bottom-6 left-4 tracking-tight font-black text-[1.5rem] leading-tight text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] pointer-events-none group-hover:opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 opacity-100">
        {children}
      </div>
    </div>
  );
};

export default DecayCard;
