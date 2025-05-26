export default function Resume() {
    return (
        <div className="w-full h-full bg-white p-4 overflow-auto text-xl">
            <h1 className="text-4xl">Aiden Gaul</h1>
            <p>813-527-4176 | agaul7113@gmail.com | linkedin.com/in/aiden-gaul/ | github.com/aidengaul</p>
            <br />

            <h2 className="text-3xl">Education</h2>
            <div className="flex flex-row">
                <p className="text-2xl">University of Florida</p>
                <p className="ml-auto">May 2021 – May 2025</p>
            </div>
            <div className="flex flex-row">
                <p>Bachelor of Science in Computer Science</p>
                <p className="ml-auto">Gainesville, FL</p>
            </div>
            <ul className="list-disc pl-5">
                <li>3.85 GPA</li>
                <li>Dean’s List</li>
            </ul>
            <br />

            <h2 className="text-3xl">Work Experience</h2>
            <div className="flex flex-row">
                <p className="text-2xl" >Technology Innovation Intern</p>
                <p className="ml-auto">May 2024 – Jul.</p>
            </div>
            <div className="flex flex-row">
                <p>Darden Restaurants</p>   
                <p className="ml-auto">Orlando, FL</p>
            </div>
            <ul className="list-disc pl-5">
                <li>Developed a configurable Next.JS platform, improving Google Lighthouse SEO performance by 8.7%</li>
                <li>Integrated production APIs to deliver real-time menu and location data across multiple brand platforms</li>
                <li>Coordinated cross-functional teams to define technical requirements and achieve project milestones on schedule</li>
                <li>Rebuilt core UI components from scratch to eliminate bloat and unnecessary dependencies</li>
                <li>Implemented server-side rendering (SSR), resulting in an 89.5% improvement in Google Lighthouse performance</li>
            </ul>
            <br />

            <div className="flex flex-row">
                <p className="text-2xl" >Customer Care Associate</p>
                <p className="ml-auto">May 2018 – Aug. 2022</p>
            </div>
            <div className="flex flex-row">
                <p>AYCD Inc</p>
                <p className="ml-auto">Remote</p>
            </div>
            <ul className="list-disc pl-5">
                <li>Optimized client hardware/software setups to improve performance and reduce repeat requests</li>
                <li>Resolved customer issues with professionalism and empathy, increasing satisfaction and retention</li>
                <li>Led a support team of 10, coordinating workflows to meet response time and service quality targets</li>
                <li>Provided personalized technical and customer support via digital platforms, ensuring high service standards</li>
            </ul>
            <br />

            <h2 className="text-3xl">Personal Projects</h2>
            <div className="flex flex-row">
                <p className="text-2xl">LearnOS | React.js, TailwindCSS, Java, Spring Boot, MySQL, Cloud Run, Cloud SQL</p>
                <p className="ml-auto">Jan. 2025 – Current</p>
            </div>
            <ul className="list-disc pl-5">
                <li>Engineering a learning assistant application featuring a React frontend and Java backend for 200+ students</li>
                <li>Incorporating nudging techniques to boost student engagement and improve content retention</li>
                <li>Implementing a role-based authentication and authorization system using Google OAuth2 and JWT</li>
                <li>Developing an administrative dashboard that empowers instructors to create and modify course content</li>
            </ul>
            <br />

            <div className="flex flex-row">
                <p className="text-2xl">Multiclass Image Classification Model | Python, PyTorch, NumPy, scikit-learn, CUDA</p>
                <p className="ml-auto">Apr. 2025</p>
            </div>
            <ul className="list-disc pl-5">
                <li>Optimized training with Adam optimizer, label smoothing, and systematic hyperparameter searches</li>
                <li>Architected a four block CNN model in PyTorch Conv → BatchNorm → ReLU → MaxPool → Dropout</li>
                <li>Achieved 79%+ overall accuracy on the test set, while demonstrating reliable performance across all 12 classes</li>
                <li>Built a preprocessing pipeline to normalize and augment 4,757 RGB images into stratified train/validation/test splits</li>
            </ul>
            <br />

            <div className="flex flex-row">
                <p className="text-2xl">Peer-to-Peer File Sharing Application | Java, Socket Programming</p>
                <p className="ml-auto">Jan. 2024 – Apr. 2024</p>
            </div>
            <ul className="list-disc pl-5">
                <li>Utilized multithreading to handle concurrent connections over TCP sockets</li>
                <li>Crafted algorithms for file chunking and reassembly, ensuring error-free transmissions</li>
                <li>Built a peer-to-peer file sharing application enabling users to exchange files without a centralized server</li>
                <li>Developed a discovery mechanism, enabling peers to efficiently locate others in the pool with missing file chunks</li>
            </ul>
            <br />

            <div className="flex flex-row">
                <p className="text-2xl">Linux File System Manager | C++, C, FUSE</p>
                <p className="ml-auto">Jan. 2024 – Apr. 2024</p>
            </div>
            <ul className="list-disc pl-5">
                <li>Created a C++ library to read and write WAD files, defining and managing the directory structure</li>
                <li>Developed a userspace daemon with the FUSE API to facilitate terminal access to the mounted virtual directory</li>
            </ul>
            <br />

            <div className="flex flex-row">
                <p className="text-2xl">Code-Sparks | React.js, JavaScript, Strapi, Docker</p>
                <p className="ml-auto">Aug. 2023 – Dec. 2023</p>
            </div>
            <ul className="list-disc pl-5">
                <li>Enabled the upload of block-based code to a remote compiler for execution on a connected Arduino device</li>
                <li>Collaborated with an Agile team to create a full-stack application introducing computing concepts to students</li>
                <li>Designed a dynamic React frontend to allow teachers to create and share custom Blockly code blocks with students</li>
            </ul>
            <br />

            <h2 className="text-3xl">Technical Skills</h2>
            <p className="text-bold">Languages: C, C++, Java, Python, JavaScript, R, SQL, HTML/CSS</p>
            <p className="text-bold">Frameworks: Node.js, React.js, Next.js, Oracle SQL, MySQL, Spring Boot</p>
            <p className="">Libraries: Pandas, NumPy, TensorFlow</p>
        </div>
    )
}