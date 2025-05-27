export default function PeerToPeerFileSharing() { 
    return (
        <div className="w-full h-full bg-white p-4 overflow-auto text-xl">
            <h1 className="text-4xl">Peer to Peer File Sharing Application</h1>
            <p>
                <a href="https://github.com/CollinQuigley/cntproject" target="_blank" className="hover:text-blue-400">Github Link</a>
            </p>
            <br />

            <h2 className="text-3xl">Technical Stack</h2>
            <ul className="list-disc pl-5">
                <li>Java</li>
                <li>WebSockets</li>
            </ul>
            <br />

            <h2 className="text-3xl">About the Project</h2>
            <p className="max-w-4xl">
                This project is a peer-to-peer file-sharing system that I developed as part of a networking course at the University of Florida. Each peer runs as a standalone process, initially configured via a shared config file that specifies hostnames, ports, and whether a peer initially holds the target file. Using a custom file-reader module, each peer loads global settings and peer data, then spins up a server listener thread and a client thread for every other peer.
                <br />
                <br />
                Peers perform a TCP handshake, exchange bitfield messages to advertise which file chunks they possess, and negotiate choking/unchoking based on download rates (including an optimistic unchoke). Whenever a peer acquires a new chunk, it broadcasts a `have` message; interested peers request missing pieces one at a time. A BitField abstraction tracks chunk ownership, and a ConnectionThread object manages message framing, I/O streams, and download-rate calculation. Once all chunks are collected, each peer’s reassembles the complete file locally.
                <br />
                <br />
                Additionally, to aid in debugging and performance analysis, I built a logger that records every connection event, choke/unchoke decision, and piece download. 
            </p>
            <br />
        </div>
    )
}