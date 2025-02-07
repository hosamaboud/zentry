import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AnimatedTitle from '../Utils/AnimatedTitle';
import Button from '../Utils/Button';
import Svg from '../Story/Svg';

const Contact = () => {
  const imgRefs = useRef(new Array(3).fill(null));
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseHover = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;
      const rotateX = offsetY * -20;
      const rotateY = offsetX * 20;
      const s = 1 + Math.abs(offsetX) * 0.1;

      gsap.fromTo(
        imgRefs.current,
        {
          filter: `url(#flt_tag)`,
        },
        {
          scale: s,
          rotateX,
          rotateY,
          transformPerspective: 1200,
          transformOrigin: 'center center',
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    };

    if (container) {
      container.addEventListener('mousemove', handleMouseHover);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseHover);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#5724ff] flex flex-col items-center h-[130vh] md:h-auto overflow-hidden"
    >
      <Svg />

      {/* swordman image */}
      <div
        ref={(el) => (imgRefs.current[0] = el)}
        className="z-10 absolute top-0 md:top-10 md:-right-1"
      >
        <img
          className="top-0 z-10 h-[300px] md:h-auto md:w-[280px]"
          src="/img/swordman-partial.webp"
          alt="swordman"
        />
        <img
          className="z-0 h-[300px] md:h-auto sword-man-clip-path absolute top-0 right-0 md:w-[280px]"
          src="/img/swordman.webp"
          alt="swordman"
        />
      </div>

      {/* contact section */}
      <div className="h-[120vh] relative overflow-hidden bg-black my-10 md:h-[85vh] w-[95%] mx-auto grid justify-items-center md:content-center content-start rounded-3xl">
        <div className="z-40 mt-80 md:mt-0 text-blue-50 w-[55%]">
          <AnimatedTitle
            subtitle="Join Zentry"
            title={
              <>
                let’s b<b>u</b>ild the <br />
                new era of g<b>a</b>ming <br />t<b>o</b>gether.
              </>
            }
            style="!md:text-2xl text-xl z-40"
          />
        </div>
        <Button
          title='contact us'
          containerClass=" font-general z-40 px-7 py-3 mt-10 bg-blue-50"
        />

        {/* images of fire */}
        <div
          ref={(el) => (imgRefs.current[1] = el)}
          className="rounded-lg overflow-hidden hidden md:block contact-clip-path-1"
        >
          <img
            className="object-cover object-center w-[400px] h-[300px]"
            src="/img/contact-1.webp"
            alt="fire"
          />
        </div>

        <div
          ref={(el) => (imgRefs.current[2] = el)}
          className="contact-clip-path-2 z-0"
        >
          <img
            className="object-cover object-center w-[300px] h-[300px]"
            src="/img/contact-2.webp"
            alt="fire"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
