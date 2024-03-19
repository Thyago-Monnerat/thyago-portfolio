import React from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const scrollTop = () =>{
  console.log('funf')
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
} 
})

const ToTop: React.FC = () =>{
  return (
    <div onClick={scrollTop} className="to-top lg:hidden fixed right-0 bottom-0 p-[5px] m-[5px] rounded-[50%] bg-[var(--main-green)]">
      <MdOutlineKeyboardDoubleArrowUp className="w-[35px] h-[35px] fill-[black]"/>
    </div>
  )
}

export default ToTop
