import styled from 'styled-components';
import ServiceCard from './serviceCards/servicard';
import serviceData from './serviceCards/serviceData';
const Container=styled.div`
padding:10px auto;
width:100%;
`
const Header=styled.p`
color:black;
font-size:45px;
text-align:center;
text-transform:uppercase;
 margin: 20px auto;
 opacity:0.8;
`
const Text=styled.div`
width: 800px;
margin:0 auto;
font-size: 20px;
font-weight: 300;
text-align:center;
color:rgb(0,0,0,0.8);
@media (max-width:600px){
 width:95%;   
}
`
const CardCon=styled.div`
width:100%;
display:flex;
justify-content:space-around;
margin:40px auto;
@media (max-width:600px){
 flex-direction:column; 
 align-items:center;  
 gap:20px;
}
`
const Services=()=>{
return(
    <Container>
        <Header>our trading services</Header>
        <Text>
        We are Professional Traders & Portfolio Managers who return profit to investors, guaranteed and Regulated by the Securities and Exchange Commission. We offer optimum trading service that is capable of delivering profit of up to 18% of invested funds every week. We Trade on a Wide Range of Assets, Cryptos, Fx Options & Commodities.
  
        </Text>
        <CardCon>
    {serviceData.map(service=><ServiceCard text={service.text} desc={service.desc} image={service.img}/>)}
  </CardCon>

    </Container>
)
}

export default Services