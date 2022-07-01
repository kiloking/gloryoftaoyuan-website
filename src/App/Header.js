import React from 'react'

function Header() {
  return (
    <div
      
      className="header h-screen bg-no-repeat bg-cover bg-center "
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/headerbg.png'})`}}
    >
      <div className='w-3/5 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4   xs:w-4/5'>
        <img src={process.env.PUBLIC_URL+'images/header_logo.png'} className="w-[60%] mx-auto xs:hidden" />
        <img src={process.env.PUBLIC_URL+'images/header_subtitle.png'} className="mt-16 mx-auto xs:hidden" />
        <img src={process.env.PUBLIC_URL+'images/mobile_header_logo.png'} className="w-[70%] mx-auto hidden xs:block" />
        <img src={process.env.PUBLIC_URL+'images/mobile_header_subtitle.png'} className="mt-16 mx-auto hidden xs:block xs:mt-10" />
      </div>

      
    </div>
  )
}

export default Header