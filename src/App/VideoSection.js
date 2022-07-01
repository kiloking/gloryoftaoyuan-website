import React from 'react'
import ReactPlayer from 'react-player'

function VideoSection() {
  return (
    <div id="videoSection" className='w-full h-screen relative xs:h-[30vh]'>
      <div className="relative h-screen xs:h-[30vh]" >
          <ReactPlayer 
            className='absolute inset-0 '
            url='https://www.youtube.com/watch?v=ND-oAPEVL3I' 
            width= "100%"
            height= "100%"
            controls={true}
            volume={0.4}
          />
        </div>
    </div>
  )
}

export default VideoSection