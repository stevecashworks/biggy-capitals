import styled from "styled-components";
const Container=styled.div`
width:350px;
height:450px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
display:flex;
flex-direction:column;
gap:20px;
justify-content:center;
@media (max-width:600px){
 width:300px;
 height:auto;   
}
`
const Img=styled.img`
width:300px;
display:block;
margin:0 auto;


`
const Text=styled.p`
text-align:center;
font-weight:500;
font-size:20px;
`
const Description=styled.p`
text-align:center;
font-weight:400;
font-size:16px;
`


const  ServiceCard=({image, desc,text})=>{
 return (
    <Container>
      
 <Img src={image} />
 <Text>{text}</Text>
 <Description>{desc}</Description>
    </Container>
 )
}
export default ServiceCard