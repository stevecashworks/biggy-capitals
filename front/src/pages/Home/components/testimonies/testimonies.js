 import styled from 'styled-components';
 import background from './images/background.jpg'
import testimonyData from './testimonyData';
import TestimonyCard from './Card.js'
import vid from './video testimony/8441.mp4'
 const Container= styled.div`
width:100%;
font-weight:500;
 background-image:url(${background});
color:white;
padding:20px auto;
position:relative;
 `
 const Header=styled.p`
  font-weight:500;
  text-align:center;
  font-size:45px;
  margin:40 auto;
  display:block;
  text-transform:uppercase;
  @media (max-width:600px){
   font-size:25px;
   margin:0 0; 
  }

 `
 const Sub=styled.p`
 font-size:18px;
 text-align:center;
 margin-bottom:20px;
 background-color:rgb(0,0,0,0.2);
 `
 const TestimonyCon=styled.div`
 display:flex;
 width:90%;
 margin:0 auto;
justify-content:space-between;
 flex-wrap:wrap;
 gap:20px;
 `
 const Video=styled.video`
 height:300px;
 margin:20px auto;
 display:block;
 background-color:white;
 @media (max-width:600px){
  width:300px;  
 }
 `
 const Testimonies=()=>{
 return (
    <Container>
        <Header>Testimonies</Header>
         <Sub>Happy investors <span style={{color:"orange"}}>sharing</span> their testimonies</Sub>
    <TestimonyCon>
        {testimonyData.map(item=><TestimonyCard img={item.img}name={item.name} text={item.text}/>)}
    </TestimonyCon>
    <Header>Testimonies(videos)</Header>
    <Video src={vid} height='300' width={'600'} controls/>
    
    </Container>
 )
 }
 export default Testimonies