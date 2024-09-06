import React from "react";
import { FaAngular, FaReact } from "react-icons/fa";
import { SiSpring, SiTailwindcss, SiSpringboot } from "react-icons/si";

interface Props {
  skillImg: JSX.Element;
  skillName: string;
}

const SkillCard: React.FC<Props> = ({ skillImg, skillName }) => {
  return (
    <div className="skill-card flex flex-col items-center justify-center p-[20px] gap-[5px] bg-dark-gray w-[120px] h-[120px] rounded-[5px] border-[1px] border-color-button lg:p-[35px] lg:w-[150px] lg:h-[150px] ">
      <div className="w-[48px] h-[48px] lg:w-[80px] lg:h-[80px]">
        {skillImg}
      </div>
      <p className="text-[14px] text-gray">{skillName}</p>
    </div>
  );
};

interface DataArray {
  name: string;
  img: JSX.Element;
}

const skillArray: DataArray[] = [
  {
    name: "Spring Framework",
    img: <SiSpring className="fill w-full h-full" />,
  },
  { name: "Spring Boot", img: <SiSpringboot className="fill w-full h-full" /> },
  { name: "Angular", img: <FaAngular className="fill w-full h-full" /> },
  { name: "React", img: <FaReact className="fill w-full h-full" /> },
  {
    name: "Tailwind",
    img: <SiTailwindcss className="fill w-full h-full" />,
  },
];

const Frameworks: React.FC = () => {
  return (
    <div className="skills flex flex-col gap-[30px] items-center m-auto w-full px-[24px] lg:px-[150px] lg:gap-[50px]">
      <p className="text-[24px]">Frameworks e Bibliotecas</p>
      <div className="flex flex-row flex-wrap gap-[30px] justify-center text-center">
        {skillArray.map((skill, index) => (
          <SkillCard
            key={index}
            skillImg={skill.img}
            skillName={skill.name}
          ></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Frameworks;
