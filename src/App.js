import Spline from '@splinetool/react-spline';

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

//
const Home = () => {
  return (<>
         
  </>)
}

const About = () => {
  return (<h1>About</h1>)
}

const Projects = () => {
  return (<h1>Projects</h1>)
}

//TODO: replace img tag with frame
const Project = ({title, image, alt}) => {
  
  return (
    <>
      <h3>{title}</h3>
      <img src={image} alt={alt}></img>
    </>
  )
}


const Exp = () => {
  return (<h1>Experience</h1>)
}


const App = () => {

  const padding = {
    padding: 5
  }

  return (
    <div>
      <Router>
        <nav>
          <Link style={padding} to="/">home</Link>
          <Link style={padding} to="/about">about</Link>
          <Link style={padding} to="/projects">projects</Link>
          <Link style={padding} to="/experience">experience</Link>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Exp />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <div>
          <i>Note app, Department of Computer Science 2022</i>
        </div>
      </Router>
      <h1>It's-a me...John.</h1>
      
      <Spline id="face" scene="https://prod.spline.design/wDQw1bMkAQ9L5avp/scene.splinecode" />
      
      <h2>About</h2>

      <h2>Projects</h2>
      <Project title="Bapple" image="./images/image1" alt="Picture of webpage bapple"></Project>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada eget odio vel rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin rutrum ante lorem, eget posuere ipsum placerat in. Aenean ipsum est, hendrerit at ultricies sit amet, auctor id lectus. Nunc sit amet cursus purus. Mauris fermentum, leo ut iaculis facilisis, enim turpis pharetra tellus, sed tristique nisi justo id lorem. Cras nec tellus ut felis vestibulum hendrerit eu vitae lacus. Morbi ultrices metus sit amet vulputate eleifend. Mauris feugiat purus a justo pretium, in convallis sem suscipit. In ut faucibus arcu. Vivamus nec tincidunt elit. Duis sit amet nulla nec dolor vehicula dapibus eget nec felis. Maecenas quis mi a lorem laoreet pharetra. Mauris nisi libero, commodo sit amet aliquet at, rutrum id tellus. Nulla ut finibus mi, sit amet vestibulum odio. Integer a tempus quam, vitae gravida nibh.

      Proin cursus fringilla ipsum quis cursus. Aenean fermentum condimentum risus vitae varius. Nunc pulvinar iaculis commodo. Aliquam mattis rutrum nibh non placerat. Duis massa tortor, venenatis a odio in, rutrum sollicitudin libero. Etiam non convallis felis, in pulvinar ligula. Etiam mattis ultrices arcu, quis volutpat ante ornare quis.

      Praesent aliquet, dui non faucibus convallis, tellus odio placerat est, eu aliquam est lectus et tellus. Praesent ullamcorper ligula eu augue auctor, nec malesuada nisi porttitor. Curabitur diam justo, laoreet sed sagittis at, varius non eros. Cras at dui non erat posuere condimentum. Proin pulvinar elit vitae enim iaculis ornare. Donec cursus ut justo blandit convallis. Aliquam quam nibh, euismod eu augue in, volutpat vulputate nisl. Proin lacinia eros leo, commodo tristique elit aliquam in. Donec mi nisl, vehicula et tincidunt sit amet, volutpat quis nibh. Mauris fringilla, odio non vestibulum egestas, magna elit tempor dui, bibendum congue mi erat in orci.

      Cras lorem risus, pulvinar sit amet nulla quis, laoreet euismod ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam aliquet sit amet tellus quis sagittis. Morbi aliquam euismod nisi ut tincidunt. Phasellus ex leo, vulputate et urna finibus, egestas pulvinar orci. Morbi quis nulla nec massa hendrerit vestibulum id id metus. Maecenas tellus nisl, dignissim id varius eget, mollis eu orci. Vestibulum quis mattis augue. Sed sed metus ex. Pellentesque eu finibus tellus, vel dignissim ante. Mauris lobortis eu ex non dapibus. Mauris luctus nisi quam, eget sollicitudin sem convallis quis. Morbi fermentum neque justo, eu lacinia risus malesuada sit amet.

      Maecenas et convallis nisi, eget lobortis ex. Vivamus pharetra massa vel tristique vehicula. Nam efficitur porta velit, at egestas nunc vehicula at. Phasellus ultricies dolor tortor, ut lacinia arcu faucibus non. Nulla facilisi. Nullam vulputate aliquet sapien, quis lobortis quam feugiat sit amet. Aliquam volutpat, libero a facilisis commodo, nisl odio efficitur leo, vitae facilisis orci elit non tortor. Morbi nec leo in leo ultrices scelerisque. In faucibus nunc ac ex pellentesque, in viverra purus luctus. Ut consectetur lacus a augue accumsan consequat. Nam eleifend, purus pellentesque porta malesuada, nibh metus efficitur nulla, quis imperdiet tortor felis quis velit. Nunc eget vulputate urna. Suspendisse eget ex ac libero pharetra suscipit. Nullam in felis mi. Aenean sollicitudin purus felis, vitae gravida ipsum interdum sit amet.
      </p>
          
      
    </div>
    
  )
}

export default App;
