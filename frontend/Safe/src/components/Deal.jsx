import React from 'react'
import Nav from './Nav'
import Foote from './Foote'

<style>

</style>
function Deal(arg) {
  return (
     <>
     {/* <Nav /> */}
     <div className="part1">
          <h1>Namaste🙏<span className='text-yellow-300'>{arg.name}</span> </h1>
          <p>Namaste! I am <span className='text-yellow-300'>Safee</span> and I am here to help you find the best deals and fraud prevention solutions. Let's get started.</p> 
          <button className="px-10 py-3 text-black rounded-full bg-yellow-300">Let's Begin</button>
     </div>
     <div className="part2">
          <h1 className='ml-9'>Tell Someting<br/> About Your <br/>Deal </h1>
          <form id="userForm" class="user-form">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required/>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" min="0" required/>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button className='p-3 border-3' type="submit">Submit</button>
    </form>

     </div>

     {/* <Foote/> */}
    {/* <div>Deal</div> */}

     </>
  )
}

export default Deal