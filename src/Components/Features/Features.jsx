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
          scrub: 0.5,
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
          scrub: 0.5,
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
          start: 'top 85%',
          end: 'top 50%',
          scrub: 0.5,
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
          start: 'top 85%',
          end: 'top 50%',
          scrub: 0.5,
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
          start: 'center 100%', 
          end: 'bottom bottom ',
          scrub: 0.5, 
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="bg-black pb-32 grid  md:px-10 overflow-hidden ">
      {/* features  title */}

      <div ref={titleRef} className=" flex flex-col my-24 px-16 items-start">
        <p className="text-blue-50">Explore the Zentry Universe</p>
        <p className="text-blue-50 opacity-50 mt-4 max-w-md ">
          Immerse yourself in an IP-rich product universe where AI-driven
          gamification and hyper-personalization lead humans & AI into a global
          play economy.
        </p>
      </div>

      {/* features  container */}
      <div className="flex flex-col h-max w-[95%] md:w-full mx-auto gap-7 ">
        <div ref={card1Ref}>
          <VideoCard
            addVideo
            containerClass=" h-[400px] md:h-[500px] "
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

        <div className=" grid h-[55rem] md:h-[35rem] grid-cols-1 md:grid-cols-2  md:gap-7">
          <div
            ref={card2Ref}
            className="order-3 md:order-1 md:row-span-2 ml-auto w-[80%] md:w-full"
          >
            <VideoCard
              addVideo
              containerClass=" h-[400px]  md:h-full "
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

          <div className="order-1  ml-auto w-[50%] md:w-full" ref={card3Ref}>
            <VideoCard
              addVideo
              containerClass="md:row-span-1 h-[200px] md:h-full "
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
          <div className="mr-auto w-[80%] md:w-full order-2" ref={card4Ref}>
            <VideoCard
              addVideo
              containerClass="md:row-span-1  h-[240px] md:h-full  "
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
          <div className="mr-auto w-[50%] md:w-full" ref={card5Ref}>
            <VideoCard
              containerClass=" col-span-1 h-[200px] md:h-full bg-[#5724ff] "
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
