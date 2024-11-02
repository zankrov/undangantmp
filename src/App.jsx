import React, { useEffect, useState } from 'react';
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Paper from './components/Paper/Paper'

import om from './assets/om-swastyastu.png'
import orang1 from './assets/laki.jpg'
import orang2 from './assets/perempuan.jpg'
import map from './assets/map.png'

import flower from'./assets/frame.png';
import flower2 from'./assets/flower-2.png';
import { ReactComponent as CalendarIcon } from './assets/calendar-days-regular.svg';
import { ReactComponent as ClockIcon } from './assets/clock-regular.svg';

import Countdown from './components/Countdown';
import Modal from './components/Modal/Modal';
import Galery from './components/Gallery/GalleryDisplay';

import CommentForm from './components/firebase/CommentForm';
import CommentList from './components/firebase/CommentList';
import FormatDateTime from './FormatDateTime';

import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import ModalAmplop from './components/Modal/ModalAmplop';

const Invitation = () => {
  const [openModal, setOpenModal] = useState(true);
  const [openContent, setOpenContent] = useState(false);

  

  const [myName, setMyName] = useState('Guest');

  useEffect(() => {
    // Extract the 'name' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');

    // Set the name from the parameter, or use 'Guest' as a default
    setMyName(nameParam || 'Guest');
  }, []); // Set your target date (e.g., New Year's Eve)


    // Set hari tanggal //
    const targetDate1 = new Date('2024-09-13T09:00:00').getTime();
    const targetDate2 = new Date('2024-09-14T14:00:00').getTime();
  
    const formattedDateTime1 = FormatDateTime(targetDate1, Countdown);
    const formattedDateTime2 = FormatDateTime(targetDate2, Countdown);




    ///nama
    const name1 = 'Ida Bagus Diksa';
    const name2 = 'Ida Ayu Tuti';





    ///animation
    useEffect(() => {
      AOS.init({
        duration: 1500, // Set your default animation duration
        delay: 100,    // Set your desired delay before animations start
        once:true,
      });
    }, []);

  // amplop modal
      const [amplopIsOpen, setAmplopIsOpen] = useState(false);

      const openAmplop = () => {
        setAmplopIsOpen(true);
      };

      const closeAmplop = () => {
        setAmplopIsOpen(false);
      };


    
  return (

    <div className='' >
      {openModal && <Modal closeModal={setOpenModal} undanganName={myName}/>}
       {!openModal && (
             <div className="column">
              
             <div className="jumbotron">
               <div className='jumbotron-text'>
                 
                 <p data-aos="fade-up">Upakara Pawiwahan</p>
                 <h1 data-aos="fade-up">{name1}</h1>
                 <h1 data-aos="fade-up">&</h1>
                 <h1 data-aos="fade-up">{name2}</h1>
               </div>
               
            
             
                 {/* style 2 */}
                 <div className="wave">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                     <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                     <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                     <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                   </svg>
     
                 </div>
                 {/* style2 end */}
     
     
             </div>
             <MusicPlayer />
             
     
             <div className="bg">
              <div className="bg-layer">
               <div className="container">
     
                   <div className="content center flex column gap-1rem">
                 
     
                     <div className="om" data-aos="fade-up">
                       <img src={om} alt="" />
                       
                     </div>
                     <p data-aos="fade-up">
                     Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/ Tuhan Yang Maha Esa, kami bermaksud mengundang Bapak/ Ibu/ Saudara/ i pada Upacara Pawiwahan {name1} dan {name2}.
     
                     </p>
                     <p data-aos="fade-up">Welcome, {myName}!</p>
                   </div>
     
                   
                   
                   <div className="flex align-center content gap">
     
                     <div className="card content" data-aos="fade-up">
     
                       <div className="foto-orang">
                         <img src={orang1} alt="" />
                       </div>
                       <div className="card-desc">
                         <p className='tangerine'>{name1}</p>
                         <p>Putra Sulung Dari Pasangan</p>
                         <p>Ida Bagus Dira</p>
                         <p>&</p>
                         <p>Ida Ayu Sukarmini</p>
                         <p>Griya Budha Laplapan, Ubud</p>

                       </div>
                       <div className="card-frame">
                         <img src={flower} className='flower' />
                       </div>
     
                     </div>
                     <div className="card content" data-aos="fade-up">
     
                       <div className="foto-orang">
                         <img src={orang2} alt="" />
                       </div>
                       <div className="card-desc">
                         <p className='tangerine'>{name2}</p>
                         <p>Putri Bungsu Dari Pasangan</p>
                         <p>Ida Bagus Sudiarta</p>
                         <p>&</p>
                         <p>Ida Ayu Sri Sandi </p>
                         <p>Griya Bajangan Sandakan, Petang</p>

                       </div>
                       <div className="card-frame">
                         <img src={flower} className='flower' />
                       </div>
                     </div>
     
                   </div>

                   </div>

              </div>
                 </div>
                   <div className="white bg-gold center pad-3 italic">
                     <p data-aos="fade-up">
                     Ihaiva stam mā vi yaustam,
                     Visvām āyur vyasnutam.
                     Krindantau putrair naptrbhih,
                     Modamānau sve grhe.
                     
                     </p>
                     <p data-aos="fade-up">
                     Wahai pasangan suami-isteri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.
                     </p>
                     <h4 data-aos="fade-up">~ Rgveda : X.85.42 ~</h4>
                   </div>
                   <div className="bg">
                    <div className="bg-layer">
                      <div className="pad-1">
                        <div className="flex align-center">
                          <div className="card-2 flex-1 flex">
                            <div className="flex column gap-1rem">

                              <h1 className='gold'>Acara Pawiwahan</h1>
                              <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami pada :</p>
                              <div className="card-2-content">
                                <div className="border-gold flex column flex-1 align-center">
                                <CalendarIcon className="svg-gold icon" />
                                <p>{formattedDateTime1.exactDate}</p>
                               
                                </div>
                                <div className="border-gold flex column flex-1 align-center">
                                  <ClockIcon className='svg-gold icon' />
                                  <p>09:00 WITA</p>
                                  <p>s/d selesai</p>
                                </div>
                              </div>
                              <div className="card-2-content countdown">
                                <div className="border-gold flex column align-center bg-gold white flex-1">
                                  <h2>{formattedDateTime1.formattedTimeDay}</h2>
                                  <p>hari</p>
                                </div>
                                <div className="border-gold flex column align-center bg-gold white flex-1">
                                  <h2>{formattedDateTime1.formattedTimeHour}</h2>
                                  <p>jam</p>
                                </div>
                                <div className="border-gold flex column align-center bg-gold white flex-1">
                                  <h2>{formattedDateTime1.formattedTimeMinute}</h2>
                                  <p>menit</p>
                                </div>
                                <div className="border-gold flex column align-center bg-gold white flex-1">
                                  <h2>{formattedDateTime1.formattedTimeSecond} </h2>
                                  <p>detik</p>
                                </div>
                              </div>
                              
                              
                              

                              <h1 className='gold'>Acara Resepsi</h1>

                              <div className="card-2-content">
                                <div className="border-gold flex column flex-1 align-center">
                                <CalendarIcon className="svg-gold icon" />
                                <p>{formattedDateTime2.exactDate}</p>
                               
                                </div>
                                <div className="border-gold flex column flex-1 align-center">
                                  <ClockIcon className='svg-gold icon' />
                                  <p>14:00 WITA</p>
                                  <p>s/d selesai</p>
                                </div>
                              </div>
                              <div className="card-2-content countdown">
                                <div className="border-gold flex column align-center bg-gold white flex-1">
                                  <h2>{formattedDateTime2.formattedTimeDay}</h2>
                                  <p>hari</p>
                                </div>
                                <div className="border-gold flex column align-center bg-gold white flex-1">
                                  <h2>{formattedDateTime2.formattedTimeHour}</h2>
                                  <p>jam</p>
                                </div>
                                <div className="border-gold flex column align-center bg-gold white flex-1">
                                  <h2>{formattedDateTime2.formattedTimeMinute}</h2>
                                  <p>menit</p>
                                </div>
                                <div className="border-gold flex column align-center bg-gold white flex-1">
                                  <h2>{formattedDateTime2.formattedTimeSecond} </h2>
                                  <p>detik</p>
                                </div>
                              </div>
      
                            </div>                        
                          </div>                     
                        </div>
                      </div>
                    </div>
                   </div>
                  

                    <div className="bg-map">
                      <div className="bg-layer">
                        <div className=" container center flex column gap">
                        <img src={flower} className='map-frame-top' />
                          <div className="title gold">
                            <h1>Lokasi Acara</h1>
                          </div>
                          <div className="locationcontainer">
                            <img src={map} className='mapicon' alt="" />
                            <p>Griya Budha Dangin Desa, Laplapan</p>

                          </div>

                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.975007768528!2d115.2768958750128!3d-8.501807191539994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23db6540566ad%3A0xcfa05a3a701f527e!2sNobody%20Inn%20Laplapan!5e0!3m2!1sen!2sid!4v1722233011393!5m2!1sen!2sid" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  className='google-map'></iframe>
                          


                         
                          
                            <a href="https://maps.app.goo.gl/WwKmnw3N7bFzJ3S96" className='button-map'> <p>Buka di Google Maps</p> </a>
                        
                          <img src={flower} className='map-frame-bot' />
                        </div>



                      </div>
                    </div>

                    <Galery />
                    
                    
                    <div className="white bg-gold center pad-3 italic">

                   </div>
                   

                   <div className="flex column gap-1rem center pad-3">

                      <div className=" ucapan-bg ucapan-section">
                        <div className="ucapan-text">

                          <div className="title gold italic">
                              <h1>Kartu Ucapan</h1>
                              <h2>{myName}</h2>
                          </div>
                          <CommentForm name={myName}/>
                          <img src={flower} className='ucapan-flower-2' alt="" />
                        </div>

                      </div>
                      <div className="bg-kartu relative">
                      <div className="wave-bg-kartu-atas wavekartu">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                              <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                              <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                              <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                            </svg>
              
                      </div>
                      <div className="wave-bg-kartu-bawah wavekartu">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                              <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                              <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                              <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                            </svg>
              
                      </div>


                      </div>
                      <div className="ucapandanamplop">
                        <div className="bg-white title gold">
                          <h1>Ucapan dan Doa</h1>
                        </div>
                        
                        <CommentList commentLimit={10}/>

                        <div className="bg-white title gold">
                          <h1>Amplop Digital</h1>
                        </div>
                        <p>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.</p>
                        <p>Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado cashless melalui transfer.</p>
                        <div className='button-2' onClick={openAmplop}>Kirim Amplop Digital</div>
                        <ModalAmplop isOpen={amplopIsOpen} onRequestClose={closeAmplop} />
            



                      </div>
                      </div>
                    <div>
                      
                    </div>


                    <div className="bg-gold pad-3 relative">
                      <div className="wave2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                              <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                              <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                              <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                            </svg>
              
                      </div>

                    </div>

                    <div className="bg-gold center pad-3 italic white">
                    <div className="title">
                        <h1>Pesan</h1>
                    </div>
                    
                      
                      <p>Merupakan Suatu Kebahagiaan dan Kehormatan bagi Kami,</p>
                      <p>Apabila Bapak/Ibu/Saudara/i, Berkenan Hadir di Acara Pawiwahan kami Terima Kasih</p>

                    </div>
                    <div className="pad-3 bg-gold"></div>

                   <div className="white bg-black center pad-3">
                      
                     <p>© Copyright 2023 Catha. All Rights Reserved.</p>

                   </div>
                   

               </div>
      )}

      </div>

  );
};

export default Invitation;
