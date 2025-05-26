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
  showConsoleWindow: boolean;
  setShowConsoleWindow: Dispatch<SetStateAction<boolean>>;
  windowStack: string[];
  setWindowStack: Dispatch<SetStateAction<string[]>>;
  bringToFront: (id: string) => void;
  openWindow: (id: string, openFn: Dispatch<SetStateAction<boolean>>) => void;
}

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

export function WindowManagerProvider({ children }: { children: React.ReactNode }) {
  const [showTextFileWindow, setShowTextFileWindow] = useState(false);
  const [textFileName, setTextFileName] = useState("");
  const [showConfirmationWindow, setShowConfirmationWindow] = useState(false);
  const [confirmationWindowURL, setConfirmationWindowURL] = useState("");
  const [showFileExplorerWindow, setShowFileExplorerWindow] = useState(false);
  const [showConsoleWindow, setShowConsoleWindow] = useState(true);
  const [windowStack, setWindowStack] = useState<string[]>([]);

  function bringToFront(id: string) {
  setWindowStack((prev) => {
    const filtered = prev.filter((w) => w !== id);
    return [...filtered, id];
  });
}

function openWindow(id: string, openFn: Dispatch<SetStateAction<boolean>>) {
  openFn(true);
  bringToFront(id);
}

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
        setShowFileExplorerWindow,
        showConsoleWindow,
        setShowConsoleWindow,
        windowStack,
        setWindowStack,
        bringToFront,
        openWindow
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

