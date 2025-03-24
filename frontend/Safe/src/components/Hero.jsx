import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Hero() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="heroHeading mt-40 px-20">
          {["We Smartly","Freeze the Risk ,","Secure the Pay."].map((item,index)=>{
            return (
               <div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (<div className=' mr-[1vw] rounded-md w-[8vw] h-[5vw] mt-3'><img src="logo.png" alt=""  className='-my-5'/></div>) }
                        <h1 className=" pt-[.3vw] md-[1vw] uppercase text-[6.5vw] leading-[6vw] font-bold tracking-tighter font- ['Founders_Grotesk_X']">{item}</h1>
                </div>
                    </div>)
          })}
        </div>
        <div className="border-t-[1px] mt-32 border-zinc-800 flex justify-between items-center py-3 px-20">
          {["For Public and Private Businesses","For secure, Fraud Free Transactions"].map((item,index)=> <p className='font-light text-md tracking-tighter leading-none'>{item}</p>)}
          <div className="start flex items-center gap-5">
            <div className="border-[2px] border-zinc-500 font-light rounded-full px-6 uppercase py-1">Safe a Deal
              {/* <Link to='/Deal'>Safe a Deal</Link> */}
              </div>
            <div className="w-8 h-8 border-[2px] flex items-center justify-center border-zinc-400  rounded-full">
              <MdArrowOutward/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero