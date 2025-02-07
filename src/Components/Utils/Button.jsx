import { useContext, useEffect, useRef } from 'react';
import { AudioContext } from '../../context/AudioContext';

const Button = ({ title, leftIcon, rightIcon, containerClass,srcAudio }) => {
  const buttonRef = useRef(null);
  const audioRef = useRef(null);

  const { audioEnabled } = useContext(AudioContext);

  useEffect(() => {
    const btn = buttonRef.current;
    const audio = audioRef.current;

    if (!btn || !audio || !audioEnabled) return;

    const handleMouseEnter = () => {
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    };

    const handleMouseLeave = () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };

    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mouseenter', handleMouseEnter);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [audioEnabled]);

  return (
    <button
      ref={buttonRef}
      className={` group clip-btn  w-fit cursor-pointer  ${containerClass}`}
      aria-label={title}
      style={{ willChange: 'transform' }}
    >
      <audio
        ref={audioRef}
        src={srcAudio}
        style={{ display: 'none' }}
      />
      {leftIcon}
      <span className="relative flex items-center overflow-hidden text-sm uppercase">
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
