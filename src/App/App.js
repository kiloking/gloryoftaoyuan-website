import './App.css';
import React, {useState} from 'react';
import Navbar from './Navbar';
import Header from './Header';
import VideoSection from './VideoSection';
import Section1 from './section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Footer from './Footer';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, imageState } from './atom/atom';
import { Link,  animateScroll as scroll } from 'react-scroll'
//data
import NavbarData from './Navbar.json'

const Modal = ({ src, alt, caption, onClose }) => {

  const image = useRecoilValue(imageState);
  return (
    <div className="modal fixed h-screen pt-20 z-50 left-0 top-0 w-full bg-[#352013]/[0.8] flex justify-center items-center  " onClick={onClose}>
      
      <div className='modal-content m-auto w-3/5 h-full min-h-full flex flex-col items-center relative'>
        <span className="close absolute top-0 right-0  font-bold transition rounded-full bg-black w-12 h-12 p-4  flex justify-center items-center cursor-pointer" onClick={onClose}>
          <img src={process.env.PUBLIC_URL+'/images/close.png'} alt="" className='w-full' />
        </span>
        <img src={process.env.PUBLIC_URL+'/images'+image.src } alt={alt}  className="h-full"/>
        {caption.length > 0 && <div className="caption m-auto block w-2/5 text-center py-2 h-10 text-white">{image.caption}</div>}
      </div>
      
      
    </div>
  )
}

function App() {
  const { navbar} = NavbarData
  const [isOpen, setIsOpen] = useRecoilState(modalState)
  const showModal = useRecoilValue(modalState);
  // const showModal = () => setIsOpen(true)
  return (

      <div className="App">
          <div className='  fixed bottom-0 left-0  hidden xs:block w-full z-40'>
            <div className='flex text-white justify-between '>
              <a href="tel:0000000" className='flex flex-col items-center p-5 bg-[#42210bd0] mr-2 flex-1'>
                <img src={process.env.PUBLIC_URL+'/images/phone.png'} alt="" />
                <div>立即來電</div>
              </a>
              <Link activeClass="active" to='footer' spy={true} smooth={true} duration={600}
                className='flex flex-col items-center p-5 bg-[#42210bd0] mr-2 flex-1'>
                <img src={process.env.PUBLIC_URL+'/images/pen.png'} alt="" />
                <div>立即預約</div>
              </Link>
              <a href="https://www.facebook.com/" target="_blank" className='flex flex-col items-center p-5 bg-[#42210bd0] flex-1' rel="noreferrer">
                <img src={process.env.PUBLIC_URL+'/images/fb.png'} alt="" />
                <div>粉絲專頁</div>
              </a>
              
            </div>
          </div>
          <Navbar data={navbar}/>
          <Header />
          <VideoSection />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 bgimg={'section4_bg.png'}/>
          <Section5 bgimg={'section5_bg.png'}/>
          <Section6 bgimg={'section6_bg.png'}/>
          <Section7 bgimg={'section7_bg.png'}/>
          <Footer />
          {showModal && (
            <Modal
              src="https://source.unsplash.com/NQSWvyVRIJk/800x599"
              alt="snow"
              caption="caption"
              onClose={() => setIsOpen(false)}
            />
          )}
        
        
      </div>

  );
}

export default App;
