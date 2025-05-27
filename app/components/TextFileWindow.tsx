import AppContainer from "./AppContainer"
import Resume from "./files/Resume"
import PersonalWebsite from "./files/PersonalWebsite"
import LearnOS from "./files/LearnOS"
import MulticlassImageClassification from "./files/MultiClassImageClassification"
import PeerToPeerFileSharing from "./files/PeerToPeerFileSharing"
import LinuxFileManager from "./files/LinuxFileManager"
import CodeSparks from "./files/CodeSparks"

const files: Record<string, React.FC> = {
    "resume.txt": Resume,
    "personal-website.txt": PersonalWebsite,
    "learn-os.txt": LearnOS,
    "multiclass-image-classification.txt": MulticlassImageClassification,
    "peer-to-peer-file-sharing.txt": PeerToPeerFileSharing,
    "linux-file-manager.txt": LinuxFileManager,
    "code-sparks.txt": CodeSparks,
}

function TextFileWindowComponent({fileName}: {fileName: string}) {
    const SelectedFile = files[fileName.toLowerCase()];

    return (
        <div className="h-full w-full bg-white p-4">
            <SelectedFile />
        </div>
    )
}

export default function TextFileWindow({setShowTextFileWindow, fileName}: {setShowTextFileWindow: React.Dispatch<React.SetStateAction<boolean>>, fileName: string}) {
  return (
    <AppContainer header={true} headerText={fileName} closeButton={true} closeFunction={setShowTextFileWindow} 
        fullScreen={true} children={<TextFileWindowComponent fileName={fileName}/>}/>
  )
}