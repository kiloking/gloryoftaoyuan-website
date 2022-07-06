import React from 'react'

function Section3() {
  return (
    <div id="section3"  className="header min-h-screen relative bg-[#3BADE4]"
 >
      <div className=' absolute inset-0 bg-no-repeat bg-cover bg-center xs:hidden'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3_bg.png'})`}}>
      </div>
      <div className=' absolute top-0 left-0 ml-5 hidden xs:block z-10'>
        <img src={process.env.PUBLIC_URL+'/images/mobile_section3_title.png'} alt="" />
      </div>
      <div className='overflow-hidden hidden drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)] xs:block'>
        <div className=' overflow-x-scroll '>
          <div
            className='w-[640px] h-[50vh] bg-no-repeat bg-cover bg-center left-0 '
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/mobile_section3_bg.png'})`}}
          >

          </div>
        </div>
      </div>
      <div className='w-4/5 mx-auto my-10 hidden xs:block'>
        <img src={process.env.PUBLIC_URL+'/images/mobile_section3_subtitle.png'} alt="" className='w-full' />
        <div className='text-white text-base drop-shadow-lg mt-8 text-justify'>桃園龜山多年等待！致敬在地精英。「巨蛋生活圈」珍稀都心重劃區，擁站前、中興路、萬壽路三大商圈機能，未來捷運棕線BRH2巨蛋站僅600公尺之遙，火車站、雙國道完善聯外路網；桃林鐵路步道僅600公尺、近鄰三民公園、虎頭山萬頃森林，周邊生活機能成熟，朗闊大境視野無限，胸懷大景生活從容。</div>
      </div>
        
       <div className='w-4/5 absolute top-20 left-2/4 -translate-x-2/4  flex items-center xs:hidden'>
        <img src={process.env.PUBLIC_URL+'images/section3_title.png'}  className="order-2 ml-10"/>
        <div className='text-white text-lg font-bold  drop-shadow-lg text-justify'>桃園龜山多年等待！致敬在地精英。「巨蛋生活圈」珍稀都心重劃區，擁站前、中興路、萬壽路三大商圈機能，未來捷運棕線BRH2巨蛋站僅600公尺之遙，火車站、雙國道完善聯外路網；桃林鐵路步道僅600公尺、近鄰三民公園、虎頭山萬頃森林，周邊生活機能成熟，朗闊大境視野無限，胸懷大景生活從容。</div>
      </div>
    </div>
  )
}

export default Section3