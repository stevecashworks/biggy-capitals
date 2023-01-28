import {useRef}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../Home/components/Navbar'
import { apiEntry } from '../../App'
const Container=styled.div`
display:grid;
place-items:center;
height:100vh;
background-color:rgb(8, 8, 56,0.8);

`
const Button=styled.button`
font-weight:bold;
color:white;
background-color:blueviolet;
fon-size:18px;
padding:5px;
border:none;
width:120px;
height:30px;
border-radius:10px;
margin:20px auto;
cursor:pointer;
transition:all 0.5s ease;
&:hover{
    opacity:0.5
}
`
const Inp=styled.input`
 width:250px;
 height:35px ;
`
const Form=styled.form`
     width:300px;
     height:400px;
     border-radius:30px;
     border:1px solid black;
     display:flex;
     align-items:center;
     flex-direction:column;
     gap:25px;
     background-color:white;

`
const Title= styled.p`
text-align:center;
margin:30px auto;
font-weight:500;
font-size:20px;
`

const  Register=()=>{
    const navigate=useNavigate()
  
   const register=async(details)=>{
     const {password,email,name}=details
     try{
         const  thisUser=await fetch(`${apiEntry}/user/register`,{
            method:'POST',
            headers:{
               'Content-Type':"application/json"
               
            },
            body:JSON.stringify({email,password,name})
         }).then(res=>res.json()).then(data=>data);
         if(thisUser.success){
            localStorage.setItem('token',thisUser.result.accessToken)
            localStorage.setItem('id',thisUser.result._id)
            if(thisUser.result.isAdmin){
               navigate('/admin');
            }else{
               navigate('/user/dashboard');

            }


         
         }
         else{
            alert('unsuccessful')
         }
         console.log(thisUser)
     }catch(err){
      console.log(err)
     }


  }
    const emailRef=useRef(null);
 const passwordRef=useRef(null);
 const nameRef=useRef(null);

    return(
      <div>
         <NavBar/>
 <Container>
    <Form onSubmit={(e)=>{e.preventDefault();register({email:emailRef.current.value,password:passwordRef.current.value,name:nameRef.current.value})}}>
         
  <Title>Register</Title>
  <Inp ref={nameRef} type='text' required  placeholder='Please input your full name'></Inp>
  <Inp ref={emailRef} type='email' required placeholder='Please input your email'></Inp>    
  <Inp ref={passwordRef} type='password' required minLength={6} placeholder='Please input your password'></Inp>
  <Link to ='/user/login' style={{textDecoration:'none',fontSize:"12px"}}>Already have an account? log in here </Link>
  <Button type='submit' >Register</Button>    
    </Form>
 </Container>
 
      </div>
 )

}
export default Register