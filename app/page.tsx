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
    <div className="relative w-full h-full">
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

      <div className="z-30 absolute left-128 top-48">
        {
          showConfirmationWindow && (
            <ConfirmationWindow
              setShowConfirmationWindow={setShowConfirmationWindow}
              url={confirmationWindowURL}
            />
          )
        }
      </div>

      <div className="h-full w-full z-40 absolute left-0 top-0">
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
