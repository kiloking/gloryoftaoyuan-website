import React from 'react'

function Section1() {
  return (
    <div id="section1" className='w-full  bg-[#40210F] '>
      <div className='flex justify-center items-center h-screen relative'>
        <div 
          className='absolute pt-[56%] bg-no-repeat bg-cover bg-right-top inset-0'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_bg.png'})`}}>
        </div>
        <div className='z-10 w-3/4 '>
          <div className='flex items-end'>
            <img src={process.env.PUBLIC_URL+'/images/section1_person1.png'} alt="" />
            <div className='ml-12 pr-32'>
              <img src={process.env.PUBLIC_URL+'/images/section1_person1_title.png'} className="mb-8" alt="" />
              <img src={process.env.PUBLIC_URL+'/images/section1_person1_subtitle.png'} className="my-8" alt="" />
              <div className='text-white text-base font-bold mb-5'>百虹建設於1994年設立以來，一路秉持王文堂董事長「以心出發」的信念，如同春耕秋收的農夫，辛勤建設、敬天惜物，以品質為最初心見證，只把最好的呈現給客戶，深耕市場近30年來，在一次次的口碑考驗中獲得成果，期盼持續打造一座座承載住戶幸福的經典建築。</div>
            </div>
          </div>
          <div className='flex mt-5'>
            <div className='h-full mr-2'>
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work01.png'} alt="" /></div>
            <div className='h-full mr-2'>
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work02.png'} alt="" /></div>
            <div className='h-full mr-2'>
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work03.png'} alt="" /></div>
            <div className='h-full mr-2'>
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work04.png'} alt="" /></div>
            <div className='h-full mr-2'>
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work05.png'} alt="" /></div>
            <div className='h-full mr-0'>
              <img src={process.env.PUBLIC_URL+'/images/person1_work/work06.png'} alt="" /></div>
          </div>
        </div>
      </div>
      
      <div className='border border-indigo-600 relative'>
        <div className='w-10/12 mx-auto'>
          <div className='w-full'>
            <img src={process.env.PUBLIC_URL+'/images/section1_person2.png'} alt="" />
          </div>
        </div>
        <div className='z-10 w-9/12 absolute inset-0 m-auto top-1/2 -translate-y-1/2 left-20'>
          <div className='flex items-end '>
            <div className='w-2/5 mr-7'>
              <img src={process.env.PUBLIC_URL+'/images/section1_person2_title.png'} className="mb-8" alt="" />
              <div className='text-white text-base font-bold mb-5'>房子要賣得掉才有用，設計一個案子，不僅要注重美感，貼近市場與需求更是一大重點；由市場觀點來設計，以實用性為考量，才能達成最符合市場需求的產品內容。</div>
            </div>
            <div className='w-3/5'>
              <div className='flex flex-wrap'>
                <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person2_work/work01.png'} alt="" className=' h-[173px]'/></div>
                <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person2_work/work02.png'} alt="" /></div>
                <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person2_work/work03.png'} alt="" /></div>
                <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person2_work/work04.png'} alt="" /></div>
                <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person2_work/work05.png'} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border border-indigo-600 relative'>
        <div className='w-10/12 mx-auto'>
          <div className='w-full '>
            <img src={process.env.PUBLIC_URL+'/images/section1_person3.png'} alt="" className='ml-auto' />
          </div>

          <div className='z-10 w-9/12 absolute inset-0 m-auto top-1/2 -translate-y-1/2 right-20'>
            <div className='flex items-end'>
              <div className='w-2/5 mr-7  order-2'>
                <img src={process.env.PUBLIC_URL+'/images/section1_person3_title.png'} className="mb-8" alt="" />
                <div className='text-white text-base font-bold mb-5'>好的建築，是所有完美的結合。因此我們嚴謹計算，從地質調查、結構概述、耐震系統、結構強度，集結很多好的結構安全融入，注重安全與舒適，打造一座經的起時間考驗的房子！</div>
              </div>
              <div className='w-3/5 orer-1'>
                <div className='flex flex-wrap'>
                  <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person3_work/work01.png'} alt="" className=' h-[173px]'/></div>
                  <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person3_work/work02.png'} alt="" /></div>
                  <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person3_work/work03.png'} alt="" /></div>
                  <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person3_work/work04.png'} alt="" /></div>
                  <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person3_work/work05.png'} alt="" /></div>
                  <div className='m-1 '><img src={process.env.PUBLIC_URL+ '/images/person3_work/work06.png'} alt="" /></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section1