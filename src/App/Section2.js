import React from 'react'
import Slider from "react-slick";
function Section2() {
  const data = ['p01.jpg','p02.jpg','p03.jpg','p04.jpg','p05.jpg']
  const settings = {
    dots: true,
    arrows:0,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div id="section2" name="link2" className="header min-h-screen  relative bg-[#3BADE4]" > 
      <div className=' absolute inset-0 bg-no-repeat bg-cover bg-center xs:hidden'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section2_bg.png'})`}}>
      </div>
      <div className=' relative ml-5 hidden xs:block'>
        <img src={process.env.PUBLIC_URL+'/images/mobile_section2_title.png'} alt="" />
      </div>
      <div className='w-full  bg-no-repeat bg-cover bg-center mt-10 hidden xs:block'
        // style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/mobile_section2_bg.png'})`}}
        >
        <Slider {...settings} >
          {
            data.map((item,index)=>{
              return(
                <div key={index} className='border-4 border-white-600 w-full pt-[69%] relative h-full xs:border-0'
                  
                >
                  <div className=' absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center'
                      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section2/'+item})`}}
                    ></div>
                </div>
              )
            })
          }
        </Slider>
        
      </div>
      <div className='w-4/5 mx-auto my-6 hidden xs:block'>
        <img src={process.env.PUBLIC_URL+'/images/mobile_section2_subtitle.png'} alt="" className='w-full' />
        <div className='text-white text-base drop-shadow-lg mt-8 text-justify'>近6000坪朗闊大境，胸懷大景生活從容，基地結構立面規格方正，大氣魄大格局，制震、舒適、靜音，安全有保障！百虹建設以品質為最初心見證，榮耀每一位在地菁英，傳承心中最美風景。</div>
      </div>

  
      <div className='w-4/5 absolute top-20 left-2/4 -translate-x-2/4  flex items-center xs:hidden'>
        <img src={process.env.PUBLIC_URL+'images/section2_title.png'}  />
        <div className='text-white text-lg font-bold ml-10 drop-shadow-lg text-justify'>近6000坪朗闊大境，胸懷大景生活從容，基地結構立面規格方正，大氣魄大格局，制震、舒適、靜音，安全有保障！百虹建設以品質為最初心見證，榮耀每一位在地菁英，傳承心中最美風景。</div>
      </div>
    </div>
  )
}

export default Section2