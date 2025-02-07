import { useEffect, useRef } from 'react';
import { useState } from 'react';
import Button from '../Utils/Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Atom } from 'react-loading-indicators';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const videoRef = useRef(null);

  const upcomingVideo = (currentVideo % totalVideos) + 1;
  const handelMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentVideo(upcomingVideo);
  };
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.to('#next_video', { visibility: 'visible' });
        gsap.to('#next_video', {
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          duration: 1,
          ease: 'power1.inOut',
          onStart: () => videoRef.current.play(),
        });
        gsap.from('#current_video', {
          transformOrigin: 'center center',
          scale: 0,
          duration: 1.5,
          ease: 'power1.inOut',
        });
      }
    },
    { dependencies: [currentVideo], revertOnUpdate: true }
  );
  useGSAP(() => {
    gsap.set('#video_Frame', {
      clipPath: 'polygon(10% 0%, 80% 20%, 95% 85%, 0% 100%)',
      ease: 'power1.inOut',
    });
    gsap.from('#video_Frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video_Frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });
  const handelVideoLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const getVideoSrc = (index) => {
    return `/videos/hero-${index}.mp4`;
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex items-center justify-center h-screen w-screen bg-black z-50 fixed top-0 left-0 right-0 bottom-0">
          <Atom color="#0D9276" size="large" text="Zentry" />
        </div>
      )}
      <div
        id="video_Frame"
        className="relative z-10 h-dvh w-screen  overflow-hidden  bg-blue-75"
      >
        <div>
          <div className=" absolute-center z-50 cursor-pointer overflow-hidden  ">
            <div
              onClick={handelMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={videoRef}
                src={getVideoSrc(upcomingVideo)}
                loop
                muted
                className="rounded-lg origin-center size-48 scale-50 object-cover object-center"
                id="current_video"
                onLoadedData={handelVideoLoaded}
              />
            </div>
          </div>
          <video
            className="absolute-center invisible z-20 size-64 object-cover object-center"
            onLoadedData={handelVideoLoaded}
            ref={videoRef}
            src={getVideoSrc(currentVideo)}
            loop
            muted
            id="next_video"
          />
          <video
            className="absolute left-0 top-0 size-full
            object-cover object-center"
            onLoadedData={handelVideoLoaded}
            src={getVideoSrc(currentVideo)}
            loop
            muted
            autoPlay
          ></video>
        </div>
        <h1 className="special-font absolute bottom-5 right-4 z-40 text-blue-75 hero-heading  ">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Redefi<b>n</b>e
            </h1>
            <p className="text-blue-100 font-robert-regular mb-5 max-w-64">
              Enter The Metagame Layer <br />
              Unleash the play Economy
            </p>
            <Button
              id="watch_trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="flex gap-1 items-center font-general px-7 py-3 bg-[#DF6D14] text-black"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font absolute bottom-5 right-4 z-0 text-black hero-heading  ">
        G<b>a</b>ming
      </h1>
    </div>
  );
};
export default Hero;
