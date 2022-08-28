import React, { useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show,setShow] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100) {
                setShow(true)
            }else setShow(false)
        })
        return() => window.removeEventListener("scroll",() => { })
    },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
            className='nav_logo'
            src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
            alt='Netflix logo'/>
    </div>
  )
}

export default Nav


// this.window in console