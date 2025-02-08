import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useEffect, useState } from 'react';
import AnimatedTitle from '../Utils/AnimatedTitle';
import AboutContent from './AboutContent';
import ClipAnimation from './ClipAnimation';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const clipRef = useRef(null);
  const clipImageRef = useRef(null);
  const aboutImageRef = useRef(null);
  const [disableMouseMove, setDisableMouseMove] = useState(false);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=300 center',
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

  useEffect(() => {
    const clip = clipRef.current;
    const clipImage = clipImageRef.current;

    const handleMouseMove = (e) => {
      if (disableMouseMove) return;

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;
      const rotateX = offsetY * -20;
      const rotateY = offsetX * 20;
      const s = 1 + Math.abs(offsetX) * 0.1;

      gsap.to([clip, clipImage], {
        rotateX,
        rotateY,
        scale: s,
        transformPerspective: 1200,
        transformOrigin: 'center center',
        duration: 0.5,
        ease: 'power2.out',
      });
    };
    // check if the image is ending
    const observer = new MutationObserver(() => {
      const { width, height } = clipImage.getBoundingClientRect();
      const parentWidth = clip.clientWidth;
      const parentHeight = clip.clientHeight;

      if (width >= parentWidth && height >= parentHeight) {
        setDisableMouseMove(true);
        // reset animation state
        gsap.to([clip, clipImage], {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.1,
          ease: 'power2.out',
        });
      } else {
        setDisableMouseMove(false);
      }
    });

    if (clipImage) {
      observer.observe(clipImage, {
        attributes: true,
        attributeFilter: ['style'],
      });
    }

    if (clip) {
      clip.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (clip) {
        clip.removeEventListener('mousemove', handleMouseMove);
      }
      if (clipImage) {
        observer.disconnect();
      }
    };
  }, [disableMouseMove]);

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
        <AnimatedTitle
          subtitle="welcome to Zentry"
          title={
            <>
              Disc<b>o</b>ver the world's largest <br /> shared <b>a</b>dventure
            </>
          }
          style={'text-3xl md:text-2xl mt-5'}
        />

        <AboutContent />
      </div>
      <ClipAnimation
        clipRef={clipRef}
        clipImageRef={clipImageRef}
        aboutImageRef={aboutImageRef}
      />
    </div>
  );
};

export default About;
