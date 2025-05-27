"use client"
import { Dispatch, SetStateAction } from "react";
import AppContainer from "./AppContainer";

interface ConfirmationWindowProps {
  setShowNoticeWindow: Dispatch<SetStateAction<boolean>>;
}

function NoticeWindowComponent({
  setShowNoticeWindow
}: Readonly<ConfirmationWindowProps>) {
  const handleContinue = () => {
    console.log("Continuing despite notice");
    setShowNoticeWindow(false);
  };

  return (
    <div className="flex flex-col w-128 h-48 text-black text-2xl p-4">
      <p className="my-auto">Some content may not display correctly.</p>
      <div className="flex flex-row gap-2">
        <AppContainer><button className="w-36 hover:cursor-pointer" onClick={() => handleContinue()}>Continue</button></AppContainer>
      </div>
    </div>
  );
}

export default function NoticeWindow({
  setShowNoticeWindow
}: Readonly<ConfirmationWindowProps>) {
  return (
    <div
        className="fixed inset-0  z-140"
        onClick={() => {}}
      >
        <div className="z-150 absolute left-128 top-64 focus">
            <AppContainer header={true} headerColor={"bg-[#012456]"} headerText={"Page not optimized for mobile devices"} 
                headerTextColor={"text-white"} closeButton={true} closeFunction={setShowNoticeWindow}>
                    <NoticeWindowComponent setShowNoticeWindow={setShowNoticeWindow}/>
            </AppContainer>
        </div>
    </div>
    );
}