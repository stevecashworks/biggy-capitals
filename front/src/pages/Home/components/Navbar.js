import  styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaWhatsapp} from 'react-icons/fa';
import  logo from '../../../assets/logo.png'
const Container=styled.div`
background-color:rgb(8, 8, 56,0.8);
height:50px;
width:100%;
padding:10px 35px;
display:flex;
align-items:center;
justify-content:space-between;


`
const Logo=styled.img`
height:80px;
@media(max-width:600px){
    height:60px;
}
`
const LogoCon=styled.div`
display:flex;
justify-content:space-around;
height:100%;
align-items:center;
`
const ContactLink=styled.div`

text-decoration:none;
color:rgb(255,255,255,0.7);
@media(max-width:600){
  font-size:13px;   
}
`
const Contact=styled.div`
margin-right:30px;
`
const LinkCon=styled.div`
    @media (max-width:600px){
     display:none;
    }
    `
const NavBar=()=>{
    const linkStyle={
        color: 'white', 
        textDecoration:'none',
        marginRight:'25px',
    }
    
    
    return (
        <Container>
            <LogoCon>

            <Logo src={logo}/>
            <LinkCon>
            <Link to='#Contact' style={linkStyle}>Contact us</Link>
            <a href='#About' style={linkStyle}>About us</a>
            </LinkCon>
            </LogoCon>
             <Contact>
             <ContactLink >
             <FaWhatsapp/> +1(267)845-3359
             </ContactLink>
                 <div id="google_translate_element" style={{marginRight:'40px'}}></div>

             </Contact>
        </Container>
    )
}
export default NavBar