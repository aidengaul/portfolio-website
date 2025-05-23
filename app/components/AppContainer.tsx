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
  }

export default function AppContainer({
  children,
  header = false,
  headerText = "",
  headerColor = "",
  headerTextColor = "text-black",
  closeButton = false,
  closeFunction = () => {}
}: Readonly<AppContainerProps>) {
  return (
    <div>
        <div className="bg-black pb-1 pr-1">
            <div className="bg-white pl-1 pt-1">
                <div className="bg-[#88878D] pb-1 pr-1">
                    <div className="bg-[#C5C5CA] p-1">
                        {
                            header && 
                            <div className={`${headerColor} flex flex-row items-center`}>
                              <p className={`${headerTextColor} text-3xl pl-2 py-2 mr-auto`}>{headerText}</p>
                              {
                                closeButton && 
                                <button onClick={() => closeFunction(false)}>
                                  <CloseButton />
                                </button>
                              }
                            </div>
                            
                        }
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}