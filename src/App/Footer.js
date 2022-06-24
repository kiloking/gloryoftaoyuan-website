import React from 'react'

function Footer() {
  return (
    <div
      className="header h-screen bg-no-repeat bg-cover bg-center relative" name="footer"
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/headerbg.png'})`}}
    >
      <div className='w-3/5 absolute top-28 left-2/4 -translate-x-2/4  '>
        <div className='flex'>
          <img src={process.env.PUBLIC_URL+'/images/footer_title.png'} alt="" className='w-1/2'/>
          <form className='w-full flex flex-col justify-between ml-10'>
              <input type="text" className="
                mt-1  block  w-full  rounded-md   border-gray-300   shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                px-5 py-3
              " placeholder="姓名" />
              <input type="text" className="
                mt-1  block  w-full  rounded-md   border-gray-300   shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                px-5 py-3
              " placeholder="行動電話" />
              <input type="email" className="
                mt-1  block  w-full  rounded-md   border-gray-300   shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                px-5 py-3
              " placeholder="Email" />
              <input type="date" className="
                mt-1  block  w-full  rounded-md   border-gray-300   shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                px-5 py-3
              " placeholder="預約時間" />
          </form>
        </div>
        <div className='mt-10'>
          <img src={process.env.PUBLIC_URL+'/images/footer_info.png'} alt="" />
        </div>
        <div className='mt-10'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.20434139202!2d121.3305662!3d24.993171599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681ef4ba7bc4c9%3A0x5b1a452c3c1dcadb!2zMzMz5qGD5ZyS5biC6b6c5bGx5Y2A6JCs5aO96Lev5LqM5q61MTE5OeiZnw!5e0!3m2!1szh-TW!2stw!4v1656004545834!5m2!1szh-TW!2stw" width="100%" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
    </div>
  )
}

export default Footer