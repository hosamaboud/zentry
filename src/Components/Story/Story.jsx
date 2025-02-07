import { useEffect, useRef, useCallback } from 'react';
import AnimatedTitle from '../Utils/AnimatedTitle';
import Button from '../Utils/Button';
import gsap from 'gsap';
import Svg from './Svg';

const Story = () => {
  const frameRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (clientX - centerX) / centerX;
    const offsetY = (clientY - centerY) / centerY;

    gsap.to(frameRef.current, {
      rotateY: offsetX * 8,
      rotateX: offsetY * -8,
      transformPerspective: 1200,
      duration: 0.5,
      ease: 'power2.out',
      transformOrigin: 'center center',
    });

    gsap.to(imgRef.current, {
      scale: 0.95,
      rotateY: offsetX * 20,
      rotateX: offsetY * -20,
      transformPerspective: 1200,
      duration: 0.6,
      ease: 'power2.out',
      transformOrigin: 'center center',
    });
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    frame.addEventListener('mousemove', handleMouseMove);
    return () => frame.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section className="relative bg-black min-h-screen text-blue-50 w-screen">
      <div className="flex items-center flex-col size-full py-10 pb-20">
        {/*Header section*/}
        <AnimatedTitle
          subtitle="The Open Ip universe"
          title={
            <>
              The st<b>o</b>ry of
              <br />
              <b>A</b> hidden real<b>m</b>
            </>
          }
          style="mix-blend-difference  z-10"
        />
        {/* image section */}
        <div ref={frameRef} className="story-img-container ">
          <div className="story-img-mask">
            <div className="story-img-content ">
              <img
                ref={imgRef}
                src="/public/img/entrance.webp"
                alt="entrance"
                className="object-cover object-center"
              />
            </div>
          </div>
          {/* SVG for rounded corners */}
          <Svg />
        </div>
        <div className="md:-mt-28  flex md:text-[12px] md:ml-[50%] items-end text-blue-50 ">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-[300px] text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
              title="discover prologue"
              containerClass="px-7 py-3 mt-5 text-black  bg-[#5724ff] font-general  hover:bg-[#DF6D14]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
