import gsap from 'gsap';
import VideoCard from './VideoCard';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const Features = () => {
  const lastVideo = useRef(null);
  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  useEffect(() => {
    const title = titleRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;
    const card5 = card5Ref.current;
    const lastOne = lastVideo.current;

    const handleMouseEnter = () => {
      gsap.to(lastOne, {
        scale: 0.95,
        duration: 1,
        ease: 'power2.out',
      });
    };
    const handleMouseLeave = () => {
      gsap.to(lastOne, {
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      });
    };
    lastOne.addEventListener('mouseenter', handleMouseEnter);
    lastOne.addEventListener('mouseleave', handleMouseLeave);
    gsap.fromTo(
      title,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      card5,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card5,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      card1,
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card1,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      lastOne,
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: lastOne,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      card2,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card2,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      card3,
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card3,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      card4,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card4,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    return () => {
      lastOne.removeEventListener('mouseenter', handleMouseEnter);
      lastOne.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="bg-black pb-32 grid px-8 md:px-28 overflow-hidden ">
      {/* features  title */}

      <div ref={titleRef} className=" flex flex-col my-24 items-start">
        <p className="text-blue-50">Explore the Zentry Universe</p>
        <p className="text-blue-50 opacity-50 mt-4 max-w-md ">
          Immerse yourself in an IP-rich product universe where AI-driven
          gamification and hyper-personalization lead humans & AI into a global
          play economy.
        </p>
      </div>

      {/* features  container */}
      <div className="flex flex-col h-max w-[90%] md:w-full mx-auto gap-7 ">
        <div ref={card1Ref}>
          <VideoCard
            addVideo
            containerClass=" h-[400px] md:h-[500px]"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="The game of games transtoing your in-game actions across Web2 & Web3 titles into a rewarding adventure."
            src="/videos/feature-1.mp4"
            comingSoon
          />
        </div>

        <div className=" grid h-[220vh] md:h-[130vh] grid-cols-1 md:grid-cols-2 gap-3 md:gap-7">
          <div ref={card2Ref} className="row-span-1 md:row-span-2">
            <VideoCard
              addVideo
              containerClass=" h-[90vh] md:h-full "
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              description="The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation."
              src="/videos/feature-2.mp4"
              comingSoon
            />
          </div>

          <div ref={card3Ref}>
            <VideoCard
              addVideo
              containerClass="md:row-span-1 h-[60vh] md:h-full "
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              description="The player portal uniting humans & AI to play, compete, earn and showcase—gamifying social & Web3 experiences."
              src="/videos/feature-3.mp4"
              comingSoon
            />
          </div>
          <div ref={card4Ref}>
            <VideoCard
              addVideo
              containerClass="md:row-span-1 h-[60vh] md:h-full "
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="The agent of agents elevating agentic AI experience to be more fun and productive."
              src="/videos/feature-4.mp4"
              comingSoon
            />
          </div>
        </div>
        <div className=" grid gap-3  md:gap-7 grid-cols-1 md:grid-cols-2">
          <div ref={card5Ref}>
            <VideoCard
              containerClass=" col-span-1 h-[60vh] md:h-full bg-[#5724ff] "
              title={
                <div className="max-w-28 text-black">
                  m<b>o</b>re co<b>m</b>ing s<b>o</b>o<b>n</b>.
                </div>
              }
              logo
            />
          </div>
          <video
            ref={lastVideo}
            className="rounded-md border-hsla cursor-pointer"
            loop
            autoPlay
            muted
            src="/videos/feature-5.mp4"
          />
        </div>
      </div>
    </section>
  );
};
export default Features;
