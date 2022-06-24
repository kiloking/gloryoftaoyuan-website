import React, { useState } from 'react'
import { Link,  animateScroll as scroll } from 'react-scroll'
function Navbar({data}) {
  const [ navDisplay , setNavDisplay ] = useState(false)
  const handleClick = ()=>{
    console.log('cliock')
    setNavDisplay(!navDisplay)
  }
  const scrollToTop =()=> {
    scroll.scrollToTop();
  }
  return (
    <div className='flex flex-wrap items-center justify-between w-full xs:py-4 px-4
    py-1 text-white fixed z-50
    bg-[#40210fe5]'>
      <img src={process.env.PUBLIC_URL+'images/logo.png'} alt="" className='h-10 xs:h-7 cursor-pointer' onClick={scrollToTop}/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer hidden xs:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={handleClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div className=" w-auto flex items-center xs:w-full  xs:justify-center xs:hidden" id="menu">
        <ul className={"navbar pt-4 text-white text-xs tracking-widest flex justify-between pt-0 xs:flex-col xs:justify-center xs:text-xl xs:mt-3 "}
        >
          {data.map((item,index)=>{
            return(
              <li key={item.name}>
              <Link 
                className="p-3 my-2 block hover:text-yellow-600 transition xs:p-3 cursor-pointer" 
                activeClass="active" 
                to={item.type} spy={true} smooth={true} duration={600}
                >
                  <div className='border-x px-2 leading-4 '>{item.name}</div>
              </Link>
            </li>
            )
          })}


        </ul>
        <Link 
          activeClass="active" 
          to='footer' spy={true} smooth={true} duration={600}
          className='footerbtn bg-[#C0A43C] px-4 py-2 text-xs text-bold mx-4 text-[#40210F] hover:bg-[#E8BD1E] xs:my-4 cursor-pointer'>立即預約</Link>
          <a href="/" target='_blank'>
            <img src={process.env.PUBLIC_URL+'images/fbicon.png'} alt="" className=''/>
          </a>
        
      </div>
      <div className={`mobileNavbar hidden xs:flex absolute w-full top-0 left-0  bg-[#40210F] p-4 text-xl flex-col items-center transition-all duration-300 ${navDisplay ? 'translate-y-14 opacity-100' : '-translate-y-full opacity-20'}`}>
          {data.map((item,index)=>{
            return(
              <div key={item.name}>
                <a className="p-3 my-2 block hover:text-yellow-600 transition xs:p-3" href="/">
                    <div className='border-x px-8 leading-4 '>{item.name}</div>
                </a>
              </div>
            )
          })}
          <Link 
            activeClass="active" 
            to='footer' spy={true} smooth={true} duration={600}
            className='footerbtn bg-[#C0A43C] px-8 py-2 text-xl mx-4 text-[#40210F] hover:bg-[#E8BD1E] xs:my-4 cursor-pointer'>立即預約</Link>
          <a href="/" target='_blank'>
            <img src={process.env.PUBLIC_URL+'images/fbicon.png'} alt="" className=''/>
          </a>
      </div>
    </div>
  )
}

export default Navbar