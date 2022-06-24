import React from 'react'

function Section2() {
  return (
    <div id="section2" name="link2"
    className="header h-screen bg-no-repeat bg-cover bg-center relative"
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section2_bg.png'})`}}
    >
      <div className='w-4/5 absolute top-20 left-2/4 -translate-x-2/4  flex items-center '>
        <img src={process.env.PUBLIC_URL+'images/section2_title.png'}  />
        <div className='text-white text-lg font-bold ml-10 drop-shadow-lg'>近6000坪朗闊大境，胸懷大景生活從容，基地結構立面規格方正，大氣魄大格局，制震、舒適、靜音，安全有保障！百虹建設以品質為最初心見證，榮耀每一位在地菁英，傳承心中最美風景。</div>
      </div>
    </div>
  )
}

export default Section2