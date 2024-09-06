import React from "react";

interface PrjCard{
  href: string
  pjtImage: string,
  pjtName: string,
  pjtTechs: string
}

const ProjectCard: React.FC<PrjCard> = ({href, pjtImage, pjtName, pjtTechs}) => {
  return (
    <a href={`${href}`} target="_blank" className="w-full max-w-md h-auto gap-[8px] flex flex-col justify-between bg-dark-gray border-[1px] border-color-button rounded-[5px] p-[20px] lg:gap-[15px] lg:w-[350px] h-[240px]">
        <img src={`${pjtImage}`} alt={`Imagem do projeto ${pjtName}`} className="w-[250px] m-auto border-[1px] border-color-button lg:w-[250px]"/>
        <p className="text-[13px] lg:text-[18px]">{pjtName}</p>
        <p className="text-[10px] text-gray lg:text-[14px]">{pjtTechs}</p>
      </a>
  )
}


const Projects: React.FC = () => {
  return(
    <div className="projects m-auto w-full px-[24px] flex flex-col items-center gap-[30px] lg:px-[150px] lg:max-w-[1920px]">
      <p className="text-[24px]">Projetos</p>
      <div className="flex flex-col justify-center items-center gap-[30px] w-full lg:max-w-[1920px] lg:flex-row lg:flex-wrap lg:gap-[40px]">
        <ProjectCard href="https://www.medinamonnerat.com" pjtImage="https://www.medinamonnerat.com/src/assets/mmLogo.png" pjtName="Medina Monnerat" pjtTechs="HTML, CSS, JS, PHP, SQL"></ProjectCard>
      </div>
    </div>
  )
}

export default Projects
