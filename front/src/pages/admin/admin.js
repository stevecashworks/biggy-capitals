  import styled from 'styled-components';
  import Header from '../Home/Components/Header/Header';
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
  import  {CategoryHeader} from '../Home/home'
 import 'react-circular-progressbar/dist/styles.css'  
  const Mid=styled.div`
height:100vh;
display:flex;
width:100%;
`
const Container=styled.div``
const LinkItem=styled.div``
const Left=styled.div``
const Right=styled.div``
const Title=styled.p`
margin: 40px auto;
text-align:center;
font-size:15px;
font-weight:500;

`
const AppCon=styled .div`

`
const WidgetCon=styled.div`
width:100%;
height:120px;
margin:20px auto;
display:flex;
justify-content:space-around;
`
const Links=styled.div`
 display:flex;
 flex-direction:column;
 font-size:13px;
 font-weight:100;
 margin:20px auto;
`
const Charts=styled.div`
display:flex;
margin:0 auto;
justify-content:space-around;
gap:30px;
`

  const Admin=()=>{
    const widgetData=[
    {title:"Users",icon:PersonOutlineIcon,perc:30,no:35000,id:useId()},
    {title:"Products",icon:CategoryIcon,perc:80,no:48000 ,id:useId()},
    {title:"Orders",icon:RequestQuoteIcon,perc:50,no:65000,id:useId()}
    ]
    const  linkData=[
      {text:"Users",icon:PersonOutlineIcon,id:useId(),col:"purple "},
      {text:"Products",icon:CategoryIcon,id:useId() ,col:"purple"} ,
      {text:"Orders",icon:RequestQuoteIcon, id:useId(),col:"purple"},
      {text:"Deliveries",icon:DeliveryDiningIcon, id:useId(),col:"purple"}
    
    ]


    return(
  
   <AppCon>
    <Container>
    <Header/>
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
            <div style={{width:"200px",height:"200px",border:"1px solid black", display:"flex",alignItems:"center",justifyContent:"center"}}>
              
            <CircularProgressbar styles={{stroke:'purple'}} strokeWidth={2} value={70} text={"70%"}/>
            </div>
          <Chart/>
          </Charts>

        </Right>



      </Mid>
    </Container>
    </AppCon>
  
 )
   }
   export default Admin