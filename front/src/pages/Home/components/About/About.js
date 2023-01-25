 import styled from "styled-components";
 import background from './background/background.jpg' 
 const Container=styled.div`
  height:500px;
  color:white;
  width:100%;
  background-image:url(${props=>props.bg});
 padding:40px;
  `
 const Header=styled.p`
 font-size:40px;
 text-align:center;
 margin:40px auto;
 text-transform:uppercase;
 font-weight:500;


 `
 const CenterCon=styled.div`
 display:flex;
 width:80%;
 margin:0 auto;
 `
 const TextCon=styled.div`
 width:500px;
 margin-right:50px;
 font-weight:400;
 font-size:18px;

 j
 `
  const Text=styled.p`
  `
  const ChartCon=styled.div`
  width: 600px;
  height:600px;
  `
  const Btn=styled.button`
  border-radius:20px;
  width:150px;
  height: 40px;
  background-color:transparent;
  border:none;
  margin:50px;
  color:white;
  text-transform:capitalize;
  border:1px solid white;
  
  
  `

 const About=()=>{
     return(
         <Container id="About" bg={background}>
         <Header>About Us</ Header>
            <CenterCon>
                <TextCon>
                    <Text> Biggy Capital investments is run by a group of investors, traders, analyst and brokers, with valuable experience in the sphere of forex and crypto-currency, dedicating their time to research development.

Anyone anywhere in the world can become an investor. 
We provide investment vehicles of all sizes to investors interested in being part of the revolutionary forex, binary option, crypto-currency and bitcoin mining world.</Text>
                <Btn>See more</Btn> 
                </TextCon>

            <ChartCon>
            <iframe title="chart" style={{aspectRatio: "1200 / 630", width:"100%",height:"100%"}} src="https://www.coindesk.com/embedded-chart/kDd7QLFRHTgrr" width="100%" frameborder="0"></iframe>
            </ChartCon>
            </CenterCon>

        </Container>
    )
 }
 export default About