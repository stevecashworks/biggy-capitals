import styled from "styled-components"
import load1 from '../../../assets/load1.gif'
import logo from '../../../assets/logo.png'
 const Container=styled.div`
 position:absolute;
 width:100%;
 height:100%;
 background-color:rgb(8, 8, 56,0.8);
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 `
 const Image=styled.img`
 `
 const Logo=styled.img`
    width:250px;
 `
const Loading=()=>{
 return(
    <Container>
        <Image src={load1}/>
        <Logo src={logo}/>

    </Container>
 )
}
export default Loading