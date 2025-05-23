import App from "next/app";
import AppContainer from "./AppContainer";

const ConfirmationWindowComponent = (
    <div className="flex flex-col w-128 h-48 text-black text-2xl p-4">
        <p className="my-auto">Would you like to navigate to linkedin.com?</p>
        <div className="flex flex-row gap-2">
            <AppContainer children={<button className="w-36">Yes</button>} />
            <AppContainer children={<button className="w-36">No</button>} />
        </div>
    </div>
)

export default function ConsoleWindow() {
  return (
    <div className="ml-[-800px] mt-48">
        <AppContainer header={true} headerColor={"bg-[#012456]"} headerText={"Navigate to External Link"} 
            headerTextColor={"text-white"} closeButton={true} children={ConfirmationWindowComponent}/>
    </div>
  );
}