import React from "react";
import { FaPager } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";

interface Props{
  cardImg: JSX.Element,
  content: string
}

const ServiceCard: React.FC<Props> =({cardImg, content}) =>{
  return (
    <div className="service-card w-full py-[35px] b-bottom-5-green flex flex-col items-center bg-dark-gray rounded-[5px] gap-[10px] lg:items-start lg:p-[30px] lg:w-[350px] lg:h-[240px] lg:justify-center lg:gap-[40px]">
      <div className="w-[35px] h-[35px] lg:w-[56px] lg:h-[56px]">{cardImg}</div>
      <p className="text-gray text-[14px] lg:text-[18px]">{content}</p>
    </div>
  )
}

const Services: React.FC = () =>{
  return (
    <div className="services m-auto flex flex-col items-center w-full max-w-[300px] px-[24px] gap-[40px] lg:max-w-[1920px]">
      <p className="text-[24px]">Serviços</p>
     <div className="cards w-full flex flex-col gap-[30px] lg:px-[150px] lg:flex-row lg:justify-center items-center">
      <ServiceCard cardImg={<FaPager className="w-full h-full fill" />} content="Criação de site"></ServiceCard>
        <ServiceCard cardImg={<CiMobile1  className="w-full h-full fill"/>} content="Site responsivo"></ServiceCard>
        <ServiceCard cardImg={<MdOutlineDesignServices  className="w-full h-full fill" />} content="UI Design"></ServiceCard>
     </div>
    </div>
  )
}





export default Services;