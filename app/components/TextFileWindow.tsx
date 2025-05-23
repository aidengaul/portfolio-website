import AppContainer from "./AppContainer"
import Resume from "./files/Resume"

const files: Record<string, React.FC> = {
    resume: Resume,
}

function TextFileWindowComponent({fileName}: {fileName: string}) {
    const SelectedFile = files[fileName.toLowerCase()];

    return (
        <div className="bg-white p-4">
            <SelectedFile />
        </div>
    )
}

export default function TextFileWindow({setShowTextFileWindow, fileName}: {setShowTextFileWindow: React.Dispatch<React.SetStateAction<boolean>>, fileName: string}) {
  return (
    <AppContainer header={true} headerText={"resume.txt"} closeButton={true} closeFunction={setShowTextFileWindow} 
        fullScreen={true} children={<TextFileWindowComponent fileName={fileName}/>}/>
  )
}