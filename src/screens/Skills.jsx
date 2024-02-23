import React from 'react'
import amazon from '../assets/simple_icon/amazonaws.svg'
import apollo from '../assets/simple_icon/apollographql.svg'
import docker from '../assets/simple_icon/docker.svg'
import figma from '../assets/simple_icon/figma.svg'
import github from '../assets/simple_icon/github.svg'
import html5 from '../assets/simple_icon/html5.svg'
import javascript from '../assets/simple_icon/javascript.svg'
import nextdotjs from '../assets/simple_icon/nextdotjs.svg'
import nodedotjs from '../assets/simple_icon/nodedotjs.svg'
import react from '../assets/simple_icon/react.svg'
import sass from '../assets/simple_icon/sass.svg'
import tailwindcss from '../assets/simple_icon/tailwindcss.svg'

export default function Skills() {
  return (
    <div className='flex flex-row flex-wrap justify-between w-[100%] h-[60vh] bg-[#CFC7B9] px-[30%] py-[10%] gap-12 snapc'>
      <img className='size-[8vh]' alt='amazon' src={amazon}/>
      <img className='size-[8vh]' alt='apollo' src={apollo}/>
      <img className='size-[8vh]' alt='docker' src={docker}/>
      <img className='size-[8vh]' alt='figma' src={figma}/>
      <img className='size-[8vh]' alt='github' src={github}/>
      <img className='size-[8vh]' alt='html5' src={html5}/>
      <img className='size-[8vh]' alt='javascript' src={javascript}/>
      <img className='size-[8vh]' alt='nextdotjs' src={nextdotjs}/>
      <img className='size-[8vh]' alt='nodedotjs' src={nodedotjs}/>
      <img className='size-[8vh]' alt='react' src={react}/>    
      <img className='size-[8vh]' alt='sass' src={sass}/>    
      <img className='size-[8vh]' alt='tailwindcss' src={tailwindcss}/>    
    </div>
  )
}
