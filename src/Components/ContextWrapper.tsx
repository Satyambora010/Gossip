import React, { useState, createContext } from "react";
export const ContextWrapper = createContext<any>(null);

export const ContextWrapperProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ContextWrapper.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </ContextWrapper.Provider>
  );
};
