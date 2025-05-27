export default function PersonalWebsite() {
    return (
        <div className="w-full h-full bg-white p-4 overflow-auto text-xl">
            <h1 className="text-4xl">Personal Portfolio Website</h1>
            <p>
                <a href="" target="_blank" className="hover:text-blue-400">Github Link</a> | 
                <a href="" target="_blank" className="hover:text-blue-400"> Figma Design Files</a>
            </p>
            <br />

            <h2 className="text-3xl">Technical Stack</h2>
            <ul className="list-disc pl-5">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vercel</li>
                <li>Figma</li>
            </ul>
            <br />

            <h2 className="text-3xl">About the Project</h2>
            <p className="max-w-4xl">
                It has been a very long time since I have had an official portfolio website, but I have been meaning to make one for a while
                now. My problem with portfolio websites is that they always seem to be the same. I hope, if nothing else, that this one 
                is unique in some way.
                <br/>
                <br/>
                I took heavy inspiration from Windows 95/98 for the design of this website. I wanted to create a nostalgic feel,
                while also making it functional and easy to navigate. The design is meant to be simple, yet effective, allowing 
                visitors to easily find the information they are looking for. 
                <br />
                <br />
                The website is built using Next.js, TypeScript, and Tailwind CSS. I chose Next.js for its layout rendering capabilities,
                which allows for me to easily overlay different component windows over the desktop background. As for the technical aspects
                of the website, most of the magic happens in the `/app/components/ConsoleWindow` file where I have implemented
                a simplified virtual file system and terminal to serve custom commands. The windows are organized in a priority stack,
                allowing for visitors to interact with multiple windows at once, similar to a real desktop environment.
                <br />
                <br />
                The website is hosted on Vercel, which provides a fast and reliable hosting solution, along with a basic CI/CD pipeline
                linked to the project's Github. I also used Figma to design a full mockup of the website before starting development, 
                which helps me visualize the layout and functionality of the site.
            </p>
            <br />
        </div>
    )
}