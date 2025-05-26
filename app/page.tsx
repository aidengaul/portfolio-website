"use client";
import { useWindowManager } from "./components/WindowManagerContext";
import TextFileWindow from "./components/TextFileWindow";
import ConfirmationWindow from "./components/ConfirmationWindow";
import FileExplorerWindow from "./components/FileExplorerWindow";

export default function Page() {
  const {
    showTextFileWindow,
    textFileName,
    showConfirmationWindow,
    confirmationWindowURL,
    showFileExplorerWindow,
    setShowConfirmationWindow,
    setShowTextFileWindow,
    setTextFileName,
    setShowFileExplorerWindow
  } = useWindowManager();

  return (
    <div className="z-10">
      <div className="z-20 absolute left-96 top-36">
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

      <div className="z-40 h-full w-full">
        {showTextFileWindow && (
        <TextFileWindow
          setShowTextFileWindow={setShowTextFileWindow}
          fileName={textFileName}
        />
        )}
      </div>
      
      <div className="z-40 absolute left-128 top-48">
        {showConfirmationWindow && (
          <ConfirmationWindow
            setShowConfirmationWindow={setShowConfirmationWindow}
            url={confirmationWindowURL}
          />
        )}
      </div>
    </div>
  );
}
