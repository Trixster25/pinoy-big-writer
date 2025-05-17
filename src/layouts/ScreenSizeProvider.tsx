import React, { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";

// Define the shape of the context
interface ScreenSizeContextType {
  isMediumScreen: boolean;
}

// Create the context with a default value
const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(
  undefined
);

// Define the props for the provider
interface ScreenSizeProviderProps {
  children: ReactNode;
}

export const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({
  children,
}) => {
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(
    window.innerWidth < 1080
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth < 1080);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMediumScreen }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

// Custom hook to use the context
export const useScreenSize = (): ScreenSizeContextType => {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error("useScreenSize must be used within a ScreenSizeProvider");
  }
  return context;
};
