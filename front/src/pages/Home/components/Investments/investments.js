import styled from 'styled-components';
import Card from './Cards/card'
import investBack from '../../../../assets/backgrounds/investback.jpg'

const Container=styled.div`
height:auto;
width:100%;
padding:40px auto;
gap:20px;
position:relative;
top:-10px;
z-index:-1;
align-items:center;
flex-wrap:wrap;
border-radius:30px;
display:flex;
justify-content:space-around;
@media (max-width:600px){
  height:auto;
  flex-direction:column;   
  gap:20px;
  padding:20px auto ;
}
`
const Background=styled.img`
position:absolute;
top:0px;
left:0px;
width:100%;
height:100%;
display: ${prop=>prop.bg};
z-index:-1;
border-radius:30px;

`
const Overlay=styled.div`
position:absolute;
width:100%;
heigh:100%;
background-color:rgb(0,0,0,0.1);
z-index:1;

`
const cardsData=[
    { id:"card1",type:"starter",no:5,min:500, max:4999},
    { id:"card2",type:"silver",no:10,min:5000, max:9999},
    { id:"card3",type:"gold",no:15,min:10000, max:49999},
    { id:"card3",type:"platinum",no:20,min:50000, max:100000},
]
const Investments=({bg})=>{
    console.log(cardsData)
return (
    <Container>
        <Background src={investBack} bg={bg} />
            {cardsData.map(data=><Card type={data.type} key={data.id} max={data.max} no={data.no} min={data.min} />)}
        <Overlay/>
    </Container>
)
}
export default Investments