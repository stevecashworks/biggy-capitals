 import styled from "styled-components";
import carouselData from "./CarouselData";
 import  Slide from './slide'
 import { useState,useEffect } from "react";
 const Container=styled.div`
 width:100%;
 height:700px;
 position:relative;

 `
 const Carousel=()=>{
    const [slide,setSlide]=useState(1)
    useEffect(()=>{
        setInterval(()=>{
            setSlide((slide)=>{
                if(slide===5){
                    return 1
                }
                return slide + 1
            })
        },3000)
    },[])
  return(
    <Container>
        {carouselData.map(item=><Slide sl={slide} bg={item.img} text={item.text} id={item.id} />)}

    </Container>
  )  
 }
 export default Carousel