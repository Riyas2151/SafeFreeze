import React, { useEffect, useState } from 'react'
import  {motion} from 'framer-motion'

function Cursor() {
    const [mousePos, SetmousePos] = useState({
        x: 0,
        y: 0
      })
      console.log(mousePos);

      useEffect(()=>{
        const mouseMove = (e) => {
            // console.log(e);
            SetmousePos({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove",mouseMove) 
        const variants ={
          default:{
            x: mousePos.x,
            y: mousePos.y
            // scale: 1,
            // transition: {
            //   type: 'spring',
            //   stiffness: 100,
            //   damping: 30
            // }
          }
        }

        return () =>{
            window.removeEventListener("mousemove", mouseMove)
        }
      },[]);
  return (
    <motion.div variants={variants} animate="default" className='w-[1vw] h-[1vw] bg-white rounded-full fixed top-0 left-0'>
        
    </motion.div>
  )
}

export default Cursor