import React from 'react'
import Slider from "react-slick";
function Section6({bgimg}) {
  const data = ['p01.jpg','p02.jpg','p03.jpg','p04.jpg','p05.jpg','p06.jpg','p07.jpg']
  const settings = {
    dots: true,
    arrows:0,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div id="section4" name="link4" className="header h-screen  relative bg-[#c0a33c]" >
      <div className='absolute pt-[56%] bg-no-repeat bg-cover bg-right-top inset-0 xs:hidden'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/'+bgimg })`}}></div>
      <div 
        className='absolute bg-no-repeat bg-cover bg-center-top  hidden xs:block h-screen w-full'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/mobile_section6_bg.png'})`}}>
      </div>
      <div className=' absolute top-0 left-0 ml-5 hidden xs:block z-10'>
        <img src={process.env.PUBLIC_URL+'/images/mobile_section6_title.png'} alt="" />
      </div>
      <div className='z-10 w-9/12 relative mx-auto py-36 xs:w-full xs:py-20'>
        <div className='flex  text-white items-stretch xs:flex-col'>
          <div className='w-1/2 bg-[#c0a33cbf] flex flex-col justify-center items-center px-20 py-4 box-border xs:w-full xs:px-10 xs:mb-10 xs:bg-transparent'>
            <img src={process.env.PUBLIC_URL+'/images/section6_title.png'} alt=""  className='w-4/5 xs:hidden'/>
            <img src={process.env.PUBLIC_URL+'/images/mobile_section6_subtitle.png'} alt=""  className='w-full hidden xs:block'/>
            <div className='mt-10 leading-8 text-base'>
            萬壽路—「龜山正中心，生活正核心。」匯聚交通、商圈、行政、學區…，等精華區段，沿街商店、銀行、攤販匯聚，從萬壽路擴散出去，形成最豐富的生活聚落；時代更迭，繁華如昔，老桃園人才懂得傳承地段，未來捷運棕線行經，鐵道經濟再起，鄰里街廓即將煥然一新，發展出不一樣的都會風情。
            </div>
          </div>
          <div  className='w-1/2  h-full xs:w-full xs:order-2 '>
            <Slider {...settings} >
              {
                data.map((item,index)=>{
                  return(
                    <div className='border-4 border-white-600 w-full pt-[69%] relative h-full xs:border-0'
                      
                    >
                      <div className=' absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center'
                          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section6/'+item})`}}
                        ></div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6