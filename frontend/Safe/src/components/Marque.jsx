import React from 'react'
import {motion} from 'framer-motion'
function Marque() {
  return (
    
    <div className='w-full  py-10 bg-blue-800 rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 overflow-hidden border-zinc-300 flex gap-10 whitespace-nowrap">
            <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: 'linear' , repeat: Infinity, duration: 5}} className='text-[17vw] leading-none font-["Founders_Grotesk_X_Condensed"]  font-semibold -md-[6vw] pt-[6vw] uppercase'>Freeze The Risk</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: 'linear' , repeat: Infinity ,duration: 5}} className='text-[17vw] leading-none font-["Founders_Grotesk_X_Condensed"]  font-semibold -md-[6vw] pt-[6vw] uppercase'>Freeze The Risk</motion.h1>
            {/* <h1 className='text-8xl'>Freeze The Risk</h1> */}
        </div>

    </div>
  )
}

export default Marque