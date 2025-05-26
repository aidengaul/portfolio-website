"use client";
import Image from "next/image";
import { useWindowManager } from "./WindowManagerContext";

export default function DesktopIcons() {
  const { setShowTextFileWindow, 
    setTextFileName, 
    setShowConfirmationWindow, 
    setConfirmationWindowURL,
    setShowFileExplorerWindow,
    setShowConsoleWindow } = useWindowManager();

  const handleImageClick = (url: string) => {
    console.log(`Opening URL: ${url}`);
    setConfirmationWindowURL(url);
    setShowConfirmationWindow(true);
  };

  const openTextFileWindow = (fileName: string) => {
    setTextFileName(fileName);
    setShowTextFileWindow(true);
  }

  const openFileExplorerWindow = () => {
    setShowFileExplorerWindow(true);
  }

  return (
    <div className="flex flex-col min-h-full items-center m-8 gap-8">
        <div className="flex flex-col gap-1 items-center w-[128px] hover:cursor-pointer">
            <Image
                src="/txt_file.png"
                alt="Text File Icon"
                width={85}
                height={100}
                onClick={() => openTextFileWindow("resume.txt")} 
            />
            <p className="text-white text-xl">resume.txt</p>
        </div>
        <div className="flex flex-col gap-2 items-center hover:cursor-pointer">
            <Image
                src="/folder.png"
                alt="Folder Icon"
                width={100}
                height={100} 
                onClick={() => openFileExplorerWindow()}
            />
            <p className="text-white text-xl">projects</p>
        </div>
        <Image
            src="/linkedin.webp"
            alt="LinkedIn Link"
            width={100}
            height={100}
            className="mb-2 hover:cursor-pointer"
            onClick={() => handleImageClick("https://www.linkedin.com/in/aiden-gaul/")} 
        />
        <Image
            src="/github.png"
            alt="GitHub Link"
            width={100}
            height={100}
            className="hover:cursor-pointer"
            onClick={() => handleImageClick("https://www.github.com/aidengaul/")} 
        />
        <Image
            src="/shell.png"
            alt="Open Shell"
            width={100}
            height={100}
            className="hover:cursor-pointer"
            onClick={() => setShowConsoleWindow(true)}
          />
    </div>
  );
}
