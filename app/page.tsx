"use client";
import Image from "next/image";
import ConsoleWindow from "./components/ConsoleWindow";
import ConfirmationWindow from "./components/ConfirmationWindow";
import { useState } from "react";

export default function Page() {
  const [showConfirmationWindow, setShowConfirmationWindow] = useState(false);
  const [confirmationWindowURL, setConfirmationWindowURL] = useState("");

  const handleImageClick = (url: string) => {
    setConfirmationWindowURL(url);
    setShowConfirmationWindow(true);
  };

  return (
    <div className={`flex flex-row min-h-screen min-w-screen`}>
      <div className="flex flex-col min-h-full items-center m-8 gap-8">
        <div className="flex flex-col gap-1 items-center w-[128px]">
          <Image 
            src="/txt_file.png"
            alt="Text File Icon"
            width={85}
            height={100}
          />
          <p className="text-white text-xl">resume.txt</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image 
            src="/folder.png"
            alt="Folder Icon"
            width={100}
            height={100}
          />
          <p className="text-white text-xl">projects</p>
        </div>
        <Image
          src="/linkedin.webp"
          alt="LinkedIn Link"
          width={100}
          height={100}
          className="mb-2"
          onClick={() => handleImageClick("https://www.linkedin.com/in/aiden-gaul/")}
        />
        <Image
          src="/github.png"
          alt="GitHub Link"
          width={100}
          height={100}
          onClick={() => handleImageClick("https://www.github.com/aidengaul/")}
        />
      </div>
      <ConsoleWindow />
      {
        showConfirmationWindow && <ConfirmationWindow setShowConfirmationWindow={setShowConfirmationWindow} url={confirmationWindowURL} />
      }
    </div>
  );
}
