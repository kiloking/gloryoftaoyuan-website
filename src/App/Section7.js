import React from 'react'
import Slider from "react-slick";
function Section7({bgimg}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div id="section7" name="link5" className="header h-screen bg-no-repeat bg-cover bg-center relative"
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/' + bgimg})`}} >
      <div className='z-10 w-9/12 absolute inset-0 m-auto top-1/2 -translate-y-3/4'>
        <div className='flex  text-white justify-between'>
          <div className='w-1/2 px-10 mr-10'>
            <img src={process.env.PUBLIC_URL+'/images/section7_title.png'} alt="" />
            <div className='mt-10 leading-8 text-base mb-10'>
            VIP公設休閒，簡單時尚雍容大度；精選羽球場、健身房、兒童遊戲室、韻律教室、閱讀室、多功能教室、球藝室、棋藝室、ktv、宴會廳…等十大公設，打造最好的共享空間，禮遇生活，沉澱煩悶，讓下班後的時間，有另一種選擇。
            </div>
            <img src={process.env.PUBLIC_URL+'/images/'} alt="" />
            <div className=''>
              <Slider {...settings} >
                <div className='border-4 border-white-600 box-border'>
                  <img src={process.env.PUBLIC_URL+'/images/section_slider1.png'} alt="" className='block' />
                </div>
                <div className='border-4 border-white-600 box-border'>
                  <img src={process.env.PUBLIC_URL+'/images/section_slider1.png'} alt="" />
                </div>
                <div className='border-4 border-white-600 box-border'>
                <img src={process.env.PUBLIC_URL+'/images/section_slider1.png'} alt="" />
                </div>
                <div className='border-4 border-white-600 box-border'>
                <img src={process.env.PUBLIC_URL+'/images/section_slider1.png'} alt="" />
                </div>
                <div className='border-4 border-white-600 box-border'>
                <img src={process.env.PUBLIC_URL+'/images/section_slider1.png'} alt="" />
                </div>
                <div className='border-4 border-white-600 box-border'>
                <img src={process.env.PUBLIC_URL+'/images/section_slider1.png'} alt="" />
                </div>
              </Slider>
            </div>
  
          </div>
          <div className='w-1/2 px-10 flex flex-col  items-center'>
            <img src={process.env.PUBLIC_URL+'/images/section7_design.png'} alt="" className='mb-10'/>
            <img src={process.env.PUBLIC_URL+'/images/section7_designlist.png'} alt="" className='w-3/5' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7