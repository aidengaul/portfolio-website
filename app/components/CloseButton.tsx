import AppContainer from "./AppContainer";
import Image from "next/image";

export default function CloseButton() {
  return (
    <div className="pr-2">
        <AppContainer children={
          <Image src={"/close-icon.png"} alt="Close Button" height={16} width={16}/>
        }/>
    </div>
  );
}