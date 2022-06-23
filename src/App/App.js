import './App.css';

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
import Footer from './Footer'
//data
import NavbarData from './Navbar.json'


function App() {
  const { navbar} = NavbarData
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
