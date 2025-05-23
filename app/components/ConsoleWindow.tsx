import AppContainer from "./AppContainer";   
import { vt323 } from "../layout"

const messageStart = `
db   d8b   db d88888b db       .o88b.  .d88b.  .88b  d88. d88888b
88   I8I   88 88'     88      d8P  Y8 .8P  Y8. 88'YbdP\`88 88'
88   I8I   88 88ooooo 88      8P      88    88 88  88  88 88ooooo
Y8   I8I   88 88~~~~~ 88      8b      88    88 88  88  88 88~~~~~
\`8b d8'8b d8' 88.     88booo. Y8b  d8 \`8b  d8' 88  88  88 88.
 \`8b8' \`8d8'  Y88888P Y88888P  \`Y88P'  \`Y88P'  YP  YP  YP Y88888P                         


Site designed and developed by Aiden Gaul.


`

const ConsoleWindowComponent = (
    <div className="bg-[#012456] w-256 h-128 text-white text-xl/4 p-4 ">
        <pre className={vt323.className}>{messageStart}</pre>
        <div className="flex inline-flex gap-2 items-center">
            <p>&gt; </p>
            <input className="text-xl" type="text"></input>
        </div>
    </div>
)

export default function ConsoleWindow() {
  return (
    <div className="ml-48 mt-24">
        <AppContainer header={true} headerText={"Console"} children={ConsoleWindowComponent}/>
    </div>
  );
}