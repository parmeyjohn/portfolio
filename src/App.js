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
  <div>
    
    <Spline id="face" scene="https://prod.spline.design/wDQw1bMkAQ9L5avp/scene.splinecode" />
    
  </div>
)

export default App;
