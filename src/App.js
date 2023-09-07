import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState('johncuviello99@gmail.com')
  
  return (
    <div className="h-auto w-full w-2xl bg-gradient-to-b from-indigo-950 to-slate-950">
      <nav className=" md:flex text-indigo-100 text-lg sticky h-20 w-full max-w-2xl p-8 mx-auto flex justify-between items-center">
        <p className="whitespace-nowrap p-1 text-white my-auto ">John Cuviello</p>
        <div className="flex justify-end items-center hidden md:block">
          <div className="flex">
            <a
              href="#about"
              className="p-2 hover:underline text-blue-100 hover:text-white transition-all"
            >
              About
            </a>
            <a
              href="#projects"
              className="p-2 hover:underline text-blue-100 hover:text-white transition-all"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="p-2 hover:underline text-blue-100 hover:text-white transition-all"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="p-2 hover:underline text-blue-100 hover:text-white transition-all "
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="w-full h-full max-w-2xl mx-auto mb-16">
        <div className="bg-slate-200 border-b-8 border-b-indigo-400 rounded-xl h-auto py-16 w-[90%] mx-auto p-4 z-20 flex flex-col md:flex-row items-center justify-center">
          <div className="flex justify-center items-center md:mr-24">
            <img
              src={require("./images/editedProfile.png")}
              alt="Portrait of John Cuviello"
              className="hover:bg-emerald-600  border transition-all duration-100 ease-in-out bg-green-500 border border-emerald-800 rounded-full w-40 h-40 object-cover object-top -hue-rotate-30 mx-auto"
            ></img>
          </div>
          <div className="h-fit text-center my-4">
            <p className="text-xs mb-2">Hi, I'm</p>
            <p className="text-3xl font-medium text-blue-900 pb-2">
              John Cuviello
            </p>
            <p className="text-center text-blue-600">Web Developer</p>

            <div className="flex justify-center w-full items-center my-4 h-fit">
              <button className="rounded-full border-b-2 mr-4 border border-emerald-600 -hue-rotate-30  hover:bg-green-500 hover:-hue-rotate-30 transition-all duration-75 p-2 px-4">
                Resume
              </button>
              <button className="rounded-full border border-b-2 border-emerald-800 bg-green-500 -hue-rotate-30 hover:bg-emerald-600 transition-all duration-75 p-2 px-4">
                Contact
              </button>
            </div>
            <div className="flex justify-center m-2 h-fit">
              <a
                href="https://www.linkedin.com/in/johncuv/"
                className="point-on front px-2 h-fit mr-4"
              >
                <FaLinkedin href="google.com" size="2rem" />
              </a>
              <a
                href="https://github.com/parmeyjohn"
                className="point-on front px-2 h-fit"
              >
                <FaGithub size="2rem" />
              </a>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="flex flex-col md:flex-row justify-between w-full h-auto my-24"
        >
          <div className="bg-blue-300 text-center w-60 h-fit rounded-xl p-4 mx-auto sticky border-b-4 top-72 border-blue-600">
            <h2 className="text-lg ">About</h2>
          </div>
          <div className="h-auto w-[90%] md:w-80 mx-auto z-10">
            <div className="bg-slate-200 border-b-8 border-b-indigo-400 w-full p-4 rounded-xl h-fit">
              <ul className="">
                <li className="p-2">I'm a dev and artist based in CA.</li>
                <li className="p-2">
                  I recently graduated from UCI with a BS in Computer Science
                  and am looking for new opportunities.
                </li>
                <li className="p-2">
                  Recently I've been focusing on web development with React and JavaScript,
                  but I'm always willing to learn new languages and tech.
                </li>
                <li className="p-2">
                  Feel free to check out my projects down below or contact me on
                  my socials!
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="projects"
          className="flex flex-col md:flex-row justify-between w-full h-auto mb-24"
        >
          <div className="bg-blue-300 w-60 h-fit rounded-xl p-4 mx-auto text-center sticky top-72 border-b-4 border-blue-600">
            <h2 className="text-lg">Projects</h2>
          </div>
          <div className="h-full w-[90%] md:w-80 mx-auto z-10">
            <div className="mb-16">
              <Project
                title={"Cooldown"}
                subtitle={"Full-stack Journal App"}
                link={"https://usecooldown.com"}
                github={"https://github.com/parmeyjohn/cooldown"}
                image={"cooldownImage.PNG"}
                desc={
                  "Web app for tracking and reflecting on gaming sessions." +
                  " Create personalized journals grouped by genre or title." +
                  " Format entries with rich-text just like your favorite editor." +
                  " Sort entries by title or date to track when and where you played your favorite game."
                }
                tags={[
                  "React",
                  "JavaScript",
                  "TailwindCSS",
                  "Node",
                  "Express",
                  "MongoDB",
                  "Cypress",
                  "Jest",
                ]}
              ></Project>
            </div>
            <div className="mb-16">
            <Project
              title={"Jeanie"}
              subtitle={"E-commerce App"}
              image={'jeanieImage.PNG'}
              github={"https://github.com/parmeyjohn/ecommerce"}
              desc={
                  "Web app for inital version of web store." +
                  " Fully functional cart and checkout with Stripe API." +
                  " Search ." +
                  " Sort entries by title or date to track when and where you played your favorite game."
                }
              bullets={[
                "Crafted an appealing front-end to navigate, filter, and sort products with React and Tailwind CSS",
                "Utilized NextJS for data fetching, routing, and server-side rendering for improved performance and SEO",
                "Stored data for 100+ products and images using Firestore and Firebase Cloud Storage",
                "Processed user purchases and customer data securely using the Stripe API",
              ]}
              tags={[
                "React",
                "JavaScript",
                "TailwindCSS",
                "NextJS",
                "Firebase",
                "StripeJS ",
              ]}
            ></Project>
            </div>
            <Project
              title={"Bapple"}
              subtitle={"Search Engine"}
              image={'bappleImage.PNG'}
              desc={
                  "Created to crawl and index tens of thousands of UCI web pages as a team of four." +
                  " Indexed pages based on term frequency and html tags." +
                  " Optimized queries to process in under 300 ms."
                }
              tags={[
                "Python",
                "Flask",
                "JavaScript",
                "HTML",
                "CSS"
              ]}
              link={"https://dennishc.github.io/bapple.html"}
            ></Project>
          </div>
        </div>

        <div
          id="experience"
          className="flex flex-col md:flex-row justify-between w-full h-auto"
        >
          <div className="bg-blue-300 w-60 h-fit rounded-xl p-4 mx-auto text-center sticky top-72 border-b-4 border-blue-600">
            <h2 className="text-lg">Experience</h2>
          </div>
          <div className="h-full w-[90%] md:w-80 mx-auto z-10">
            <div className="mb-16">
              <Experience
                title={"BS in Computer Science"}
                company={"UCI"}
                subtitle={"Relevant Coursework:"}
                bullets={[
                  "Data Structure Implementation and Analysis",
                  "Design and Analysis of Algorithms",
                  "Principles in System Design",
                  "Machine Learning and Data Mining",
                  "Information Retrieval",
                ]}
              ></Experience>
            </div>
            <div className="mb-16">
              <Experience
                title={"Software Engineer Capstone"}
                company={"Knowde"}
                desc={
                  "Developed tool using React and Flask to automate data extraction from PDFs." +
                  " Utilized numPy and pandas to clean and format tabular data." +
                  " Automated data from 200+ documents weekly and reduced processing time by 83%" +
                  " Tracked progress using Agile development with Jira, and regression testing."
                }
              ></Experience>
            </div>
            <div className="mb-16">
              <Experience
                title={"Team Member"}
                company={"Chipotle"}
                desc={
                  "Amplified throughput on the cash register and food line in a fast-paced team environment." +
                  " Provided exemplary service to over 100 customers per shift."
                }
              ></Experience>
            </div>
            <Experience
              title={"Sales Associate"}
              company={"Vans"}
              desc={
                "Engaged with customers on the shoe floor, cash register, and apparel deck." +
                " Memorized hundreds of shoe and apparel styles to improve ability to meet customer needs."
              }
            ></Experience>
          </div>
        </div>

        <div
          id="contact"
          className="flex flex-col md:flex-row justify-between w-full h-auto my-24"
        >
          <div className="bg-blue-300 text-center w-60 h-fit rounded-xl p-4 mx-auto sticky border-b-4 top-72 border-blue-600">
            <h2 className="text-lg ">Contact</h2>
          </div>
          <div className="h-auto mb-48 w-[90%] md:w-80 mx-auto z-10">
            <div className="bg-slate-200 border-b-8 border-b-indigo-400 w-full p-6 rounded-xl h-fit">
              
              <a className="flex items-center" href = {`mailto: ${email}`}>
                <FaEnvelope></FaEnvelope>
                <p className="ml-2">{email}</p>
              </a>
              <a className="flex items-center"  href = {"linkedin.com"}>
                <FaLinkedin></FaLinkedin>
                <p className="ml-2">johncuv</p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
