import React from 'react'

function Section3() {
  return (
    <div id="section3"  className="header h-screen bg-no-repeat bg-cover bg-center relative"
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3_bg.png'})`}} >
       <div className='w-4/5 absolute top-20 left-2/4 -translate-x-2/4  flex items-center '>
        <img src={process.env.PUBLIC_URL+'images/section3_title.png'}  className="order-2 ml-10"/>
        <div className='text-white text-lg font-bold  drop-shadow-lg'>桃園龜山多年等待！致敬在地精英。「中興特區」珍稀都心重劃區，擁站前、中興路、萬壽路三大商圈機能，未來捷運棕線BRH2巨蛋站僅600公尺之遙，火車站、雙國道完善聯外路網；桃林鐵路步道僅600公尺、近鄰三民公園、虎頭山萬頃森林，周邊生活機能成熟，朗闊大境視野無限，胸懷大景生活從容。</div>
      </div>
    </div>
  )
}

export default Section3