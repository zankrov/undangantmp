import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css'
import play from '../../assets/play-buttton.png'
import pause from '../../assets/pause.png'
import songFile from '../../assets/lagu.mp3'; // Adjust the path as necessary
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  return (
    <div className='music-player'>
      <div onClick={togglePlayPause} className='music-btn'>
        {isPlaying ? <img src={pause}></img> : <img src={play}></img>}
      </div>
      <audio ref={audioRef} src={songFile} loop />
    </div>
  );
};

export default MusicPlayer;




