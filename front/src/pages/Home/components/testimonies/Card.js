import styled from 'styled-components';
const  Container=styled.div`
background-color:white;
width:450px;
border-radius:30px;
display:flex;
flex-direction:column;
align-items:center;
padding:20px auto;

`
const Img=styled.img`
height:80px;
width:80px;
border-radius:50%;
object-fit:cover;
`
const Text=styled.p`
width:80%;
margin:20px auto;
text-align:center;
color:black;
opacity:0.7;

`
 const Name=styled.p`
 margin:20px auto;
 color: darkblue;
 text-align:right;
 float:right;
 `
const Card=({img,text,name})=>{
    return(
        <Container>
            <Img src={img}/>
            <Text>{text}</Text>
            <Name>{name}</Name>
        </Container>
    )
}
export default Card