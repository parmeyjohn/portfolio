import Spline from '@splinetool/react-spline';





//TODO: replace img tag with frame
const Project = ({title, image, alt}) => {
  
  return (
    <>
      <h3>{title}</h3>
      <img src={image} alt={alt}></img>
    </>
  )
}

const App = () => (
  <>
    <h1>It's-a me, John.</h1>
    <div id="face">
      <Spline scene="https://prod.spline.design/wDQw1bMkAQ9L5avp/scene.splinecode" />
    </div>
    <div id="projects">
      <h2>Projects</h2>
      <h3>Project 1</h3>
      <p>My first projects
      Ya
      He
      Bleh</p>

      <h3>Project 2</h3>
      <p>My second projects
      Ya
      He
      Bleh</p>

    </div>
  </>

)

export default App;
