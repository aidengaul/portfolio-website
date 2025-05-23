import { Dispatch, SetStateAction } from "react";
import CloseButton from "./CloseButton";

interface AppContainerProps {
  children: React.ReactNode;
  header?: boolean;
  headerText?: string;
  headerColor?: string;
  headerTextColor?: string;
  closeButton?: boolean;
  closeFunction?: Dispatch<SetStateAction<boolean>>;
  fullScreen?: boolean;
}

export default function AppContainer({
  children,
  header = false,
  headerText = "",
  headerColor = "",
  headerTextColor = "text-black",
  closeButton = false,
  closeFunction = () => {},
  fullScreen = false,
}: Readonly<AppContainerProps>) {
  return (
    <div className={`${fullScreen ? "w-screen h-screen" : ""} flex flex-col overflow-hidden`}>
      <div className={`flex flex-col bg-black pb-1 pr-1 h-full`}>
        <div className="flex flex-col bg-white pl-1 pt-1 h-full">
          <div className="flex flex-col bg-[#88878D] pb-1 pr-1 h-full">
            <div className="flex flex-col bg-[#C5C5CA] p-1 h-full box-border">
              {header && (
                <div className={`${headerColor} flex flex-row items-center`}>
                  <p className={`${headerTextColor} text-3xl pl-2 py-2 mr-auto`}>
                    {headerText}
                  </p>
                  {closeButton && (
                    <button onClick={() => closeFunction(false)}>
                      <CloseButton />
                    </button>
                  )}
                </div>
              )}
              <div className="flex-1 overflow-auto">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
