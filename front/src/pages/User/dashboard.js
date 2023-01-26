import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../App';
import NavBar from '../Home/components/Navbar';

 const  DashCon=styled.div`
display:flex:
width:100%;
min-height:100vh;
 `
 const Con=styled.div`
 `
 const Greeting=styled.div`
 text-transform:capitalize;
 font-size:20px;
 margin-top:30px;

 `
 const Left=styled.div`
  border-right:2px solid rgb(0,0,0);
  flex:1;

 `
 const Right=styled.div`
 flex:4;
 `
const Dash=()=>{
    const {user}=useContext(AppContext)
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

        </Right>
    </DashCon>
</Con>
)
}
export default Dash