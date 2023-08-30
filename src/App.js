import { FaLinkedin, FaGithub, FaInstagram, Fa } from "react-icons/fa";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";

const App = () => {
  return (
    <div className=" h-auto w-full bg-gradient-to-b from-indigo-950 to-slate-950">

      <div className="w-full h-full max-w-3xl mx-auto ">
        <div className="bg-slate-200 rounded-xl h-60 w-60 fixed m-8 p-4 z-20 ">
        <img src={require('./images/portrait.JPG')} alt='Portrait of John Cuviello' className="rounded-full w-24 h-24 object-cover object-top -hue-rotate-15 mx-auto"></img>
          <div className=" flex-col items-center h-fit w-fit mx-auto">
            <h1 className="text-lg text-center">John Cuviello</h1>
            <h2>
              Full-stack developer
            </h2>
            <h2>
              Recent CS Grad @ UCI
            </h2>
            <h2>
              JavaScript, Python
            </h2>
          </div>
          <div className="flex justify-center m-2">

            <a
              href="https://www.linkedin.com/in/johncuv/"
              className="point-on front px-2 h-fit"
            >
              <FaLinkedin href="google.com" size="1.5rem" />
            </a>
            <a
              href="https://github.com/parmeyjohn"
              className="point-on front px-2 h-fit"
            >
              <FaGithub size="1.5rem" />
            </a>
          </div>
        </div>

        <div className="flex justify-between w-full h-auto">
          <div className="bg-blue-300 w-60 h-fit rounded-xl p-4 m-8 sticky top-72 border-b-4 border-blue-600">
            <h2 className="text-lg ">About</h2>
          </div>
          <div className="h-screen w-96">
            <div className="bg-gradient-to-t from-blue-300 to-blue-200 rounded-xl p-4 m-8 h-80">
              <h1 className="text-xl font-semibold text-blue-600 p-2">Hi, I'm John, </h1>
              <ul className="ml-2">

                <li className="pb-2">a dev and artist based in California.</li>
                <li className="pb-2">
                  I recently graduated from UCI with a BS in Computer Science
                  and am currently looking for new opportunities.
                </li>
                <li className="pb-2">
                  I've mostly been using JavaScript and Python for web
                  development, but I'm always willing to learn a new language or
                  framework for a project.
                </li>
                <li className="pb-2">
                  Feel free to check out my projects down below or contact me on
                  my socials.
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full h-auto">
          <div className="bg-blue-300 w-60 h-fit rounded-xl p-4 m-8 sticky top-72 border-b-4 border-blue-600">
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
                "Applied end-to-end, integration, and unit testing with Cypress and Jest",
              ]}
              tags={[
                "React",
                "JavaScript",
                "TailwindCSS",
                "Node",
                "Express",
                "MongoDB",
                "Cypress",
                "Jest"
              ]}
            ></Project>

            <Project
              title={"Fullstack E-commerce Site"}
              bullets={[
                "Crafted an appealing front-end to navigate, filter, and sort products with React and Tailwind CSS",
                "Utilized NextJS for data fetching, routing, and server-side rendering for improved performance and SEO",
                "Stored data for 100+ products and images using Firestore and Firebase Cloud Storage",
                "Processed user purchases and customer data securely using the Stripe API"
              ]}
              tags={[
                "React",
                "JavaScript",
                "TailwindCSS",
                "NextJS",
                "GCP",
                "StripeJS "
              ]}
            ></Project>
          </div>
        </div>

        <div className="w-full flex flex-col h-auto">
          <div className="bg-blue-300 w-60 h-fit rounded-xl p-4 m-8 sticky top-72 border-b-4 border-blue-600 z-10">
            <h2 className="text-lg">Experience</h2>
          </div>
          <div className="flex justify-between w-full h-auto">
            <div className="w-60 flex mx-8 my-2 justify-end sticky top-[22.5rem]">
              <div className="bg-blue-600 w-fit p-4 rounded-xl ">
                <h2 className="">2022</h2>
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
                  "Machine Learning and Data Mining",
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
            <div className="w-60 flex m-8 justify-end sticky top-[22.5rem]">
              <div className="bg-blue-600 w-fit p-4 rounded-xl ">
                <h2 className="text-md">2021</h2>
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
          <div className="bg-blue-300 w-60 h-fit rounded-xl p-4 m-8 sticky top-72 border-b-4 border-blue-600">
            <h2 className="text-lg ">Contact</h2>
          </div>
          <div className="h-screen w-96">
            <div className="bg-gradient-to-t from-blue-300 to-blue-200 rounded-xl p-4 m-8 h-fit">
              <h1 className="text-xl font-semibold text-blue-600 p-2">Hi, I'm John, </h1>
              <div className="flex">
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
          </div>
        </div>


      </div>
    </div>
  );
};

export default App;
