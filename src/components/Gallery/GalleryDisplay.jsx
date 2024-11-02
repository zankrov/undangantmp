import React, {useState} from 'react'
import './GalleryStyle.css'
import {Media} from './GalleryList'
const GalleryDisplay = () => {
  const [file, setFile] = useState(null);

  const youtubeEmbedUrl = "https://www.youtube.com/embed/Nm_oHgn4rnA?si=WaWpm6Xw68m7YiJs"; // Replace with your actual video ID


  // console.log(Media)
  return (
    <section id="works" className="block works-block">
      <div className=''>
        <div className="title gold container flex center">
          <h1 data-aos="fade-up">Gallery</h1>
        </div>
        <div>
        <div className="youtube-video">
          <iframe
            width="560"
            height="315"
            src={youtubeEmbedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
      </div>
          
      
      <div className="media-container" data-aos="fade-up">
        {
          Media.map((file, index) => (
            <div className="media" key={index}
            onClick={() => setFile(file)}>
              {
                file.type === 'image'
                ?<img src={file.url} alt='' />
                :<video src={file.url} muted/>
              }
            </div>
            
          ))
        }
      </div>
      <div className="popup-media"  style={{display:file ? 'block' : 'none'}}>
        <a onClick={() =>setFile(null)} className='x'>X</a>
          {
            file?.type === 'video'
            ? <video src={file?.url} muted autoPlay controls />
            : <img src={file?.url} />
          }
      </div>
    </div>  


      </div>  
    </section>

  )
}

export default GalleryDisplay