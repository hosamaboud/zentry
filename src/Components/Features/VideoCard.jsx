import { TiLocationArrow } from 'react-icons/ti';
import Button from '../Utils/Button';
import { useRef, useEffect, useContext } from 'react';
import gsap from 'gsap';
import { AudioContext } from '../../context/AudioContext';

const VideoCard = ({
  title,
  addVideo,
  description,
  src,
  comingSoon,
  logo,
  containerClass,
}) => {
  const { audioEnabled } = useContext(AudioContext);
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const audioVdRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    const audio = audioVdRef.current;

    // animation for mobile devices
    gsap.matchMedia().add('(max-width: 767px)', () => {
      gsap.to(card, {
        y: -15,
        scale: 0.95,
        duration: 1.5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      });
    });

    if (addVideo) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play();
            if (audioEnabled) {
              audio
                .play()
                .catch((error) => console.error('Audio error:', error));
            }
          } else {
            video.pause();
            audio.pause();
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(card);

      return () => {
        observer.unobserve(card);
      };
    }
  }, [audioEnabled]);

  return (
    <div
      className={`${containerClass} cursor-pointer relative border border-[#27667B] rounded-xl`}
      ref={cardRef}
    >
      {addVideo && (
        <video
          ref={videoRef}
          src={src}
          muted={!audioEnabled}
          loop
          autoPlay
          className="absolute top-0 right-0 size-full rounded-xl object-cover"
        />
      )}
      <audio
        ref={audioVdRef}
        src="/audio/video_hover.mp3"
        muted={!audioEnabled}
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="video-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-48 text-[10px] md:text-xs">
              {description}
            </p>
          )}
        </div>
      </div>
      {comingSoon && (
        <div className="absolute bottom-2 flex gap-2 left-5 z-20">
          <Button
            title="Coming soon"
            rightIcon={<TiLocationArrow />}
            containerClass="px-2 py-1 
            md:px-4 md:py-2
            flex items-center gap-1 bg-yellow-400"
            srcAudio={'/audio/btn.mp3'}
          />
        </div>
      )}
      {logo && (
        <>
          <div className="bg-black logo-clip-path-2 h-[40px] w-[50px] absolute bottom-8 right-7 z-20 rotate-[-10deg]"></div>
          <div className="bg-black logo-clip-path-2 h-[40px] w-[50px] absolute bottom-3 right-5 z-20 -rotate-[190deg]"></div>
        </>
      )}
    </div>
  );
};

export default VideoCard;
