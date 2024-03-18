import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface Props{
  content: string,
  dataTarget: string
}

const NavButtonsDesktop:React.FC<Props> = ({content, dataTarget}) =>{
  return(
    <p className="nav-btn lg:text-[18px] cursor-pointer after:transition-all after:ease after:duration-[.3s] after:content lg:after:block after:w-[0px] after:h-[1px] after:bg-white after:m-auto hover:after:w-full" data-target={dataTarget}>{content}</p>
  )
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = ():void => {
    setMenuOpen(!menuOpen)
    document.body.classList.toggle('overflow-hidden')
  }

  const MblBtns:React.FC<Props> = ({content, dataTarget}) =>{
    return (<p className="nav-btn text-xl" onClick={toggleMenu} data-target={dataTarget}>{content}</p>)
  }


  useEffect(()=>{
    const scrollBtns = document.querySelectorAll('.nav-btn')
    
    scrollBtns.forEach(btn =>{
      btn.addEventListener("click", ()=>{
        const dataTarget = btn.getAttribute('data-target')
        const targetElement = document.querySelector(`.${dataTarget}`)
        if(targetElement){
          targetElement.scrollIntoView({behavior:'smooth'})
        }
      })
    })
  })

 
  return (
    <div className="header flex flex-row justify-between items-center w-full p-[24px] h-[72px] b-bottom-5-green md:max-w-[1920px] m-auto md:h-auto lg:px-[150px] lg:py-[33px]">
      <p className="text-[14px] lg:text-[26px]">Portfólio</p>
      <div className="nav-bar hidden md:block md:flex gap-5">
        <NavButtonsDesktop content="Sobre mim" dataTarget="about"></NavButtonsDesktop>
        <NavButtonsDesktop content="Projetos" dataTarget="projects"></NavButtonsDesktop>
        <NavButtonsDesktop content="Serviços" dataTarget="services"></NavButtonsDesktop>
        <NavButtonsDesktop content="Habilidades" dataTarget="skills"></NavButtonsDesktop>
      </div>
      <AiOutlineMenu className="md:hidden" onClick={toggleMenu} />

      <div className={`menu-mobile p-[24px] flex-col items-center gap-8 w-full fixed h-screen left-[0px] top-[72px] bg-main-black z-10 ${menuOpen ? 'flex' : 'hidden'}`}>
        <MblBtns content="Sobre mim" dataTarget="about"></MblBtns>
        <MblBtns content="Projetos" dataTarget="projects"></MblBtns>
        <MblBtns content="Serviços" dataTarget="services"></MblBtns>
        <MblBtns content="Minhas skills" dataTarget="skills"></MblBtns>
      </div>
    </div>
  );
};

export default Header;