import { Dispatch, SetStateAction } from "react";
import AppContainer from "./AppContainer";

interface ConfirmationWindowProps {
  url: string;
  setShowConfirmationWindow: Dispatch<SetStateAction<boolean>>;
}

function ConfirmationWindowComponent({
  url,
  setShowConfirmationWindow
}: Readonly<ConfirmationWindowProps>) {
  const handleOpenNewTab = () => {
    console.log("Opening new tab with URL:", url);
    setShowConfirmationWindow(false);
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col w-128 h-48 text-black text-2xl p-4">
      <p className="my-auto">Would you like to navigate to {url}?</p>
      <div className="flex flex-row gap-2">
        <AppContainer><button className="w-36 hover:cursor-pointer" onClick={() => handleOpenNewTab()}>Yes</button></AppContainer>
        <AppContainer><button className="w-36 hover:cursor-pointer" onClick={() => setShowConfirmationWindow(false)}>No</button></AppContainer>
      </div>
    </div>
  );
}

export default function ConfirmationWindow({
  url,
  setShowConfirmationWindow
}: Readonly<ConfirmationWindowProps>) {
  return (
    <div className="">
        <AppContainer header={true} headerColor={"bg-[#012456]"} headerText={"Navigate to External Link"} 
            headerTextColor={"text-white"} closeButton={true} closeFunction={setShowConfirmationWindow} 
          >
            <ConfirmationWindowComponent setShowConfirmationWindow={setShowConfirmationWindow} url={url}/>
        </AppContainer>
    </div>
  );
}