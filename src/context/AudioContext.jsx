import { createContext, useState, useRef } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    setAudioEnabled((prev) => !prev);
    if (audioRef.current) {
      audioEnabled
        ? audioRef.current.pause()
        : audioRef.current
            .play()
            .catch((error) => console.error('Audio error:', error));
    }
  };

  return (
    <AudioContext.Provider value={{ audioEnabled, toggleAudio, audioRef }}>
      {children}
    </AudioContext.Provider>
  );
};
