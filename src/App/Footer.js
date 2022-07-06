import React, { useState } from 'react'
import { useForm, reset } from "react-hook-form";
import axios from 'axios';
function Footer() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      place: "",
    }
  });
  const [formStatus , setFormStatus] = useState(false)
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  const onSubmit = data => {
    console.log(data)
    axios.post('https://sheet.best/api/sheets/c045db18-f183-40d4-8e7f-ac7f53cb603f', data)
    .then(response => {
      console.log(response);
      sendFormStatusModal()
    })
    .catch(err=>{
      console.log(err)
    })
  };

  //https://sheet.best/api/sheets/c045db18-f183-40d4-8e7f-ac7f53cb603f
  return (
    <div
      className="header  relative" name="footer"
      style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/headerbg.png'})`}}
    > 
    {formStatus && <div className={'fixed w-full  z-40 inset-0 transition-all '}onClick={()=>setFormStatus(false)}>
      <div className={`w-3/5 mx-auto  rounded-md p-4 bg-[#000000b4] text-white text-xs top-[15%] relative transition-all duration-300 delay-1000   ${formStatus ? " opacity-100 blur-none " : "opacity-0 blur-lg "}`}>表單已送出。我們將盡快電話聯絡您，詢問並安排您方便的賞屋時間。如有任何問題，歡迎撥打接待專線03-319-1177直接聯繫我們，謝謝！</div>
    
    </div>}
      <div className='absolute pt-[56%] bg-no-repeat bg-cover bg-right-top inset-0 '
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/headerbg.png' })`}}></div>
      <div className='w-3/5 relative mx-auto  pt-32 xs:w-full xs:p-6'>
        <div className='flex xs:flex-col mt-10 mb-5 xs:p-4'>
          <img src={process.env.PUBLIC_URL+'/images/footer_title.png'} alt="" className='w-1/2 xs:hidden'/>
          <div className=' hidden xs:flex flex-col justify-center items-center '>
            <img src={process.env.PUBLIC_URL+'/images/mobile_footer_title.png'} alt="" className='w-3/5 mb-5' />
            <img src={process.env.PUBLIC_URL+'/images/mobile_footer_subtitle.png'} alt="" className='w-full' />
          </div>
          <form className='w-full flex flex-col justify-between ml-10 xs:ml-0 ' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex items-center mt-3'>
                <div className='w-4/5 '>
                  <input type="text" className="
                  block  w-full  rounded-md   border-gray-300   shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                px-5 py-3 " placeholder="姓名"    {...register("name", { required: true, maxLength: 20 })}/>
                </div>

                <div className="relative w-2/5 ml-1">
                  <select className="block appearance-none w-full  rounded-md   border-gray-300   shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                px-5 py-3" id="grid-state" {...register("gender")}>
                    <option value="先生">先生</option>
                    <option value="小姐">小姐</option>
                  </select>
                </div>
              </div>

              <input type="text" className="
                mt-1  block  w-full  rounded-md   border-gray-300   shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                px-5 py-3
              " placeholder="行動電話" {...register("tel", { required: true, maxLength: 20 })}/>
              <input type="text" className="
                mt-1  block  w-full  rounded-md   border-gray-300   shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                px-5 py-3
              " placeholder="居住地" {...register("place", {  maxLength: 20 })}/>
              <input type="text" className="
                mt-1  block  w-full  rounded-md   border-gray-300   shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                px-5 py-3
              " placeholder="選擇日期 年/月/日" onFocus={(e) => e.target.type = 'date'}  onBlur={(e) => e.target.type = 'text'} {...register("date", { required: true, maxLength: 20 })}/>
              <div className="md:flex md:items-center ">
         
                <label className=" block text[#40210F] font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" defaultChecked/>
                  <span className="text-sm">
                    我同意將個人資料傳送給《百虹歡璽城》做為客戶管理與服務用途
                  </span>
                </label>
              </div>
              <button className=' rounded-md  bg-amber-800 text-center text-white p-2' type='submit'>送出表單</button>
          </form>
        </div>
        <div className='mt-10 xs:mx-auto'>
          <img src={process.env.PUBLIC_URL+'/images/footer_info.png'} alt="" className='xs:hidden' />
          <img src={process.env.PUBLIC_URL+'/images/mobile_footer_info.png'} alt="" className='hidden xs:block w-full' />
        </div>
        <div className='mt-10'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.20434139202!2d121.3305662!3d24.993171599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681ef4ba7bc4c9%3A0x5b1a452c3c1dcadb!2zMzMz5qGD5ZyS5biC6b6c5bGx5Y2A6JCs5aO96Lev5LqM5q61MTE5OeiZnw!5e0!3m2!1szh-TW!2stw!4v1656004545834!5m2!1szh-TW!2stw" width="100%" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
    </div>
  )
}

export default Footer