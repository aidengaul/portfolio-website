export default function LearnOS() { 
    return (
        <div className="w-full h-full bg-white p-4 overflow-auto text-xl">
            <h1 className="text-4xl">LearnOS</h1>
            <p>
                <a href="" target="_blank" className="hover:text-blue-400">Github Link</a> | 
                <a href="" target="_blank" className="hover:text-blue-400"> Figma Design Files</a> | 
                <a href="https://oslearn.app/" target="_blank" className="hover:text-blue-400"> https://oslearn.app/</a>
            </p>
            <br />

            <h2 className="text-3xl">Technical Stack</h2>
            <ul className="list-disc pl-5">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>MySQL</li>
                <li>Docker</li>
                <li>Postman</li>
                <li>Google Cloud Platform</li>
                <li>Figma</li>
            </ul>
            <br />

            <h2 className="text-3xl">About the Project</h2>
            <p className="max-w-4xl">
                LearnOS is a web application designed to help users learn about operating systems through interactive lessons and quizzes.
                The application is built using React.js for the frontend, with Tailwind CSS for styling. The backend is powered by a Java Spring Boot application,
                which handles the business logic and data storage. The application uses MySQL as the database to store user data, lessons, quiz results, and analytics data.
                <br/>
                <br/>
                I built this project, alongside a team of 2 other students, as part of a software engineering course at the University of Florida.
                We worked with the operating systems professor to create a tool that would help students learn about operating systems in a more interactive way.
                The application features a variety of lessons on different operating system topics, such as process management, memory management, and file systems.
                Students can take quizzes to test their knowledge and track their progress through the lessons. The application also includes an analytics dashboard
                for instructors to view student progress and performance.
                <br />
                <br />
                My role in this project was primarily focused on the frontend design and development, where I implemented the administrative views using React.js and Tailwind CSS.
                This included panels for editing and creating lessons, quizzes, and viewing analyitcs data.
                <br />
                <br />
                I also contributed to the backend development, specifically in creating a role-based authentication and authorization system using Google OAuth2 and JWT.
                <br />
                <br />
                The application is hosted on Google Cloud Platform, utilizing Cloud Run for the backend, Cloud Storage with a Load Balancer for the frontend, and Cloud SQL for the MySQL database.
                Additionally, I configured a Private Network to secure the communication between the backend and database services.
            </p>
            <br />
        </div>
    )
}