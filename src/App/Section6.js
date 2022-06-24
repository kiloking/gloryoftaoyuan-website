import React from 'react'
import Slider from "react-slick";
function Section6({bgimg}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div id="section4" name="link4" className="header h-screen bg-no-repeat bg-cover bg-center relative"
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/' + bgimg})`}} >
      <div className='z-10 w-9/12 absolute inset-0 m-auto top-1/2 -translate-y-1/2'>
        <div className='flex  text-white '>
          <div className='w-1/2 bg-[#c0a33cbf] flex flex-col justify-center items-center px-20 py-4 box-border'>
            <img src={process.env.PUBLIC_URL+'/images/section4_title.png'} alt=""  className='w-4/5'/>
            <div className='mt-10 leading-8 text-base'>
            萬壽路—「龜山正中心，生活正核心。」匯聚交通、商圈、行政、學區…，等精華區段，沿街商店、銀行、攤販匯聚，從萬壽路擴散出去，形成最豐富的生活聚落；時代更迭，繁華如昔，老桃園人才懂得傳承地段，未來捷運棕線行經，鐵道經濟再起，鄰里街廓即將煥然一新，發展出不一樣的都會風情。
            </div>
          </div>
          <div  className='w-1/2 border-0 border-white-600  box-border bg-black'>
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
      </div>
    </div>
  )
}

export default Section6