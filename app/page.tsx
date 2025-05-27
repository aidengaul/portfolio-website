"use client";
import { useWindowManager } from "./components/WindowManagerContext";
import TextFileWindow from "./components/TextFileWindow";
import ConfirmationWindow from "./components/ConfirmationWindow";
import FileExplorerWindow from "./components/FileExplorerWindow";
import ConsoleWindow from "./components/ConsoleWindow";
import NoticeWindow from "./components/NoticeWindow";
import { useState } from "react";

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
    bringToFront
  } = useWindowManager();
  const [showNoticeWindow, setShowNoticeWindow] = useState(true);

  return (
    <div className="relative w-full h-full">
      {showNoticeWindow && <NoticeWindow setShowNoticeWindow={setShowNoticeWindow}/>}
      
      <div className={`absolute left-96 top-48`} style={{ zIndex: 100 + windowStack.indexOf("fileexplorer") }}
        onClick={() => bringToFront("fileexplorer")}>
        {
          showFileExplorerWindow && (
            <FileExplorerWindow
              setShowFileExplorerWindow={setShowFileExplorerWindow}
              setShowTextFileWindow={setShowTextFileWindow}
              setTextFileName={setTextFileName}
            />
          )
        }
      </div>

      <div className={`absolute left-64 top-12`} style={{ zIndex: 100 + windowStack.indexOf("console") }}
        onClick={() => bringToFront("console")}>
          {
            showConsoleWindow && (
              <ConsoleWindow 
                setShowConsoleWindow={setShowConsoleWindow}
              />
            )
          }
      </div>

      <div className={`z-105 absolute left-128 top-64`}>
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
