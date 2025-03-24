import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#e0ae41] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[3vw] leading-[4.5vw]">
        <span className='bg-gradient-to-r from-blue-900 via-green-800 to-indigo-800 inline-block text-transparent bg-clip-text text-[4vw]'>SafeFreeze</span> is on a mission to make business deals fraud-free, building trust that strengthens connections. With our innovative payment freezing technology, we ensure transparency and fairness in every transaction, empowering buyers and sellers to focus on growing stronger partnerships.
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] border-[#b89447] mt-10 pt-6">
            <div className="w-1/2 ">
            <h1 className='text-[4.5vw]'>Our approach :</h1>
            <button className='px-7 uppercase mt-6 py-3 flex gap-8 items-center bg-[#212121] text-white rounded-full'>Read More
                <div className="w-2 h-2 rounded-full bg-white"></div>
            </button>
            </div>
            <div className="w-1/2 h-[60vh] rounded-3xl bg-[#be9743]"></div>
        </div>

    </div>
  )
}

export default About