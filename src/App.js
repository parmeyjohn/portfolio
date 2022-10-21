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
    
    <div className="grid">
      <div></div>
      <div className="grid-col">
        Hey
      </div>
      <div className="face">
        <Spline scene="https://prod.spline.design/wDQw1bMkAQ9L5avp/scene.splinecode" />
      </div>
    </div>
    
  <div className="space"></div>
  
  </>

)

export default App;
