import styled from 'styled-components'
import {useState} from 'react';
import {IoMdPerson} from 'react-icons/io'
import  {Link} from 'react-router-dom'
const Container=styled.div`
 z-index:2;
 height:auto;
 margin:20px;
 width:280px;
 background-color:rgb(9, 9, 109,0.8);
 border-radius:30px;
overflow:hidden;
z-index:4;
 text-transform:uppercase;
 padding-bottom:10px;
 @media (max-width:600px){
  width:300px;
   margin-bottom:5px;  
 }
`
const  Top=styled.div`
 width:100%;
 height:100px;
 background-color:rgb(185, 45, 185,0.8);
border-radius: 1% 99% 59% 41% / 100% 3% 97% 0% ;
padding-top:10px;
`
const Orange=styled.span`
color:orange;
`
const Line=styled.hr`
width:200px;
margin:10px auto;
`
const Detail=styled.div`
padding:5px;
margin-top:10px;
text-align:center;
color:white;
font-weight:400;
`
const MinMax=styled.div`
width:90%;
height:70px;
display:flex;
margin:20px auto;
color:white;
font-weight:400;
justify-content:space-between;


`
const Amount=styled.p`
text-align:center;
margin:10px auto;
color:white;
font-weight:400;

`
 const Inp=styled.input`
  width:80%;
  margin:0 auto;
  height:30px;
  color:green;
  display:block;
  
 `
 const Btn=styled.button`
 display:flex;
 gap:10px;
 background-color:transparent;
 align-items:center;
 font-weight:400;
 font-size:18px;
 color:white;
 border:1px solid white;
 height:45px;
 width:150px;
 border-radius:25px;
 margin:10px auto;
 justify-content:center;
 `
const Text=styled.span`
`
const Min=styled.div`
display:flex;
flex-direction:column;
gap:15px;
`
const Type=styled.p`
color:White;
font-size:22px;
font-weight:300;
text-align:center;

`
const Card=({type,min,max,no})=>{
  const newMax=(max===100000)?max:max+1;
    const diff=(newMax)-min;
    const [amount,setAmount]=useState(50)
    const investment=(min+((amount/100)*diff))
    return (
        <Container>
            <Top>
                <Type>{type}</Type>
                <Detail>{no}% roi</Detail>
                
            </Top>
           
            
                <Detail><i> <Orange style={{textTransform:"italicize"}}>${no}</Orange > roi</i></Detail>
                <Line/>
                <MinMax>
                    <Min>
                        <Text>Mininmum</Text>
                        <Orange>${min}</Orange>
                    </Min>
                    <Min>
                        <Text>Maximum</Text>
                        <Orange>${max}</Orange>
                    </Min>
                </MinMax>
                        <Amount>${investment}</Amount>
                        <Inp value={amount} type="range" onChange={(e)=>{setAmount(e.target.value)}}></Inp>

                        <MinMax>
                   
                    <Min>
                        <Text>Total Return</Text>
                        <Orange>${(no/100)*investment*no}</Orange>
                    </Min>
                </MinMax>
                <Link to ="/user/register">
                <Btn><IoMdPerson/> <p>Sign up</p></Btn>
                </Link>

        </Container>
    )
}
export default Card