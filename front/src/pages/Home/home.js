import styled from 'styled-components';
import Loading from './components/loading';
import Loaded from './components/homepage';
import {useState,useEffect} from 'react'

 const  HomeCon=styled.div`
 height:100%;
 position:relative;
 overflow-x:hidden;
 
 `
const Home=()=>{
    const [isLoading,setIsLoading]=useState(true);
    
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