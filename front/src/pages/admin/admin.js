  import styled from 'styled-components';
  import Header from '../Home/components/Navbar';
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
width:100%;
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
const Div=styled.div`
@media (max-width:480px){
 display:none; 
}
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
            <Div style={{width:"200px",height:"200px", display:"flex",alignItems:"center",justifyContent:"center"}}>
              
            <CircularProgressbar styles={{stroke:'purple'}} strokeWidth={2} value={70} text={"70%"}/>
            </Div>
          <Chart/>
          </Charts>

        </Right>



      </Mid>
    </Container>
    </AppCon>
  
 )
   }
   export default Admin