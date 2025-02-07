import { useContext } from 'react';
import { AudioContext } from '../../../context/AudioContext';

const AudioToggleButton = () => {
  const { audioEnabled, toggleAudio, audioRef } = useContext(AudioContext);

  return (
    <button
      className="ml-10 flex items-center space-x-0.5"
      onClick={toggleAudio}
    >
      <audio src="/audio/loop_1.mp3" loop className="hidden" ref={audioRef} />
      {[1, 2, 3, 4].map((bar) => (
        <div
          key={bar}
          className={`indicator-line ${audioEnabled ? 'active' : ''}`}
          style={{ animationDelay: `${bar * 0.1}s` }}
        />
      ))}
    </button>
  );
};

export default AudioToggleButton;
