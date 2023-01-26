import styled from "styled-components";
import NavBar from "./Navbar";
import Carousel from "./carousel/Carousel";
import Investments from "./Investments/investments";
import Services from "./Services/services";
import About from "./About/About";
import Testimonies from "./testimonies/testimonies";
const Homepage=styled.div`
position:absolute;
background-color:white;
width:100%;
height:100%;
transition:all 1s ease;
transform:${props=>props.hasLoaded?'translate(0)':'translate(100%)'};
`
const Loaded=({hasLoaded})=>{
  return(
    <Homepage hasLoaded={hasLoaded}>
        <NavBar/>
        <Carousel />
        <Investments/>
        <Services />
        <About />
        {/* <Testimonies /> */}
 </Homepage>
  )
}
export default Loaded