import styled from 'styled-components';
const Container=styled.div`
position:absolute;
width:100%;
height:100%;
transition:all 0.25s ease;
background-image:url(${props=>props.bg});
transform:translate(${props=>props.trans}%);
display:flex;
align-items:center;
justify-content:center;
`
const CenterCon=styled.div`
color:white;
width:80%;
font-weight:400;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const BigText=styled.p`
text-transform:uppercase;
text-align:center;
font-size:55px;
color:rgb(255,255,255);
@media (max-width:600px){
  font-size:40px;   
}
`
const Btn =styled.button`
 color:white;
 background-color:transparent;
 width:200px;
 height:35px;
 border-radius:25px;
 border:1px solid white;
 font-size:18px;
 font-weight:300;
 margin-top:40px;
 text-transform:capitalize;
`
const Slide=({bg,sl,id,text})=>{
 const trans=sl===id?0:100
    return(
    <Container bg={bg} trans={trans} >
        <CenterCon>
            <BigText>
                {text}
            </BigText>
            <Btn>
                Get started
            </Btn>

        </CenterCon>
    </Container>
 )
}
export default Slide