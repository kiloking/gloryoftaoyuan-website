import React from 'react'
import { useRecoilState } from 'recoil';
import { modalState, imageState } from './atom/atom';
import Slider from "react-slick";
function Section1() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(imageState);
  const data1 = ['work01.jpg','work02.jpg','work03.jpg','work04.jpg']
  const data2 = ['work05.jpg','work06.jpg','work07.jpg','work08.jpg','work09.jpg']
  const data3 = ['work10.jpg','work11.jpg','work12.jpg','work13.jpg','work14.jpg']
  const settings = {
    dots: true,
    arrows:0,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div id="section1" className='w-full  bg-[#40210F]' name="link1">
      <div className='flex justify-center items-center min-h-screen relative overflow-hidden'>
        <div 
          className='absolute pt-[56%] bg-no-repeat bg-cover bg-right-top w-1/2 right-0 h-full xs:hidden'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_person/p1.png'})`}}>
        </div>
        <div 
          className='absolute pt-[0%] bg-no-repeat bg-cover bg-bottom  top-0 right-0 hidden xs:block w-full aspect-square '
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_person/mobile_p1.png'})`}}>
        </div>
        <div className='z-10 w-3/4 xs:w-full xs:mt-32 xs:mb-14'>
          <div className='flex items-end '>
            <img src={process.env.PUBLIC_URL+'/images/section1_person1.png'} alt="" className='xs:hidden' />
            <div className='ml-12 pr-32 xs:pr-0 xs:mr-12'>
              <img src={process.env.PUBLIC_URL+'/images/section1_person1_title.png'} className="mb-8 xs:w-3/5" alt="" />
              <img src={process.env.PUBLIC_URL+'/images/section1_person1_subtitle.png'} className="my-8 " alt="" />
              <div className='text-white text-base mb-5 text-justify'>百虹建設於1994年設立以來，一路秉持王文堂董事長「以心出發」的信念，如同春耕秋收的農夫，辛勤建設、敬天惜物，以品質為最初心見證，只把最好的呈現給客戶，深耕市場近30年來，在一次次的口碑考驗中獲得成果，期盼持續打造一座座承載住戶幸福的經典建築。</div>
            </div>
          </div>
          <div className='flex mt-3 xs:hidden'>
            <div className='h-full mr-2'  >
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work01.png'} alt="" /></div>
            <div className='h-full mr-2'  >
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work02.png'} alt="" /></div>
            <div className='h-full mr-2'  >
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work03.png'} alt="" /></div>
            <div className='h-full mr-2'  >
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work04.png'} alt="" /></div>
            <div className='h-full mr-2'  >
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work05.png'} alt="" /></div>
            <div className='h-full mr-0'  >
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work06.png'} alt="" /></div>
          </div>
          <div className='p-4 hidden xs:block'>
            <Slider {...settings} >
              {
                data1.map((item,index)=>{
                  return(
                    <div key={index} className=' box-border pt-[56%] relative'
                      
                    >
                      <div className=' absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center'
                          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/person1_work/slide_images/'+item})`}}
                        ></div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>
      
      <div className='border-t-2 border-white relative  xs:h-auto overflow-hidden h-[30vw]'>
        <div 
          className='absolute h-full left-[10%] aspect-square bg-no-repeat bg-cover bg-right-top top-0 xs:hidden '
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_person/p2.png'})`}}>
        </div>
        <div 
          className='absolute pt-[0%] bg-no-repeat bg-cover bg-center top-0 hidden xs:block w-full aspect-square'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_person/mobile_p2.png'})`}}>
        </div>
        <div className='z-10 w-9/12 relative  mx-auto  py-20 px-0 xs:w-full xs:pt-36 xs:pb-14 '>
          <div className='flex items-end xs:flex-col'>
            <div className='w-2/5 ml-7  pr-24 xs:w-full xs:px-12 xs:py-5 xs:ml-0'>
              <img src={process.env.PUBLIC_URL+'/images/section1_person2_title.png'} className="mb-8 xs:w-3/5" alt="" />
              <div className='text-white text-base mb-2 text-justify'>房子要賣得掉才有用，設計一個案子，不僅要注重美感，貼近市場與需求更是一大重點；由市場觀點來設計，以實用性為考量，才能達成最符合市場需求的產品內容。</div>
            </div>
            <div className='w-3/5 xs:hidden'>
              <div className='flex flex-wrap'>
                <div className='m-1' >
                  <img src={process.env.PUBLIC_URL+ '/images/person2_works.png'} alt="" /></div>
              
              </div>
            </div>
            <div className='p-4 hidden xs:block w-full'>
              <Slider {...settings} >
                {
                  data2.map((item,index)=>{
                    return(
                      <div key={index} className=' box-border h-[35vh] relative'
                        
                      >
                        <div className=' absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center'
                            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/person2_work/slide_images/'+item})`}}
                          ></div>
                        {/* <img src={process.env.PUBLIC_URL+'/images/person1_work/slide_images/'+item} alt="" className='block' />_ */}
                      </div>
                    )
                  })
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
      
      <div className='border-t-2 border-white relative  xs:min-h-screen overflow-hidden h-[30vw]'>
          <div 
            className='absolute h-full right-[10%] aspect-square bg-no-repeat bg-cover bg-center top-0 xs:hidden '
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_person/p3.png'})`}}>
          </div>
          <div 
            className='absolute pt-[0%] bg-no-repeat bg-cover bg-center topt-0 hidden xs:block  w-full aspect-square'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_person/mobile_p3.png'})`}}>
          </div>

          <div className='z-10 w-9/12  relative  mx-auto py-20 px-0 xs:w-full xs:pt-40 xs:pb-14 '>
            <div className='flex items-end xs:flex-col'>
              <div className='w-2/5 mr-7  order-2 pl-24  xs:w-full xs:px-12 xs:py-5 xs:mr-0'>
                <img src={process.env.PUBLIC_URL+'/images/section1_person3_title.png'} className="mb-8 xs:w-3/5" alt="" />
                <div className='text-white text-base mb-2 text-justify'>好的建築，是所有完美的結合。因此我們嚴謹計算，從地質調查、結構概述、耐震系統、結構強度，集結很多好的結構安全融入，注重安全與舒適，打造一座經的起時間考驗的房子！</div>
              </div>
              <div className='w-3/5 orer-1 xs:hidden'>
                <div className='flex flex-wrap'>
                  <div className='m-1' >
                    <img src={process.env.PUBLIC_URL+ '/images/person3_works.png'} alt="" /></div>

                </div>
              </div>
              <div className='p-4 hidden xs:block w-full xs:order-2'>
                <Slider {...settings} >
                  {
                    data3.map((item,index)=>{
                      return(
                        <div key={index} className=' box-border h-[35vh] relative'
                          
                        >
                          <div className=' absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center'
                              style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/person3_work/slide_images/'+item})`}}
                            ></div>
                          {/* <img src={process.env.PUBLIC_URL+'/images/person1_work/slide_images/'+item} alt="" className='block' />_ */}
                        </div>
                      )
                    })
                  }
                </Slider>
              </div>
            </div>
          </div>

      
      </div>
    </div>
  )
}

export default Section1