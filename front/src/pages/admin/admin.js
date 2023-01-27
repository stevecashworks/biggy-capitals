  import styled from 'styled-components';
  import Header from '../Home/components/Navbar';
  import { useState,useEffect,useRef } from 'react';
  import { Logo,CoinCardCon,CoinCard,Fancy,Btn } from '../User/dashboard';
  import eth from '../User/eth.png'
  import btc from '../User/btc.png'
  // import { AppCon } from '../../App';
  // import  {selectPattern,selectTheme} from '../../redux/slices/themes'
  import Chart from './components/Chart/Chart';
  import Widget from './components/Widgets/Widget';
  import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
   import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
   import RequestQuoteIcon from '@mui/icons-material/RequestPage';
  import CategoryIcon from '@mui/icons-material/Category';
  import { CircularProgressbar } from 'react-circular-progressbar'
  // import {Container,Categories as Left,Products as Right} from '../Home/home'
  // import LinkItem from '../Home/Components/categoryItem'
  import {useId} from 'react'
  // import  {CategoryHeader} from '../Home/home'

  import 'react-circular-progressbar/dist/styles.css'  
  import { apiEntry } from '../../App';
  const Mid=styled.div`
height:100vh;
display:flex;
width:100%;
box-sizing:border-box;
 @media (max-width:480px){
  flex-direction:column;
 }
`
const Container=styled.div`
display:flex;
width:100vw;
position:absolute;
top:150px;

`

const Left=styled.div`
flex:1;
border-right:1px solid rgb(0,0,0,0.3);
box-sizing:border-box;
 @media (max-width:480px){
  display:none;
 }
`
const Right=styled.div`
flex:5;
`
const Title=styled.p`
margin: 40px auto;
text-align:center;
font-size:15px;
font-weight:500;

`
const CategoryHeader=styled.div``
const AppCon=styled .div`
 width:100vw;
 box-sizing:border-box;
`
const WidgetCon=styled.div`
width:100%;
height:120px;
margin:40px auto;
display:flex;
justify-content:space-around;
@media (max-width:480px){
 flex-direction:column; 
}
`
const Links=styled.div`
 display:flex;
 flex-direction:column;
 font-size:13px;
 font-weight:100;
 margin:20px auto;
`
const LinkItemCon=styled.div`
display:flex;
margin:20px auto;
width:100%;
gap:40px;
align-items:center;
`
const Charts=styled.div`
display:flex;
margin:100px auto;
justify-content:space-around;
gap:30px;
@media (max-width:480px){
 flex-direction:column;
 gap:40px;
 margin-top:100px; 
}
`
const TableCon=styled.div`
@media (max-width:480px){
  width:80%;
}
`
const Table=styled.table`
border-collapse:collapse;
@media (max-width:480px){
  max-width:80vw;
  overflow-x:scroll;
}
`
const Row=styled.tr`
border:0.5px solid rgb(0,0,0,0.2);
height:40px;

`
const  Th=styled.th``
const Td=styled.td`
border:0.5px solid rgb(0,0,0,0.2);
padding:10px;
margin:20px auto;
display:${props=>props.type};
gap:15px;


`
const Div=styled.div`
@media (max-width:480px){
 display:none; 
}
`
const But=styled.button`
background-color:${props=>props.col=='yellow'?'rgb(0,255,0,0.2)':'rgb(255,0,0,0.1)'};
padding:10px 5px;
border:none;
cursor:pointer;
width:120px;
border-radius:20px;
text-transform:capitalize;

`
const LinkItem=({icon,text})=>{
const Icon=icon
  return(
  <LinkItemCon>
  <Icon/>
  <p  style={{marginleft:'40px'}}>{text}</p>
  </LinkItemCon>
)
}

  const Admin=()=>{
    const ethRef=useRef()
    const btcRef=useRef()
     const [users,setUsers]=useState();
     console.log(users)
     useEffect(()=>{
        const fecthUsers=async()=>{
          const allUsers= await fetch(`${apiEntry}/user/all`).then(res=>res.json()).then(data=>data)
           if(allUsers.success){
            setUsers(allUsers.result)
           }
       }
       fecthUsers()
     },[])
    const widgetData=[
    {title:"Users",icon:PersonOutlineIcon,perc:30,no:0,id:useId()},
    {title:"Visits",icon:CategoryIcon,perc:80,no:0 ,id:useId()},
    {title:"Investments",icon:RequestQuoteIcon,perc:50,no:0,id:useId()}
    ]
    const  linkData=[
      {text:"Users",icon:PersonOutlineIcon,id:useId(),col:"purple "},
      {text:"Visits",icon:CategoryIcon,id:useId() ,col:"purple"} ,
      {text:"Investment",icon:RequestQuoteIcon, id:useId(),col:"purple"},
    
    ]
    const credit=async(id,name)=>{
      const  amount=Number(prompt(`how Much do you want to pay to ${name}`))
      if(Number.isNaN(amount)){
        alert('Invalid Input')
      }else{
         await fetch(`${apiEntry}/user/credit`,{
          method:"POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify({id,amount})
        }).then(res=>res.json).then(data=>data)
        window.location.reload()
      }
    }
    const deleteUser=async(id,name)=>{
      const  canDelete=window.confirm(` are you sure you want to delete user ${name}`)
      if(canDelete){
          await fetch(`${apiEntry}/user/delete/${id}`,{
            method:"DELETE",
          }).then(res=>res.json()).then(data=>data);
           window.location.reload()
      }
    }
    const update=async(type,value)=>{
     let obj
      if(type==='eth'){
        obj={eth:value}
      }
      else{
        obj={btc:value}
      }
   await fetch(`${apiEntry}/wallets/edit`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(obj)
   }).then(res=>res.json()).then(data=>console.log(data))
   window.location.reload()
    }


    return(
  
   <AppCon>
    <Header/>
    <Container>
      <hr/>
      <Mid>
        <Left >
        <Title>Admin page </Title>
        
        <CategoryHeader>Lists</CategoryHeader>
        <Links>
        {linkData.map(item=><LinkItem key={item.id} icon={item.icon} text={item.text} col={item.col}/>)}
        </Links>

        </Left>
        <Right>
          <WidgetCon>
            {widgetData.map(item=><Widget key={item.id} title={item.title} icon={item.icon}  perc={item.perc} no={item.no} />)}
          </WidgetCon>
          <Charts>
            <Div>
              
            <CircularProgressbar styles={{stroke:'purple'}} strokeWidth={2} value={70} text={"70%"}/>
            </Div>
          <Chart/>
          </Charts>
          <CoinCardCon>
            <CoinCard>
              <Logo src={eth}/>
                <Fancy ref={ethRef} type="text" placeholder="Update eth address" />
                <But onClick={()=>{update('eth',ethRef.current.value)}}  style={{margin:'0 auto'}}>Update</But>
            </CoinCard>
            <CoinCard>
              <Logo src={btc}/>
              <Fancy ref={btcRef} type="text" placeholder="Update btc address" />
                <But  onClick={()=>{update('btc',btcRef.current.value)}} style={{margin:'0 auto'}}>Update</But>

            </CoinCard>
          </CoinCardCon>
          <TableCon>

        { users&&<Table border={1}>
          <Row>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Balance</Th>
            <Th>Actions</Th>
          </Row>
          {users.map(user=><Row>
            <Td>{user._id}</Td>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>${user.balance}</Td>
            <Td type='flex'>
              <But col='red' onClick={()=>{deleteUser(user._id,user.name)}}>Remove</But>
              <But col='yellow' onClick={()=>{credit(user._id,user.name)}}>Credit</But>
              
              </Td>
            
          </Row>
          
          )}

          
          </Table>
          }  
          </TableCon>

        </Right>



      </Mid>
    </Container>
    </AppCon>
  
 )
   }
   export default Admin