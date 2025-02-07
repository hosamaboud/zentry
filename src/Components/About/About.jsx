import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useCallback, useEffect } from 'react';
import AnimatedTitle from '../Utils/AnimatedTitle';
import AboutContent from './AboutContent';
import ClipAnimation from './ClipAnimation';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const clipRef = useRef(null);
  const clipImageRef = useRef(null);
  const aboutImageRef = useRef(null);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=500 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100%',
      height: '100%',
      borderRadius: 0,
      rotate: 0,
    });
  });

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;

    const imageElement = aboutImageRef.current;
    const imageWidth = imageElement.offsetWidth;
    const imageHeight = imageElement.offsetHeight;

    if (
      imageWidth < window.innerWidth * 0.9 ||
      imageHeight < window.innerHeight * 0.9
    ) {
      gsap.to(clipRef.current, {
        rotateX: deltaY * -15,
        rotateY: deltaX * 15,
        duration: 0.5,
        overwrite: true,
        ease: 'power2.out',
        transformPerspective: 800,
      });
      gsap.to(clipImageRef.current, {
        rotateX: deltaY * -12,
        rotateY: deltaX * 12,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 800,
      });
    } else {
      gsap.to(clipRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(clipImageRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);

  useEffect(() => {
    const throttle = (callback, limit) => {
      let waiting = false;
      return (...args) => {
        if (!waiting) {
          callback(...args);
          waiting = true;
          setTimeout(() => (waiting = false), limit);
        }
      };
    };

    const throttledMouseMove = throttle(handleMouseMove, 50);
    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div id="about" className="w-screen h-[1330px] md:h-[1450px] overflow-hidden">
      <div className="relative mt-36 flex flex-col items-center gap-5 ">
        <AnimatedTitle
          subtitle="welcome to Zentry"
          title={
            <>
              Disc<b>o</b>ver the world's largest <br /> shared <b>a</b>dventure
            </>
          }
          style={'text-3xl md:text-2xl  mt-5'}
        />

        <ClipAnimation
          clipRef={clipRef}
          clipImageRef={clipImageRef}
          aboutImageRef={aboutImageRef}
        />
      </div>
      <AboutContent />
    </div>
  );
};

export default About;
