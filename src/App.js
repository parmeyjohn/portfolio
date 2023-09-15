import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("johncuviello99@gmail.com");

  return (
    <div className="w-2xl h-auto w-full bg-gradient-to-b from-indigo-950 to-slate-950">
      <nav className=" sticky mx-auto flex h-20 w-full max-w-2xl items-center justify-between p-8 text-lg text-indigo-100 md:flex">
        <p className="my-auto whitespace-nowrap p-1 text-white ">
          John Cuviello
        </p>
        <div className="flex hidden items-center justify-end md:block">
          <div className="flex">
            <a
              href="#about"
              className="p-2 text-blue-100 transition-all hover:text-white hover:underline"
            >
              About
            </a>
            <a
              href="#projects"
              className="p-2 text-blue-100 transition-all hover:text-white hover:underline"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="p-2 text-blue-100 transition-all hover:text-white hover:underline"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="p-2 text-blue-100 transition-all hover:text-white hover:underline "
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="mx-auto mb-16 h-full w-full max-w-2xl ">
        <div className="z-20 mx-auto flex h-auto w-[90%] flex-col items-center justify-center rounded-xl border-b-8 border-b-blue-400 bg-slate-200 py-16 md:w-full md:flex-row">
          <div className="flex items-center justify-center md:pr-36">
            <img
              src={require("./images/editedProfile.png")}
              alt="Portrait of John Cuviello"
              className="mx-auto h-40 w-40 rounded-full border border-emerald-800 bg-green-500 object-cover object-top -hue-rotate-30 transition-all duration-100 ease-in-out hover:bg-emerald-600"
            ></img>
          </div>
          <div className="my-4 h-fit text-center">
            <p className="mb-2 text-xs">Hi, I'm</p>
            <p className="text-3xl font-medium text-blue-700">John Cuviello</p>
            <p className="my-2 text-center text-slate-600">Web Developer</p>

            <div className="my-4 flex h-fit w-full items-center justify-center">
              <a
                download="johnCuvielloResume"
                href={require("./johnCuvielloResume.pdf")}
              >
                <button className="mr-4 rounded-full border border-b-2 border-emerald-600 p-2  px-4 -hue-rotate-30 transition-all duration-75 hover:bg-green-500 hover:-hue-rotate-30">
                  Resume
                </button>
              </a>
              <a href="#contact">
                <button className="rounded-full border border-b-2 border-emerald-800 bg-green-500 p-2 px-4 -hue-rotate-30 transition-all duration-75 hover:bg-emerald-600">
                  Contact
                </button>
              </a>
            </div>
            <div className="my-4 flex h-fit justify-center ">
              <a
                href="https://www.linkedin.com/in/johncuv/"
                className="point-on front mr-4 h-fit px-2 transition-all duration-100  ease-in-out hover:text-blue-700"
              >
                <FaLinkedin className="" href="google.com" size="2rem" />
              </a>
              <a
                href="https://github.com/parmeyjohn"
                className="point-on front h-fit px-2 transition-all duration-100  ease-in-out hover:text-blue-700"
              >
                <FaGithub size="2rem" />
              </a>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="my-24 flex h-auto w-full flex-col items-center justify-between md:flex-row md:items-start"
        >
          <div className="sticky top-72 mb-8 h-fit w-60 rounded-xl border-b-4 border-blue-600 bg-blue-300 p-4 text-center md:mb-0">
            <h2 className="text-lg ">About</h2>
          </div>
          <div className="z-index-fix z-10 h-auto w-[90%]  md:w-80">
            <div className="h-fit w-full rounded-xl border-b-8 border-b-blue-400 bg-slate-200 p-4">
              <ul className="">
                <li className="p-2">I'm a dev and artist based in CA.</li>
                <li className="p-2">
                  I recently graduated from UCI with a BS in Computer Science
                  and am looking for new opportunities.
                </li>
                <li className="p-2">
                  I've been focusing on web development with React and
                  JavaScript, but I love learning new languages and tech.
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
          className="mb-24 flex h-auto w-full flex-col items-center justify-between md:flex-row md:items-start"
        >
          <div className="sticky top-72 mb-8 h-fit w-60 rounded-xl border-b-4 border-blue-600 bg-blue-300 p-4 text-center md:mb-0">
            <h2 className="text-lg">Projects</h2>
          </div>
          <div className="z-index-fix z-10 h-full w-[90%]  md:w-80">
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
                  " Format entries with rich-text like popular editing tools." +
                  " Sort entries by title or date to track when you played your favorite game."
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
                image={"jeanieImage.PNG"}
                github={"https://github.com/parmeyjohn/ecommerce"}
                desc={
                  "Full-stack web app prototype for future ecommerce project." +
                  " Fully functional cart and checkout with Stripe API." +
                  " Search, sort, and filter options for hundreds of items." +
                  " Optimized SEO with server side rendering using NextJS." +
                  " Cloud auth and storage using Firebase."
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
              image={"bappleImage.PNG"}
              desc={
                "Web crawler created to index tens of thousands of UCI web pages." +
                " Indexed pages based on term frequency and html tags." +
                " Optimized queries to process in under 300 ms."
              }
              tags={["Python", "Flask", "JavaScript", "HTML", "CSS"]}
              link={"https://dennishc.github.io/bapple.html"}
            ></Project>
          </div>
        </div>

        <div
          id="experience"
          className="flex h-auto w-full flex-col items-center justify-between md:flex-row md:items-start"
        >
          <div className="sticky top-72 mb-8 h-fit w-60 rounded-xl border-b-4 border-blue-600 bg-blue-300 p-4 text-center md:mb-0">
            <h2 className="text-lg">Experience</h2>
          </div>
          <div className="z-index-fix z-10 h-full w-[90%]  md:w-80">
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
                  " Automated parsing from 200+ documents weekly and reduced processing time by 83%" +
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
          className="my-24 flex h-auto w-full flex-col items-center justify-between md:flex-row md:items-start"
        >
          <div className="sticky top-72 mb-8 h-fit w-60 rounded-xl border-b-4 border-blue-600 bg-blue-300 p-4 text-center md:mb-0">
            <h2 className="text-lg ">Contact</h2>
          </div>
          <div className="z-index-fix z-10 mb-72 h-auto w-[90%]  md:w-80">
            <div className="h-fit w-full rounded-xl border-b-8 border-b-blue-400 bg-slate-200 p-6">
              <p className="text-lg text-blue-700">Links:</p>
              <a
                className="my-2 flex items-center text-lg transition-all  duration-100 ease-in-out hover:text-blue-700 hover:underline"
                href={`mailto: ${email}`}
              >
                <FaEnvelope></FaEnvelope>
                <p className="ml-2">{email}</p>
              </a>
              <a
                className="my-2 flex items-center text-lg transition-all duration-100  ease-in-out hover:text-blue-700 hover:underline"
                href={"https://www.linkedin.com/in/johncuv/"}
              >
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
