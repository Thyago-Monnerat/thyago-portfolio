import React from "react"

interface Button {
  content: string,
  props:string,
  href:string
}

const DefaultButton: React.FC<Button> = ({content, props, href}) =>{
  return (
    <a href={href} className={`text-[12px] py-[8px] px-[20px] ${props} rounded-[5px] text-black lg:text-[14px] lg:py-[12px] lg:px-[25px]`}>{content}</a>
  )
}

const Intro: React.FC = () =>{
  return  (
  <div className="m-auto w-full p-[24px] flex flex-row justify-center lg:max-w-[1920px] lg:justify-between lg:text-left lg:px-[150px] lg:items-center">
   <div className="flex flex-col gap-[40px] text-center ">
    <div className="flex flex-col gap-[8px] lg:gap-[20px] lg:w-[350px] lg:pt-[30px] ">
        <p className="text-2xl lg:text-[36px] lg:leading-[40px]">Olá, eu sou o Thyago Monnerat</p>
        <p className="text-sm text-gray lg:text-[18px]">- Futuro Software Engineer (2027) -</p>
      </div>
    
      <div className="w-full flex justify-center gap-[9px] lg:justify-start">
       <DefaultButton href="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQKmdsybQUn5BgAAAY5Tsep3tTMEJfICxSdj9XUvxij87da-dYWjs0qqNTNwwsVscsrCKG6Gd1d-AbNrtEC3iJcNyt3LM9jGTjRfA4bEEgJZPBBAYH0XNaWeNLgjcofY9eLqcbzg-Xpq2bFe6XDT-mnDcuKda7O8Nb_BESWPLucYRehEXa1Nu1wwm5O_D0r96HQx3tuvIx3LgKJOCdztm0CCAWSUGDytEl6OWnJXken1Z3xG6skzP_4cEUSSuX2Qik688WGlSUCKbfG4Fc4b7rTUWFMa8h50MZiR4sXgkN36ynkeCuh7I8KrX2mh2uHG6qWE44OSamo3v6MW9utflOTzFCfoD4IVYI3PyzqKCREpJONa4n9Pb7r6PCSi0v02BlIlv3p7fpsu7vbtRoHAby0cX2_re0_hi_uZrx7_LXbjmECgF744mtqv2Rlbh5ryZrUYcMBGohtjd3fIzAYLM82Gf5Yg3g8MPw33akNXxXyeTzGF1PKwCGt5GF9DZytM60PV5Im1752eo64F1fFuyzA-5tj3LovFoCmh5pW3JnzqjmmDCyD55QeJCs-gJB8JDgP6-A&x-ambry-um-filename=Profile.pdf" content="Download CV" props="bg-main-green hover:bg-[#18f373] transition duration-[.3s] ease"></DefaultButton>
        <DefaultButton href="mailto:thyago.monnerat.pro@gmail.com" content="Entrar em contato" props="text-white border border-1 border-solid border-color-button transition-border duration-[.3s] ease hover:border-white" ></DefaultButton>
      </div>
   </div>

    <img src="/src/assets/undraw_Lost_online_re_upmy.svg" alt="Imagem de um menino de camisa verde com galáxia atrás em formato de S e um telefone na mão" className="w-[350px] h-[300px] hidden lg:block"/>
  </div>) 
}

export default Intro
