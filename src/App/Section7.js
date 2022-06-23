import React from 'react'

function Section7({bgimg}) {
  return (
    <div id="section4" className="header h-screen bg-no-repeat bg-cover bg-center relative"
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/' + bgimg})`}} >

    </div>
  )
}

export default Section7