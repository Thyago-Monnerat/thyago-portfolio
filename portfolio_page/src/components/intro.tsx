import React from "react"

interface Button {
  content: string,
  props:string,
  href:string,
  onClick?: () =>void,
}

const DefaultButton: React.FC<Button> = ({content, props, href, onClick}) =>{
  return (
    <a href={href} onClick={onClick} className={`text-[12px] py-[8px] px-[20px] ${props} rounded-[5px] text-black lg:text-[14px] lg:py-[12px] lg:px-[25px]`}>{content}</a>
  )
}

const Intro: React.FC = () =>{
  return  (
    <div className="m-auto w-full p-[24px] flex flex-row justify-center lg:max-w-[1920px] lg:justify-around lg:text-left lg:px-[150px] lg:items-center">
    <div className="flex flex-col gap-[40px] text-center ">
      <div className="flex flex-col gap-[8px] lg:gap-[20px] lg:w-[350px] lg:pt-[30px] ">
          <p className="text-2xl lg:text-[36px] lg:leading-[40px]">Olá, eu sou o Thyago Monnerat</p>
          <p className="text-sm text-gray lg:text-[18px]">- Futuro Software Engineer (2027) -</p>
        </div>
      
        <div className="w-full flex justify-center gap-[9px] lg:justify-center">
          <DefaultButton href="mailto:thyago.monnerat.pro@gmail.com" content="Entrar em contato" props="border border-1 border-solid border-color-button text-black bg-main-green transition-border duration-[.3s] ease hover:bg-transparent hover:text-white" ></DefaultButton>
        </div>
        </div>
        <img
          src="https://raw.githubusercontent.com/Thyago-Monnerat/thyago-portfolio/ed60c252c8ca7f022b15a542fd4055dd6f62bacd/portfolio_page/src/assets/introImg.svg"
          alt="Imagem de um menino de camisa verde com galáxia atrás em formato de S e um telefone na mão"
          className="w-[350px] h-[300px] hidden lg:block"
        />
      
    </div>
    
  );
}

export default Intro;
