export default function LinuxFileManager() { 
    return (
        <div className="w-full h-full bg-white p-4 overflow-auto text-xl">
            <h1 className="text-4xl">Linux Virtual File Manager</h1>
            <br />

            <h2 className="text-3xl">Technical Stack</h2>
            <ul className="list-disc pl-5">
                <li>C++</li>
                <li>C</li>
                <li>FUSE</li>
                <li>Linux Kernel</li>
                <li>Man Files</li>
            </ul>
            <br />

            <h2 className="text-3xl">About the Project</h2>
            <p className="max-w-4xl">
                I built a FUSE-based, userspace filesystem daemon that lets you mount and interact with classic WAD file archives as if they were normal directories. Under the hood, I wrote a C++ library to parse the WAD header, read and write its lump descriptors, and expose a clean in-memory tree of files and folders. Map markers (E#M#) become read-only directories, namespace markers (X_START/X_END) become mutable folders, and lumps show up as individual files you can open, read, write, and even create from scratch.
                <br />
                <br />  
                On top of that library, I implemented a FUSE daemon that hooks into six core callbacks: getattr, readdir, read, write, mkdir, and mknod. This allows for seamless interaction with the WAD filesystem, letting you navigate directories, read files, and even create new lumps directly from the command line or any file manager that supports FUSE mounts. The result is a fully functional virtual file manager for WAD files that feels like working with any other directory on your Linux system.
            </p>
            <br />
        </div>
    )
}