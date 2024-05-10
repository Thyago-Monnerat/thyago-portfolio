import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import React from "react";

interface SocialButtonsProps {
  href: string,
  icon: JSX.Element,
  socialName: string,
  socialUser: string
}

const SocialButtons:React.FC<SocialButtonsProps> = ({href, icon, socialName, socialUser}) =>{
  return(
    <div className="flex flex-col items-center">
          <a href={href} target="_blank">{icon}</a>
          <p className="text-[14px] lg:text-[18px]">{socialName}</p>
          <p className="text-[12px] text-gray lg:text-base">{socialUser}</p>
        </div>
  )
}

const About: React.FC = () =>{
  return (<div className="about m-auto w-full max-w-md p-[24px] flex flex-col gap-5 text-justify lg:text-center lg:max-w-[1920px]">
      <p className="text-[24px] text-center lg:text-[36px] ">Sobre mim</p>
      <p className="m-auto text-sm text-gray lg:text-[18px] lg:w-[750px]">Com 24 anos de idade, sou um estudante apaixonado por tecnologia, com foco em engenharia de software. Comprometido em desenvolver habilidades técnicas e sólidas, e aprimorar constantemente competências interpessoais. Motivado e determinado a alcançar objetivos profissionais na área de tecnologia da informação.</p>

      <div className="about-contact m-auto sm:grid grid-cols-2 gap-12 lg:flex lg:justify-center lg:gap-[100px] lg:w-full lg:max-w-[1920px] lg:pt-[80px]  lg:px-[150px]">
        <SocialButtons href="https://www.instagram.com/thyagomonnerat" icon={<AiFillInstagram className='bg-dark-gray fill box-content rounded-xl p-1 bg-border lg:w-[32px] lg:h-[32px]'/>} socialName="Instagram" socialUser="@thyagomonnerat"></SocialButtons>
        <SocialButtons href="https://www.linkedin.com/in/thyago-monnerat/" icon={<FaLinkedin className="bg-dark-gray fill box-content rounded-xl p-1 bg-border lg:w-[32px] lg:h-[32px]" />} socialName="LinkedIn" socialUser="Thyago Monnerat"></SocialButtons>
        <SocialButtons href="https://github.com/Thyago-Monnerat" icon={<AiFillGithub className="bg-dark-gray fill box-content rounded-xl p-1  lg:w-[32px] lg:h-[32px]"/>} socialName="Github" socialUser="Thyago-Monnerat"></SocialButtons>
        <SocialButtons href="mailto:thyago.monnerat.pro@gmail.com" icon={<MdEmail className="bg-dark-gray fill box-content rounded-xl p-1 bg-border  lg:w-[32px] lg:h-[32px]"/>} socialName="E-mail" socialUser="thyago.monnerat.pro@gmail.com"></SocialButtons>
      </div>


  </div>)
}

export default About