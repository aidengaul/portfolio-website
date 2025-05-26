"use client";
import { useWindowManager } from "./components/WindowManagerContext";
import TextFileWindow from "./components/TextFileWindow";
import ConfirmationWindow from "./components/ConfirmationWindow";
import FileExplorerWindow from "./components/FileExplorerWindow";
import { useState } from "react";
import ConsoleWindow from "./components/ConsoleWindow";

export default function Page() {
  const {
    showTextFileWindow,
    textFileName,
    showConfirmationWindow,
    confirmationWindowURL,
    showFileExplorerWindow,
    showConsoleWindow,
    windowStack,
    setShowConfirmationWindow,
    setShowTextFileWindow,
    setTextFileName,
    setShowFileExplorerWindow,
    setShowConsoleWindow,
    setWindowStack,
    bringToFront
  } = useWindowManager();

  return (
    <div className="relative w-full h-full">
      <div className={`absolute left-96 top-36`} style={{ zIndex: 100 + windowStack.indexOf("fileexplorer") }}
        onClick={() => bringToFront("fileexplorer")}>
        {
          showFileExplorerWindow && (
            <FileExplorerWindow
              setShowFileExplorerWindow={setShowFileExplorerWindow}
              setShowTextFileWindow={setShowTextFileWindow}
              setTextFileName={setTextFileName}
              fileName={textFileName}
            />
          )
        }
      </div>

      <div className={`absolute left-84 top-36`} style={{ zIndex: 100 + windowStack.indexOf("console") }}
        onClick={() => bringToFront("console")}>
          {
            showConsoleWindow && (
              <ConsoleWindow 
                setShowConsoleWindow={setShowConsoleWindow}
              />
            )
          }
      </div>

      <div className={`z-105 absolute left-128 top-48`}>
        {
          showConfirmationWindow && (
            <ConfirmationWindow
              setShowConfirmationWindow={setShowConfirmationWindow}
              url={confirmationWindowURL}
            />
          )
        }
      </div>

      <div className={`z-110 h-full w-full z-40 absolute left-0 top-0`}>
        {
        showTextFileWindow && (
          <TextFileWindow
            setShowTextFileWindow={setShowTextFileWindow}
            fileName={textFileName}
          />
          )
        }
      </div>
    </div>
  );
}
