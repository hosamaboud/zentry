import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ subtitle, title, style }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const element = titleRef.current;

    gsap.fromTo(
      element,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: element,
          start: 'top 100%',
          end: 'top 70%',
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <p className=" w-[200px] text-center mb-4 text-sm font-general uppercase md:text-[10px]">
        {subtitle}
      </p>
      <div className={`relative text-center  ${style}`}>
        <h1
          ref={titleRef}
          className="special-font hero-heading opacity-0 -translate-x-full"
        >
          {title}
        </h1>
      </div>
    </>
  );
};

export default AnimatedTitle;
