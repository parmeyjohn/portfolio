import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, Fa } from "react-icons/fa";
import { ArtProject, CodeProject } from "./components/Project";
import codingProjects from "./data/codeProjects.json";
import artProjects from "./data/artProjects.json";

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
        <div className="bg-slate-200 rounded-xl h-60 w-60 fixed m-8 z-10">
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

        <div className="w-full flex flex-col h-auto">
          <div className="bg-green-300 w-60 h-fit rounded-xl p-4 m-8 sticky top-72">
            <h2 className="text-lg">Experience</h2>
          </div>
          <div className="flex justify-between w-full h-auto">
            <div className="w-60 flex m-8 justify-end sticky top-80">
              <div className="bg-green-300 w-fit p-4 rounded-xl ">
                <h2 className="text-lg">2022</h2>
              </div>
            </div>
            <div className="h-full w-96">
              <div className="bg-green-900 rounded-xl p-4 m-8 h-fit">
                <h1 className="text-md">B.S. in Computer Science @ UCI </h1>
                <h4 className="ml-2">Relevant Coursework:</h4>
                <ul className="ml-4">
                  <li>Data Structure Implementation and Analysis</li>
                  <li>Design and Analysis of Algorithms</li>
                  <li>Principles in System Design</li>
                  <li>Data Management</li>
                  <li>Machine Learning and Data Mining</li>
                </ul>
              </div>

              <div className="bg-green-900 rounded-xl p-4 m-8 h-fit">
                <h1 className="text-md">
                  Software Engineer Capstone @ Knowde
                </h1>
                <ul className="ml-4">
                  <li>
                    Developed application that ingests, parses, and extracts
                    data from chemical PDF documents
                  </li>
                  <li>
                    Automated the process of manually parsing and entering
                    sensitive data into their database from 200+ documents
                    weekly
                  </li>
                  <li>
                    Expedited document parsing from 6+ minutes manually to less
                    than 1 minute per doc
                  </li>
                  <li>
                    Attained steady and accurate progress using agile
                    development with Jira, and regression testing
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div className="flex justify-between w-full h-auto">
              <div className="w-60 flex m-8 justify-end sticky top-80">
                <div className="bg-green-300 w-fit p-4 rounded-xl ">
                  <h2 className="text-lg">2021</h2>
                </div>
              </div>
              <div className="h-full w-96">
                <div className="bg-green-900 rounded-xl p-4 m-8 h-fit">
                  <h1 className="text-md">Team Member @ Chipotle</h1>
                  <ul className="ml-2">
                    <li>
                      Amplified throughput on the cash register and food line in
                      a fast-paced team environment
                    </li>
                    <li>
                      Provided exemplary service to over 150 customers per shift
                    </li>
                  </ul>
                </div>

                <div className="bg-green-900 rounded-xl p-4 m-8 h-fit">
                  <h1 className="text-md">Sales Associate @ Vans</h1>
                  <ul className="ml-2">
                    <li>
                      Worked the shoe floor, cash register, and apparel deck
                      engaging with customers and assisting coworkers
                    </li>
                    <li>
                      Memorized dozens of shoe and apparel styles to improve
                      ability to meet customers’ needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

        </div>
      </div>

      <div
        id="about"
        className="p-4 my-20  w-full h-screen flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl my-10 font-semibold">About</h2>
        <div className="p-8 rounded-xl w-full h-auto bg-slate-100 max-w-4xl"></div>
      </div>

      <div
        id="experience"
        className="w-full h-auto p-4 my-20 flex flex-col items-center before:bg-teal-900 before:h-full before:absolute"
      >
        <h2 className="text-4xl my-10 font-semibold">Experience</h2>

        <div className="w-full h-auto max-w-4xl">
          <div className="p-8 my-10 rounded-xl w-full h-auto bg-slate-100">
            <h3 className="text-xl font-semibold mb-2">
              Software Engineer Capstone at Knowde
            </h3>
            <ul className="ml-4">
              <li>
                Developed application that ingests, parses, and extracts data
                from chemical PDF documents
              </li>
              <li>
                Automated the process of manually parsing and entering sensitive
                data into their database from 200+ documents weekly
              </li>
              <li>
                Expedited document parsing from 6+ minutes manually to less than
                1 minute per doc
              </li>
              <li>
                Attained steady and accurate progress using agile development
                with Jira, and regression testing
              </li>
            </ul>
          </div>

          <div className="p-8 my-10 rounded-xl w-full h-auto bg-slate-100">
            <h3 className="text-xl font-semibold mb-2">
              Team Member at Chipotle
            </h3>
            <ul className="ml-2">
              <li>
                Amplified throughput on the cash register and food line in a
                fast-paced team environment
              </li>
              <li>
                Provided exemplary service to over 150 customers per shift
              </li>
            </ul>
          </div>

          <div className="p-8 my-10 rounded-xl w-full h-auto bg-slate-100">
            <h3 className="text-xl font-semibold mb-2">
              Sales Associate at Vans
            </h3>
            <ul className="ml-2">
              <li>
                Worked the shoe floor, cash register, and apparel deck engaging
                with customers and assisting coworkers
              </li>
              <li>
                Memorized dozens of shoe and apparel styles to improve ability
                to meet customers’ needs
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="w-full h-auto p-4 my-20 flex flex-col items-center"
      >
        <h2 className="text-4xl my-10 font-semibold">Projects</h2>
        <CodeProject project={codingProjects["bapple"]} />
        <CodeProject project={codingProjects["knowde"]} />
        <CodeProject project={codingProjects["portfolio64"]} />
        {/*
        <h3 className='white'>art</h3>
        <ArtProject project={artProjects['boxer']} />
        <ArtProject project={artProjects['portrait_1']} />
        */}
      </div>

      <div className="bot-page-wave"></div>
    </div>
  );
};

export default App;
