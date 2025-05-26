"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface WindowManagerContextType {
  showTextFileWindow: boolean;
  setShowTextFileWindow: Dispatch<SetStateAction<boolean>>;
  textFileName: string;
  setTextFileName: Dispatch<SetStateAction<string>>;
  showConfirmationWindow: boolean;
  setShowConfirmationWindow: Dispatch<SetStateAction<boolean>>;
  confirmationWindowURL: string;
  setConfirmationWindowURL: Dispatch<SetStateAction<string>>;
  showFileExplorerWindow: boolean;
  setShowFileExplorerWindow: Dispatch<SetStateAction<boolean>>;
}

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

export function WindowManagerProvider({ children }: { children: React.ReactNode }) {
  const [showTextFileWindow, setShowTextFileWindow] = useState(false);
  const [textFileName, setTextFileName] = useState("");
  const [showConfirmationWindow, setShowConfirmationWindow] = useState(false);
  const [confirmationWindowURL, setConfirmationWindowURL] = useState("");
  const [showFileExplorerWindow, setShowFileExplorerWindow] = useState(false);

  return (
    <WindowManagerContext.Provider
      value={{
        showTextFileWindow,
        setShowTextFileWindow,
        textFileName,
        setTextFileName,
        showConfirmationWindow,
        setShowConfirmationWindow,
        confirmationWindowURL,
        setConfirmationWindowURL,
        showFileExplorerWindow, 
        setShowFileExplorerWindow
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const context = useContext(WindowManagerContext);
  if (!context) throw new Error("useWindowManager must be used within a WindowManagerProvider");
  return context;
}
