import React, { useEffect, useState } from "react";

function Eyes() {
 const [rotate,SetRotate] = useState(0);
  useEffect(()=>{
      window.addEventListener("mousemove",(e)=>{
      // console.log(e.clientX ,e.clientY);
      let mouseX=e.clientX;
      let mouseY=e.clientY;

      let deltaX=mouseX - window.innerWidth/2;
      let deltaY=mouseY - window.innerHeight/2;

      var angle= Math.atan2(deltaX,deltaY) * (180/Math.PI);
      SetRotate(180-angle+80);
      
    })
  })

  return (
  <div className="eyes w-full h-screen overflow-hidden">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center relative">
  <div className="top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute flex gap-10">
     <div className="w-[15vw] h-[15vw] flex justify-center items-center bg-zinc-100 rounded-full ">
      {/* black circle */}
        <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full ">
        {/* line causes rotation of inner dot */}
        <div style={{transform: `translate(-50%, -50%)  rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            {/* inner dot */}
             <div className="  w-[2vw] h-[2vw] bg-zinc-100 rounded-full "></div>
        </div>
        </div>
    </div>
    <div className="w-[15vw] h-[15vw] flex justify-center items-center bg-zinc-100 rounded-full ">
       {/* black circle */}
        <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full ">
         {/* line causes rotation of inner dot */}
         <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg )`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            {/* inner dot */}
             <div className="w-[2vw] h-[2vw] bg-zinc-100 rounded-full "></div>
        </div>  
        </div>
    </div>
    <div className="text text-zinc-900 w-80 font-['candara']  text-6xl font-semibold  text-center">
    <h1>We have an eye on every <span className="text-red-800 font-['gigi']">Fraud </span></h1>
  </div>
  </div>

</div>
</div>

  );
}

export default Eyes;
