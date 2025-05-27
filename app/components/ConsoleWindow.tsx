"use client";
import { useState, useEffect, useRef } from "react";
import AppContainer from "./AppContainer";
import { vt323 } from "./Font";
import { useWindowManager } from "./WindowManagerContext";

type FileNode = {
  type: "file";
  name: string;
  content?: string; // optional for "open" command
};

type DirectoryNode = {
  type: "directory";
  name: string;
  children: FileSystemNode[];
};

type FileSystemNode = FileNode | DirectoryNode;

const fileSystem: DirectoryNode = {
  type: "directory",
  name: "/",
  children: [
    { type: "file", name: "resume.txt", content: "This is my resume." },
    {
      type: "directory",
      name: "projects",
      children: [
        { type: "file", name: "personal-website.txt", content: "My website" },
        { type: "file", name: "learn-os.txt" },
        { type: "file", name: "multiclass-image-classification.txt" },
        { type: "file", name: "peer-to-peer-file-sharing.txt" },
        { type: "file", name: "linux-file-manager.txt" },
        { type: "file", name: "code-sparks.txt" },
      ],
    },
  ],
};

function findDir(pathSegments: string[]): DirectoryNode | null {
  let node: DirectoryNode = fileSystem;
  for (const segment of pathSegments) {
    const next = node.children.find(
      (child) => child.type === "directory" && child.name === segment
    ) as DirectoryNode;
    if (!next) return null;
    node = next;
  }
  return node;
}

function ls(dir: DirectoryNode): string {
  const lines = dir.children.map((child) =>
    child.type === "file" ? `  ${child.name}` : `  ${child.name}/`
  );

  return `\n${lines.join("\n")}\n`;
}

function normalizePath(inputPath: string, currentPath: string[]): string[] {
  const segments = inputPath
    .split("/")
    .filter((seg) => seg.length > 0 && seg !== ".");

  const isAbsolute = inputPath.startsWith("/");
  const basePath = isAbsolute ? [] : [...currentPath];
  
  for (const seg of segments) {
    if (seg === "..") {
      basePath.pop();
    } else {
      basePath.push(seg);
    }
  }

  return basePath;
}

type HandleCommandArgs = {
  command: string;
  currDir: DirectoryNode;
  path: string[];
  enqueueLines: (lines: string[]) => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setCurrDir: React.Dispatch<React.SetStateAction<DirectoryNode>>;
  setPath: React.Dispatch<React.SetStateAction<string[]>>;
  setTextFileName: React.Dispatch<React.SetStateAction<string>>;
  setShowTextFileWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

function handleCommand({
  command,
  currDir,
  path,
  enqueueLines,
  setInput,
  setCurrDir,
  setPath,
  setTextFileName,
  setShowTextFileWindow,
}: HandleCommandArgs) {
  const trimmed = command.trim();
  const [base, arg] = trimmed.split(" ");

  if (base === "clear") {
    enqueueLines([]); // clear queue
    setInput("");
    return;
  }

  if (base === "ls") {
    let contents: string;
    if (!arg || arg === ".") {
      contents = ls(currDir);
    } else {
      const p = normalizePath(arg, path);
      const d = findDir(p);
      if (d) contents = ls(d);
      else {
        enqueueLines([`> ${trimmed}`, `Directory not found: ${arg}`]);
        setInput("");
        return;
      }
    }
    enqueueLines([`> ${trimmed}`, ...contents]);
    setInput("");
    return;
  }

  if (base === "cd") {
    if (!arg) {
      setCurrDir(fileSystem);
      setPath([]);
      enqueueLines([`> ${trimmed}`, `Now in / (root)`]);
    } else {
      const p = normalizePath(arg, path);
      const d = findDir(p);
      if (d) {
        setCurrDir(d);
        setPath(p);
        enqueueLines([`> ${trimmed}`, `Now in /${p.join("/") || ""}`]);
      } else {
        enqueueLines([`> ${trimmed}`, `Directory not found: ${arg}`]);
      }
    }
    setInput("");
    return;
  }

  if (base === "open") {
    const file = currDir.children.find(
      (c) => c.type === "file" && c.name === arg
    ) as FileNode;
    if (file) {
      enqueueLines([`> ${trimmed}`, `\nOpening file: ${file.name}\n\n`]);
      setTextFileName(file.name);
      setShowTextFileWindow(true);
    } else {
      enqueueLines([`> ${trimmed}`, `File not found: ${arg}`]);
    }
    setInput("");
    return;
  }

  if (["help", "about", "contacts"].includes(base)) {
    const resp = COMMANDS[base];
    enqueueLines([`> ${trimmed}`, ...resp.split("\n")]);
    setInput("");
    return;
  }

  // fallback
  enqueueLines([`> ${trimmed}`, `Command not found: ${trimmed}`]);
  setInput("");
}

const messageStart = `
db   d8b   db d88888b db       .o88b.  .d88b.  .88b  d88. d88888b
88   I8I   88 88'     88      d8P  Y8 .8P  Y8. 88'YbdP\`88 88'
88   I8I   88 88ooooo 88      8P      88    88 88  88  88 88ooooo
Y8   I8I   88 88~~~~~ 88      8b      88    88 88  88  88 88~~~~~
\`8b d8'8b d8' 88.     88booo. Y8b  d8 \`8b  d8' 88  88  88 88.
 \`8b8' \`8d8'  Y88888P Y88888P  \`Y88P'  \`Y88P'  YP  YP  YP Y88888P

Site designed and developed by Aiden Gaul.
`;

const COMMANDS: Record<string, string> = {
  help: `
  \n
  ls - list files found in the current directory
  cd - change directory to one found in the current directory
  open - open a file in the current directory
  about - learn a little bit about me
  contacts - lists my contact information
  clear - clear the console
  `,

  about: `
  My name is:
  \n
   .d8b.  d888888b d8888b. d88888b d8b   db 
  d8' \`8b   \`88\'   88  \`8D 88'     888o  88 
  88ooo88    88    88   88 88ooooo 88V8o 88 
  88~~~88    88    88   88 88~~~~~ 88 V8o88 
  88   88   .88.   88  .8D 88.     88  V888 
  YP   YP Y888888P Y8888D' Y88888P VP   V8P 
                                          
                                          
   d888b   .d8b.  db    db db               
  88' Y8b d8' \`8b 88    88 88               
  88      88ooo88 88    88 88               
  88  ooo 88~~~88 88    88 88               
  88. ~8~ 88   88 88b  d88 88booo.          
   Y888P  YP   YP ~Y8888P' Y88888P
  \n
  I graduated from the University of Florida in 2025 with a Bachelor of Science in   
  Computer Science Engineering and a minor in Statistics. 
  \n
  I self taught myself how to code in middle school by following Youtube videos
  with the sole goal of being able to compete with bots buying up limited edition
  shoes that I wanted. Along the way, I fell in love with coding and the constant
  learning curve that I faced when trying to accomplish new things. 
  \n
  These days, I spend more time designing and building web applications like this
  one instead of battling the newest antibots. I also have found a knack for data
  analytics and finding creative ways to present insights in a more digestible way.
  `,

  contacts: `
  \n
  You can find me on LinkedIn at: https://www.linkedin.com/in/aiden-gaul/
  You can also find me on GitHub at: https://www.github.com/aiden-gaul
  Or, you can email me at: agaul7113@gmail.com
  `,

  clear: "clear",

  open: ``,
};

export default function ConsoleWindow({setShowConsoleWindow}: {
  setShowConsoleWindow: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([messageStart]);
  const [typingQueue, setTypingQueue] = useState<string[]>([]);
  const [currDir, setCurrDir] = useState<DirectoryNode>(fileSystem);
  const [path, setPath] = useState<string[]>([]); // breadcrumb path
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const textInput = useRef<HTMLInputElement | null>(null);

  const { setShowTextFileWindow, 
    setTextFileName } = useWindowManager();

  // enqueue for typing
  function enqueueLines(newLines: string[]) {
    setTypingQueue((prev) => [...prev, ...newLines]);
  }

  // handle Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand({
        command: input,
        currDir,
        path,
        enqueueLines,
        setInput,
        setCurrDir,
        setPath,
        setTextFileName,
        setShowTextFileWindow,
      });
    }
  };

  // typewriter effect
  useEffect(() => {
    if (typingQueue.length === 0) return;
    const t = setTimeout(() => {
      setLines((prev) => [...prev, typingQueue[0]]);
      setTypingQueue((q) => q.slice(1));
    }, 50);
    return () => clearTimeout(t);
  }, [typingQueue]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "instant" });
  }, [lines]);

  return (
    <div className="">
      <AppContainer header={true} headerText="Console" closeButton={true} closeFunction={setShowConsoleWindow}>
        <div className="bg-[#012456] w-256 h-128 text-white text-xl p-4 overflow-auto" onClick={() => textInput.current?.focus()}>
          <div className={`whitespace-pre-wrap ${vt323.className}`}>
            {lines.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span>{`/${path.join("/")}  >`}</span>
            <input
              ref={textInput}
              type="text"
              size={100}
              className={`bg-transparent outline-none text-white ${vt323.className}`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
      </AppContainer>
    </div>
  );
}