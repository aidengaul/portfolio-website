"use client";
import { useState, useEffect, useRef } from "react";
import AppContainer from "./AppContainer";
import { vt323 } from "../layout";
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
  setLines: React.Dispatch<React.SetStateAction<string[]>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setCurrDir: React.Dispatch<React.SetStateAction<DirectoryNode>>;
  setPath: React.Dispatch<React.SetStateAction<string[]>>;
  setTextFileName: React.Dispatch<React.SetStateAction<string>>;
  setShowTextFileWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

const handleCommand = ({
  command,
  currDir,
  path,
  setLines,
  setInput,
  setCurrDir,
  setPath,
  setTextFileName,
  setShowTextFileWindow
}: HandleCommandArgs) => {
    const trimmed = command.trim();
    const tokens = trimmed.split(" ");
    const base = tokens[0];
    const arg = tokens[1];

    // handle ls command variants
    if (base === "ls") {
    let targetDir: DirectoryNode | null = null;

    if (!arg || arg === ".") {
      targetDir = currDir;
    } else {
      const cleanedPath = normalizePath(arg, path);
      targetDir = findDir(cleanedPath);
    }

    if (targetDir) {
      const contents = ls(targetDir);
      setLines((prev) => [...prev, `> ${trimmed}`, `${contents}\n`]);
    } else {
      setLines((prev) => [...prev, `> ${trimmed}`, `\n  Directory not found: ${arg}\n\n`]);
    }

    setInput("");
    return;
  }

  if (base === "cd") {
    if (!arg) {
      setCurrDir(fileSystem);
      setPath([]);
      setLines((prev) => [...prev, `> ${trimmed}`, `\n  Now in ${fileSystem.name}. Use \`ls\` to view files in this directory.\n\n`]);
    }
    else if (arg === ".") {
      setLines((prev) => [...prev, `> ${trimmed}`, `\n  Now in /${path.join("/") || ""}. Use \`ls\` to view files in this directory.\n\n`]);
    } 
    else {
      const cleanedPath = normalizePath(arg, path);
      const newDir = findDir(cleanedPath);

      if (newDir) {
        setCurrDir(newDir);
        setPath(cleanedPath);
        setLines((prev) => [
          ...prev,
          `> ${trimmed}`,
          `\n  Now in /${cleanedPath.join("/") || ""}. Use \`ls\` to view files in this directory.\n\n`,
        ]);
      } else {
        setLines((prev) => [...prev, `> ${trimmed}`, `\n  Directory not found: ${arg}\n\n`]);
      }
    }

    setInput("");
    return;
  }

  if (base === "open") {
    const file = currDir.children.find(
      (child) => child.type === "file" && child.name === arg
    ) as FileNode;
    if (file) {
      setLines((prev) => [...prev, `> ${trimmed}`, `\n  Opening file: ${file.name}\n\n`]);
      setTextFileName(file.name);
      setShowTextFileWindow(true);
    } else {
      setLines((prev) => [...prev, `> ${trimmed}`, `\n  File not found: ${arg}\n\n`]);
    }
    setInput("");
    return;
  }

    // about, contacts, help
    if (["about", "contacts", "help"].includes(base)) {
      const response = COMMANDS[base];
      setLines((prev) => [...prev, `> ${trimmed}`, response]);
      setInput("");
      return;
    }

    // Default fallback
    setLines((prev) => [...prev, `> ${trimmed}`, `\n  Command not found: ${trimmed}\n\n`]);
    setInput("");
};

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
  ls - list files found in the current directory
  cd - change directory to one found in the current directory
  open - open a file in the current directory
  about - learn a little bit about me
  contacts - lists my contact information
  clear - clear the console
  `,

  about: `
  My name is:

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

  I graduated from the University of Florida in 2025 with a Bachelor of Science in   
  Computer Science Engineering and a minor in Statistics. 

  I self taught myself how to code in middle school by following Youtube videos
  with the sole goal of being able to compete with bots buying up limited edition
  shoes that I wanted. Along the way, I fell in love with coding and the constant
  learning curve that I faced when trying to accomplish new things. 

  These days, I spend more time designing and building web applications like this
  one instead of battling the newest antibots. I also have found a knack for data
  analytics and finding creative ways to present insights in a more digestible way.
  `,

  contacts: `
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
  const [currDir, setCurrDir] = useState<DirectoryNode>(fileSystem);
  const [path, setPath] = useState<string[]>([]); // breadcrumb path
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const { setShowTextFileWindow, 
    setTextFileName } = useWindowManager();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand({
      command: input,
      currDir,
      path,
      setLines,
      setInput,
      setCurrDir,
      setPath,
      setTextFileName,
      setShowTextFileWindow
    });
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return (
    <div className="">
      <AppContainer header={true} headerText="Console" closeButton={true} closeFunction={setShowConsoleWindow}>
        <div className="bg-[#012456] w-256 h-128 text-white text-xl p-4 overflow-auto">
          <div className={`whitespace-pre-wrap ${vt323.className}`}>
            {lines.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span>{`/${path.join("/")}  >`}</span>
            <input
              type="text"
              size={50}
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