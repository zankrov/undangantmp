import React from 'react'
import './Modal.css'
const Modal = ({closeModal,undanganName}) => {
  return (
    <div className='modal'>
        <div className="column">
          <div className="jumbotron">
            <div className='center modal-text justify'>
              <div className="title">
                  <h1>Undangan Pawiwahan</h1>
                  <b>Undangan Kepada</b>   
              </div>
              <div className="footer">
                  <p>yth.</p>
                  <h1 data-aos="fade-up">{undanganName}</h1>
                  <div className='button' onClick={() => closeModal(false)}>Buka Undangan</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Modal