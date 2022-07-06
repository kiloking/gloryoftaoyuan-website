import React from 'react'
import Slider from "react-slick";
function Section6({bgimg}) {
  const data = ['p01.jpg','p02.jpg','p03.jpg','p04.jpg','p05.jpg','p06.jpg','p07.jpg']
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
    <div id="section4" name="link4" className="header min-h-screen  relative bg-[#c0a33c]" >
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
            <div className='mt-8  text-base text-justify leading-7 xs:leading-normal'>
            鄰近明星學區龜山國小僅1.2KM，桃園市立圖書館(龜山分館)亦在不遠處；在地人文豐厚，近擁公私立書香學區，龜山國中、桃園高中、銘傳大學，接軌國際教育，車程往返近距離。
            </div>
          </div>
          <div  className='w-1/2  h-full xs:w-full xs:order-2 '>
            <Slider {...settings} >
              {
                data.map((item,index)=>{
                  return(
                    <div key={index} className='border-4 border-white-600 w-full pt-[69%] relative h-full xs:border-0'
                      
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