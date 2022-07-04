import React from 'react'
import Slider from "react-slick";
function Section7({bgimg}) {
  const data = ['p01.jpg','p02.jpg','p03.jpg','p04.jpg','p05.jpg','p06.jpg','p07.jpg','p08.jpg','p09.jpg','p10.jpg']
  const settings = {
    dots: true,
    arrows:0,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div id="section7" name="link5" className="header h-auto r relative bg-[#42210b]">
      <div className='absolute pt-[56%] bg-no-repeat bg-cover bg-right-top inset-0 xs:hidden'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/'+bgimg })`}}></div>
      <div className=' absolute top-0 left-0 ml-5 hidden xs:block z-10'>
        <img src={process.env.PUBLIC_URL+'/images/mobile_section7_title.png'} alt="" />
      </div>
      <div className='z-10 w-9/12 relative mx-auto py-24 xs:w-full'>
        <div className='flex  text-white justify-between items-stretch xs:flex-col'>
          <div className='w-1/2 px-10 mr-10  flex flex-col justify-center items-center xs:w-full xs:px-10 xs:mb-10'>
            <div className='  py-4 box-border xs:order-2 '>
              <img src={process.env.PUBLIC_URL+'/images/section7_title.png'} alt="" className='xs:hidden'/>
              <img src={process.env.PUBLIC_URL+'/images/mobile_section7_subtitle.png'} alt="" className='  hidden xs:block'/>
              <div className='mt-8 leading-8 text-base mb-10 text-justify'>
                VIP公設休閒，簡單時尚雍容大度；精選羽球場、健身房、兒童遊戲室、韻律教室、閱讀室、多功能教室、球藝室、棋藝室、ktv、宴會廳…等十大公設，打造最好的共享空間，禮遇生活，沉澱煩悶，讓下班後的時間，有另一種選擇。
              </div>
              <img src={process.env.PUBLIC_URL+'/images/'} alt="" />
            </div>
            <div  className='w-full  h-full xs:w-full xs:order-1 '>
              <Slider {...settings} >
                {
                  data.map((item,index)=>{
                    return(
                      <div className='border-4 border-white-600 w-full pt-[69%] relative h-full xs:border-0'
                        
                      >
                        <div className=' absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center'
                            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section5/'+item})`}}
                          ></div>
                      </div>
                    )
                  })
                }
              </Slider>
            </div>
  
          
          </div>        
          <div className='w-1/2 px-10 flex flex-col  items-center xs:w-full'>
            <img src={process.env.PUBLIC_URL+'/images/section7_design.png'} alt="" className='mb-10'/>
            <img src={process.env.PUBLIC_URL+'/images/section7_designlist.png'} alt="" className='w-4/5 xs:w-full'  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7