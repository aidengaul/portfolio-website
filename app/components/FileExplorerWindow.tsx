import { Dispatch, SetStateAction } from "react";
import AppContainer from "./AppContainer"

interface FileExplorerProps {
    setShowFileExplorerWindow: Dispatch<SetStateAction<boolean>>;
    setShowTextFileWindow: Dispatch<SetStateAction<boolean>>;
    setTextFileName: Dispatch<SetStateAction<string>>;
    fileName: string;
}

const files = {
  "personal-website.txt": null,
  "learn-os.txt": null,
  "multiclass-image-classification.txt": null,
  "peer-to-peer-file-sharing.txt": null,
  "linux-file-manager.txt": null,
  "code-sparks.txt": null,
};

function FileExplorerComponent({
    setShowFileExplorerWindow,
    setShowTextFileWindow,
    setTextFileName,
    fileName
}: Readonly<FileExplorerProps>) {
    return (
        <div className="w-256 h-128 bg-white text-black text-xl p-4 overflow-auto">
            <div className="flex flex-row flex-wrap gap-4">
                {
                    Object.keys(files).map((fileName) => (
                        <div key={fileName} 
                            className="flex flex-col gap-1 items-center w-40 p-4 hover:bg-blue-100 hover:border-blue-500">
                            <img
                                src="/txt_file.png"
                                alt="Text File Icon"
                                height={100}
                                width={85}
                                onClick={() => console.log(`Opening ${fileName}`)} />
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
    fileName
}: Readonly<FileExplorerProps>) {
    return (
        <div className="">
            <AppContainer header={true} headerText="File Explorer - /projects/" closeButton={true} closeFunction={setShowFileExplorerWindow}
                children={<FileExplorerComponent setShowFileExplorerWindow={setShowFileExplorerWindow} 
                    setShowTextFileWindow={setShowTextFileWindow} setTextFileName={setTextFileName} 
                    fileName={fileName}/>}/>
        </div>
    )
}