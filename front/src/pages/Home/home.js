import styled from 'styled-components';
import Loading from './components/loading';
import Loaded from './components/homepage';
import {useState,useEffect,useContext} from 'react'
import { AppContext } from '../../App';
import {useNavigate} from 'react-router-dom'

 const  HomeCon=styled.div`
 height:100%;
 position:relative;
 overflow-x:hidden;
 
 `
const Home=()=>{
    const navigate=useNavigate()
    const [isLoading,setIsLoading]=useState(true);
    const {user}=useContext(AppContext)
    console.log('context', user)
    if(user){

        if(user.isAdmin){
            navigate('/admin')
        }else{
          navigate('/user/dashboard')
        }
    }
    useEffect(()=>{
        
            setTimeout(()=>{setIsLoading(false)},3000)
        
    },[])
    console.log(isLoading)
   return(
    <HomeCon>
    <Loading />
    <Loaded hasLoaded={!isLoading} />
</HomeCon>
   )
}
export default Home