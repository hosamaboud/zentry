import { TiLocationArrow } from 'react-icons/ti';
import Button from '../Utils/Button';
import { useRef, useEffect, useContext } from 'react'; // أضف useContext
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
  const { audioEnabled } = useContext(AudioContext); // استخدام الـ Context
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const audioVdRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    const audio = audioVdRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 0.95,
        duration: 1,
        ease: 'power2.out',
      });
      {
        addVideo && video.play();
        if (audioEnabled) {
          audio.play().catch((error) => console.error('Audio error:', error));
        }
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      });
      {
        addVideo && video.pause();
        audio.pause();
      }
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [audioEnabled]);

  return (
    <div
      className={`${containerClass} cursor-pointer relative border-hsla rounded-md`}
      ref={cardRef}
    >
      {addVideo && (
        <video
          ref={videoRef}
          src={src}
          muted={!audioEnabled}
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      )}
      <audio
        ref={audioVdRef}
        src="/public/audio/hoverEffect.wav"
        muted={!audioEnabled}
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="video-title special-font"> {title}</h1>
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
            containerClass="px-4 py-2  flex items-center gap-1 bg-yellow-400"
          />
        </div>
      )}
      {logo && (
        <>
          <div className="bg-black logo-clip-path-2 h-[40px] w-[50px] absolute bottom-8 right-7 z-20 rotate-[-10deg] "></div>
          <div className="bg-black logo-clip-path-2 h-[40px] w-[50px] absolute bottom-3 right-5 z-20 -rotate-[190deg] "></div>
        </>
      )}
    </div>
  );
};

export default VideoCard;
