import { createContext, useContext, useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import clickSfx from "/sounds/click.mp3";
import bgSfx from "/sounds/background.mp3";

interface SoundContextType {
  toggleMusic: () => void;
  toggleClickSound: () => void;
  musicEnabled: boolean;
  clickEnabled: boolean;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSoundContext must be used within a SoundProvider");
  }
  return context;
};

interface SoundProviderProps {
  children: React.ReactNode;
}

const SoundProvider = ({ children }: SoundProviderProps) => {
  const [musicEnabled, setMusicEnabled] = useState(() =>
    JSON.parse(localStorage.getItem("musicEnabled") || "true")
  );
  const [clickEnabled, setClickEnabled] = useState(() =>
    JSON.parse(localStorage.getItem("clickEnabled") || "true")
  );

  const [playClick] = useSound(clickSfx, { volume: 0.5 });

  const [playOnce, { sound: soundOnce }] = useSound(bgSfx, {
    loop: false,
    volume: 0.5,
    interrupt: true,
  });

  const [playLoop, { sound: loopSound }] = useSound(bgSfx, {
    loop: true,
    volume: 0.5,
    interrupt: true,
  });

  const hasStarted = useRef(false);

  // Save states to localStorage
  useEffect(() => {
    localStorage.setItem("musicEnabled", JSON.stringify(musicEnabled));
  }, [musicEnabled]);

  useEffect(() => {
    localStorage.setItem("clickEnabled", JSON.stringify(clickEnabled));
  }, [clickEnabled]);

  const toggleMusic = () => {
    setMusicEnabled((prev: boolean) => {
      const newState = !prev;
      if (!newState) {
        loopSound?.stop();
        soundOnce?.stop();
        hasStarted.current = false;
      }
      return newState;
    });
  };

  const toggleClickSound = () => {
    setClickEnabled((prev: boolean) => !prev);
  };

  useEffect(() => {
    const handleClick = () => {
      if (clickEnabled) playClick();

      if (!hasStarted.current && musicEnabled) {
        hasStarted.current = true;
        playOnce();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      // Only stop music if musicEnabled becomes false
      if (!musicEnabled) {
        soundOnce?.stop();
        loopSound?.stop();
      }
    };
  }, [clickEnabled, musicEnabled, playClick, playOnce, loopSound, soundOnce]);

  useEffect(() => {
    if (soundOnce) {
      soundOnce.on("end", () => {
        if (musicEnabled) {
          playLoop();
        }
      });
    }

    return () => {
      soundOnce?.off("end");
    };
  }, [soundOnce, musicEnabled, playLoop]);

  return (
    <SoundContext.Provider
      value={{
        toggleMusic,
        toggleClickSound,
        musicEnabled,
        clickEnabled,
      }}
    >
      <div>{children}</div>
    </SoundContext.Provider>
  );
};

export default SoundProvider;
