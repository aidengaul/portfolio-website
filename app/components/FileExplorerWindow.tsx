import { Dispatch, SetStateAction } from "react";
import AppContainer from "./AppContainer"
import Image from "next/image";

interface FileExplorerProps {
    setShowFileExplorerWindow: Dispatch<SetStateAction<boolean>>;
    setShowTextFileWindow: Dispatch<SetStateAction<boolean>>;
    setTextFileName: Dispatch<SetStateAction<string>>;
}

const files = [
  "personal-website.txt",
  "learn-os.txt",
  "multiclass-image-classification.txt",
  "peer-to-peer-file-sharing.txt",
  "linux-file-manager.txt",
  "code-sparks.txt",
];

function FileExplorerComponent({
    setShowTextFileWindow,
    setTextFileName,
}: Readonly<FileExplorerProps>) {
    const openTextFile = (fileName: string) => {
        setTextFileName(fileName);
        setShowTextFileWindow(true);
    };

    return (
        <div className="w-256 h-128 bg-white text-black text-xl p-4 overflow-auto">
            <div className="flex flex-row flex-wrap gap-4">
                {
                    files.map((fileName) => (
                        <div key={fileName} 
                            className="flex flex-col gap-1 items-center w-40 p-4 hover:bg-blue-100 
                                hover:border-blue-500 border-1 border-transparent hover:border-1 hover:cursor-pointer">
                            <Image
                                src="/txt_file.png"
                                alt="Text File Icon"
                                height={100}
                                width={85}
                                onClick={() => openTextFile(fileName)} />
                            <p className="w-36 text-center text-wrap text-black text-xl ">{fileName}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default function FileExplorerWindow({
    setShowFileExplorerWindow,
    setShowTextFileWindow,
    setTextFileName,
}: Readonly<FileExplorerProps>) {
    return (
        <div className="">
            <AppContainer header={true} headerText="File Explorer - /projects/" closeButton={true} closeFunction={setShowFileExplorerWindow}>
                <FileExplorerComponent setShowFileExplorerWindow={setShowFileExplorerWindow} 
                    setShowTextFileWindow={setShowTextFileWindow} setTextFileName={setTextFileName} />
            </AppContainer>
        </div>
    )
}