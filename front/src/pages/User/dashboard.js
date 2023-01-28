import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../App';
import NavBar from '../Home/components/Navbar';
import {useState,useEffect } from 'react'
import {useId} from 'react'
import { apiEntry } from '../../App';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
   import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
   import RequestQuoteIcon from '@mui/icons-material/RequestPage';
  import CategoryIcon from '@mui/icons-material/Category';
import eth from './eth.png'  
import btc from './btc.png'  
import Widget from '../admin/components/Widgets/Widget';
// import Investments from '../Home/components/Investments/investments';
 const  DashCon=styled.div`
display:flex;
width:100vw;
box-sizing:border-box;
 overflow-x:hidden;
min-height:100vh;
@media (max-width:480px){
  flex-direction:column;   
}
 `
 const Con=styled.div`
 width:100vw;
 box-sizing:border-box;
 overflow-x:hidden;
 `
 const Greeting=styled.div`
 text-transform:capitalize;
 font-size:20px;
 margin-top:30px;
 text-align:center;

 `
 const Left=styled.div`
  border-right: 2px solid rgb(0,0,0,0.2);
  flex:1;
  
 `
 const Right=styled.div`
 flex:4;
 
 `
 const WidgetCon=styled.div`
 display:flex;
 width:100%;
 justify-content:space-around;
 margin-top:10px;
 @media (max-width:800px){
    flex-direction:column;
 }
 `
 export const CoinCard=styled.div`
  background-color:white;
box-shadow:2px 2px 5px rgb(0,0,0,0.2) ;
 width:400px;
 height:180px;
 @media (max-width:480px){
    width:100%;
    margin:20px auto;
 }
 `
  export const CoinCardCon=styled.div`
 width:100%;
 display:flex;
 flex-wrap:wrap;
 justify-content:space-around;
 margin-top:60px;
 @media (max-width:480px){
    flex-direction:column;
 }
 `
export const Logo=styled.img`
 width:80px;
height:80px;
border-radius:50%;
display:block;
margin:0 auto;
object-fit:cover;
 
 `
   const Address=styled.p`
   text-align:center;
   margin-top:10px;
   `
   const Invest= styled.div`
   width:60%;
   margin:40px auto;
box-shadow:2px 2px 5px rgb(0,0,0,0.2) ;
height:500px;
border-radius:30px;
@media (max-width:480px){
 width:90%;   
}

   `
   const Large=styled.p`
   font-weight:500;
   font-size 35px;
   text-align:center;
   opacity:0.5;
   margin:20px auto;
   `
   
    export const  Fancy=styled.input`
   width:360px;
   height:50px;
   border-radius:20px;
   display:block;
   margin:10px auto;
   padding-left:15px;
   outline:none;
   font-size:17px;
box-shadow:2px 2px 5px rgb(0,0,0,0.2) ;
border:none;
@media (max-width:480px){
 width:80%;   
}

   `
  export const Btn=styled.button`
   background-color:blue;
   color:white;
   border:none;
   font-weight:bold;
   font-size:17px;
   width:200px;
   height:40px;
   border-radius:10px;
   display:block;
   margin:20px auto;

   `

 
const Dash=()=>{
    const {user}=useContext(AppContext)
  const [wallets,setWallets]= useState();
  const  btcAddress= wallets?wallets.btc:"fetching"
  const  ethAddress= wallets?wallets.eth:"fetching"
  console.log(wallets)
   useEffect(()=>{
    const fetchWalletDetails=async()=>{
        const walletDetails=await fetch(`${apiEntry}/wallets`).then(res=>res.json()).then(data=>data);
    if(walletDetails.success){
        const {_id,...others}= walletDetails.result;
        setWallets(others)
    }
    }
    fetchWalletDetails()
   },[])
   const bal=user?user.balance:0
    const widgetData=[
        { personal:true,title:"Investment",icon:PersonOutlineIcon,perc:30,no:0,id:useId()},
        {personal:true,title:"Balance",icon:CategoryIcon,perc:80,no:bal ,id:useId()},
        {personal:true,title:"Total",icon:RequestQuoteIcon,perc:0,no:0,id:useId()}
        ]
    const name=user?user.name:""
  
    return(
        
        <Con>
 <NavBar/>
     <DashCon>
        <Left>

        <Greeting>

            welcome {name}
        </Greeting>
        </Left>
        <Right>
            <WidgetCon>

    {widgetData.map(item=><Widget key={item.id} personal={item.personal} title={item.title} icon={item.icon}  perc={item.perc} no={item.no} />)}

            </WidgetCon>
            {/* <Investments bg={"none"}/> */}
                <Invest>
                    <Large>Invest now</Large>
                    <Fancy type='number' placeholder='How much do you intend to invest?'></Fancy>
                        <p style={{fontSize:"18px", margin:"10px auto"}}>Screenshot image as proof</p>
                        <input type='file'/>
                        <Btn onClick={()=>alert('we have recieved your request, and will get back to you shortly')}>Submit</Btn>
               
                </Invest>
            <CoinCardCon>
                <CoinCard>
                    <Logo src={btc}/>
                    <Address>{btcAddress}</Address>
                </CoinCard>
                <CoinCard>
                <Logo src={eth}/>
                 <Address>{ethAddress}</Address>
                </CoinCard>
            </CoinCardCon>
        </Right>
    </DashCon>
</Con>
)
}
export default Dash