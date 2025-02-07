import { useEffect, useRef } from 'react';
import AnimatedTitle from '../Utils/AnimatedTitle';
import Button from '../Utils/Button';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Update = () => {
  const frameRef = useRef(null);
  const updateRef = useRef(null);
  const imgRefs = useRef([]);

  useEffect(() => {
    const textUpdate = updateRef.current;

    // Initialize ScrollTrigger
    const tl = () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: textUpdate,
          start: 'top 15%',
          end: '+=2000 center',
          toggleActions: 'play none none reverse',
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      const img = e.currentTarget;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;
      const rotateX = offsetY * -15;
      const rotateY = offsetX * 15;
      const scale = 0.95;

      gsap.to(img, {
        scale,
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformOrigin: 'center center',
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // Mouse leave handler
    const handleMouseLeave = (e) => {
      const img = e.currentTarget;
      gsap.to(img, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        transformPerspective: 1200,
        transformOrigin: 'center center',
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // Add event listeners to each image
    imgRefs.current.forEach((img) => {
      if (img) {
        img.addEventListener('mousemove', handleMouseMove);
        img.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    // Start animation for text update
    gsap.matchMedia().add('(min-width: 768px)', () => {
      tl();
    });

    // Cleanup function
    return () => {
      imgRefs.current.forEach((img) => {
        if (img) {
          img.removeEventListener('mousemove', handleMouseMove);
          img.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  return (
    <div ref={frameRef} className="relative py-10 md:py-28 bg-black text-white">
      <div className="mx-auto w-[90%] grid grid-cols-1 md:grid-cols-2">
        <div
          ref={updateRef}
          className="flex flex-col justify-center my-10 items-center md:justify-start md:items-start gap-5"
        >
          <AnimatedTitle
            title={
              <>
                Lat<b>e</b>st <br /> <b>u</b>pdates
              </>
            }
            subtitle="Stay updated with the latest news, events, and updates in our ecosystem. Be part of our universe's growth and evolution."
          />
          <Button
            title="read all news"
            containerClass="px-7 py-3 font-general text-black bg-[#5724ff]"
          />
        </div>
        <div className="row-span-4 flex flex-col gap-10">
          {[
            'gallery-2.webp',
            'gallery-3.webp',
            'gallery-1.webp',
            'gallery-4.webp',
            'gallery-5.webp',
          ].map((src, index) => (
            <img
              loading="lazy"
              key={index}
              ref={(el) => (imgRefs.current[index] = el)}
              className="h-[400px] cursor-pointer object-cover object-center rounded-lg border border-[#5724ff]"
              src={`/img/${src}`}
              alt="background image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Update;
