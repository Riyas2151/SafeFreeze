import React from 'react'
import '../App.css'
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";


function Foote() {
  return (
    <>
    <div className="foot-main">
    <div className="foot">
      <div className="creator">
        {/* <h3>Creator</h3> */}
        <div className="photo">
          <h3>Creator</h3> 
        </div>
      </div>
    <li className='contacts'>
        <h2>Services</h2>
        <a href="https://www.gmail.com/riyasham2151@gmail.com" target="_blank"style={{ display: 'inline-flex', alignItems: 'center' }}><AiOutlineFileDone
        style={{ marginRight:'5px'}}/>Freeze Deals</a><br />
        <a href="https://www.linkedin.com/in/riya-sharma-01877a25b" target="_blank" ><i class="ri-check-double-line"></i>  payFreeze</a><br/>
        <a href="https://www.github.com/SafeApp" target="_blank" style={{ display: 'inline-flex', alignItems: 'center' }}><FaUsersCog style={{ marginRight:'5px'}}/>
        Internet SERVICES</a>

        </li>
        <li className='contacts'>
        <h2>Contacts</h2>
        <a href="https://www.gmail.com/riyasham2151@gmail.com" target="_blank"><i class="ri-mail-fill"></i> Email</a><br />
        <a href="https://www.linkedin.com/in/riya-sharma-01877a25b" target="_blank" style={{ display: 'inline-flex', alignItems: 'center' }}><FaLinkedin style={{ marginRight:'5px'}}/> LinkedIn</a><br/>
        <a href="https://www.github.com/SafeApp" target="_blank"><i class="ri-github-fill"></i> GitHub</a>

        </li>
    </div>
    <h3>Copyright © {new Date().getFullYear()} Safe®. All rights reserved.</h3>
    </div>
     
    </>
  )
}

export default Foote