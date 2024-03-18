import React from "react";

const Footer:React.FC = () =>{
  return(
    <div className="flex flex-col items-center w-full p-[24px] bg-dark-gray gap-[5px] lg:max-w-[1920px] lg:px[150px] m-auto lg:gap-[15px]">
      <p className="text-[12px] lg:text-[14px] text-center">Design feito por <span className="text-[var(--main-green)]">Iuri Silva</span> (iuricold99@gmail.com)</p>
      <p className="text-[12px] lg:text-[14px]">Desenvolvido por <span className="text-[var(--main-green)]">Thyago Monnerat</span></p>
    </div>
  )
}

export default Footer