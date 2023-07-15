import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, Fa } from "react-icons/fa";
import { ArtProject, CodeProject } from "./components/Project";
import codingProjects from "./data/codeProjects.json";
import artProjects from "./data/artProjects.json";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";

const App = () => {
  return (
    <div className="bg-slate-900 h-screen w-full">
      <nav className="hidden bg-emerald-600 text-white fixed w-full rounded-b-xl">
        <div className="p-4 max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1>John Cuviello</h1>
          </div>
          <div className="flex justify-around">
            <a href="#about" className="px-2">
              About
            </a>
            <a href="#experience" className="px-2">
              Experience
            </a>
            <a href="#projects" className="px-2">
              Projects
            </a>
            <a
              href="https://www.linkedin.com/in/johncuv/"
              className="point-on front px-2"
            >
              <FaLinkedin href="google.com" color="white" size="1.5rem" />
            </a>
            <a href="instagram.com" className="point-on front px-2">
              <FaInstagram color="white" size="1.5rem" />
            </a>
            <a
              href="https://github.com/parmeyjohn"
              className="point-on front px-2"
            >
              <FaGithub color="white" size="1.5rem" />
            </a>
          </div>
        </div>
      </nav>

      <div className="w-full h-full max-w-3xl mx-auto overflow-y-auto">
        <div className="bg-slate-200 rounded-xl h-60 w-60 fixed m-8 z-20">
          <spline-viewer url="https://prod.spline.design/wDQw1bMkAQ9L5avp/scene.splinecode"></spline-viewer>
        </div>

        <div className="flex justify-between w-full h-auto">
          <div className="bg-green-300 w-60 h-fit rounded-xl p-4 m-8 sticky top-72">
            <h2 className="text-lg">About</h2>
          </div>
          <div className="h-full w-96">
            <div className="bg-green-900 rounded-xl p-4 m-8 h-fit">
              <ul>
                <h1 className="text-xl">Hi, I'm John, </h1>
                <li>a dev and artist based in California.</li>
                <li>
                  I recently graduated from UCI with a BS in Computer Science
                  and am currently looking for new opportunities.
                </li>
                <li>
                  I've mostly been using JavaScript and Python for web
                  development, but I'm always willing to learn a new language or
                  framework for a project.
                </li>
                <li>
                  Feel free to check out my projects down below or contact me on
                  my socials.
                </li>
                <li>a dev and artist based in California.</li>
                <li>
                  I recently graduated from UCI with a BS in Computer Science
                  and am currently looking for new opportunities.
                </li>
                <li>
                  I've mostly been using JavaScript and Python for web
                  development, but I'm always willing to learn a new language or
                  framework for a project.
                </li>
                <li>
                  Feel free to check out my projects down below or contact me on
                  my socials.
                </li>
                <li>a dev and artist based in California.</li>
                <li>
                  I recently graduated from UCI with a BS in Computer Science
                  and am currently looking for new opportunities.
                </li>
                <li>
                  I've mostly been using JavaScript and Python for web
                  development, but I'm always willing to learn a new language or
                  framework for a project.
                </li>
                <li>
                  Feel free to check out my projects down below or contact me on
                  my socials.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full h-auto">
          <div className="bg-green-300 w-60 h-fit rounded-xl p-4 m-8 sticky top-72">
            <h2 className="text-lg">Projects</h2>
          </div>
          <div className="h-full w-96">
          <Project
                title={"Cooldown"}
                link={"usecooldown.com"}
                bullets={[
                  "Constructed a responsive front-end to display journal entries using React and Tailwind CSS",
                  "Developed a back-end REST API with Node, Express, and MongoDB Atlas",
                  "Authenticated users via JSON web tokens, password hashing, and protected React Router client-side routes",
                  "Consumed external API to populate images and titles based on user search results",
                  "Applied end-to-end, integration, and unit testing with Cypress and Jest"
                ]}
                tags={[
                  "React",
                  "JavaScript",
                  "TailwindCSS",
                  "Node",
                  "Express",
                  "MongoDB",
                  "Cypress",
                  "Jest",
                  "MongoDB",
                ]}
              ></Project>

          </div>
        </div>

        <div className="w-full flex flex-col h-auto">
          <div className="bg-green-300 w-60 h-fit rounded-xl p-4 m-8 sticky top-72 z-10">
            <h2 className="text-lg">Experience</h2>
          </div>
          <div className="flex justify-between w-full h-auto">
            <div className="w-60 flex mx-8 justify-end sticky top-80">
              <div className="bg-green-300 w-fit p-4 rounded-xl ">
                <h2 className="text-lg">2022</h2>
              </div>
            </div>
            <div className="h-full w-96">
              <Experience
                title={"B.S in Computer Science"}
                company={"UCI"}
                subtitle={"Relevant Coursework:"}
                bullets={[
                  "Data Structure Implementation and Analysis",
                  "Design and Analysis of Algorithms",
                  "Principles in System Design",
                  "Data Management",
                  "Machine Learning and Data Mining"
                ]}
              ></Experience>

              <Experience
                title={"Software Engineer Capstone"}
                company={"Knowde"}
                bullets={[
                  "Amplified throughput on the cash register and food line in a fast-paced team environment",
                  "Provided exemplary service to over 150 customers per shift",
                ]}
              ></Experience>
            </div>
          </div>
          <div className="flex justify-between w-full h-auto">
            <div className="w-60 flex m-8 justify-end sticky top-80">
              <div className="bg-green-300 w-fit p-4 rounded-xl ">
                <h2 className="text-lg">2021</h2>
              </div>
            </div>
            <div className="h-full w-96">
              <Experience
                title={"Team Member"}
                company={"Chipotle"}
                bullets={[
                  "Amplified throughput on the cash register and food line in a fast-paced team environment",
                  "Provided exemplary service to over 150 customers per shift",
                ]}
              ></Experience>
              
              <Experience
                title={"Sales Associate"}
                company={"Vans"}
                bullets={[
                  "Worked the shoe floor, cash register, and apparel deck engaging with customers and assisting coworkers",
                  "Memorized dozens of shoe and apparel styles to improve ability to meet customers’ needs",
                ]}
              ></Experience>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between w-full h-auto">
          <div className="bg-green-300 w-60 h-fit rounded-xl p-4 m-8 sticky top-72">
            <h2 className="text-lg">Projects</h2>
          </div>
          <div className="h-full w-96">
            <div className="bg-green-900 rounded-xl p-4 m-8 h-fit">
              
            </div>
          </div>
        </div>
      
      
      
      
      
      
      
      
      
      
      </div>
    </div>
  );
};

export default App;
