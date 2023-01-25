import './App.css';
import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom';
import  router from './Router'
const AppCon=styled.div`
height: calc(100vh - 40px);
width:100vw;
position:relative;
top:40px;
`


function App() {
  return (
  <AppCon>
 <RouterProvider router={router}/>
  </AppCon> 
);
}

export default App;



