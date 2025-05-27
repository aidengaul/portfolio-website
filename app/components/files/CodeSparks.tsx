export default function CodeSparks() { 
    return (
        <div className="w-full h-full bg-white p-4 overflow-auto text-xl">
            <h1 className="text-4xl">Code Sparks</h1>
            <br />

            <h2 className="text-3xl">Technical Stack</h2>
            <ul className="list-disc pl-5">
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Blockly</li>
                <li>PostgreSQL</li>
                <li>Strapi</li>
                <li>Docker</li>
            </ul>
            <br />

            <h2 className="text-3xl">About the Project</h2>
            <p className="max-w-4xl">
                Code Sparks is an educational tool aimed at introducing coding concepts and block-based coding to gradeschool aged students in a fun and engaging way.
                This project was the first time I had been exposed to the Agile development methodology, and it posed a unique challenge for me at the time 
                as I had never worked on a project this large before. The original project was developed as part of a research project at the University of Florida,
                and my team was tasked with adding new features and functionality to the existing codebase.
                <br/>
                <br/>
                The particular feature my team focused was adding custom Blockly blocks to the existing codebase, which would allow students and instructors to create and share custom blocks. 
                This included modifying the React frontend to display a creation interface for custom blocks, as well as integrating with the Strapi backend to store and retrieve these blocks.
                <br />
                <br />
                Unfortunately for us, this particular aspect of the original project was not well documented, and I spent a significant amount of time 
                digging through different Github repositories to understand how the Blockly developers intended for custom blocks to be created. It seemed that
                this particular feature of Blockly had also not been fully fleshed out, and I had to work with the existing codebase to implement a solution that worked for our needs. 
                <br />
                <br />
                I was ultimately able to implement a rough solution that built upon the existing codebase to create, share, and upload custom Blockly blocks to connected Arduino devices.
                We used a remote server to compile the code and send it to the Arduino device, which allowed students to see their code running in real-time.
            </p>
            <br />
        </div>
    )
}