import React from 'react'

function Footer() {
  return (
    <div
      className="header h-screen bg-no-repeat bg-cover bg-center relative"
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/headerbg.png'})`}}
    >
      <div className='w-3/5 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 '>
        <img src={process.env.PUBLIC_URL+'images/header_logo.png'} className="w-[60%] mx-auto" />
        <img src={process.env.PUBLIC_URL+'images/header_subtitle.png'} className="mt-16 mx-auto" />
      </div>
      
    </div>
  )
}

export default Footer