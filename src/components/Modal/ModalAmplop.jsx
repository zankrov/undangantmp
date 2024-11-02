import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ModalAmplop.css';
import brilogo from '../../assets/BRI.png'

const ModalAmplop = ({ isOpen, onRequestClose }) => {
    const [copied, setCopied] = useState(false);
    const textToCopy = "059001007085509";
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
          onRequestClose();
        }
      };
  
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content flex column">
            <div className='closebtn' onClick={onRequestClose}><h2>X</h2></div>
            <h2>Silahkan melakukan transfer ke rekening berikut:</h2>
            <br />
            <img src={brilogo} alt="" />
            <h3>{textToCopy}</h3>
            <h3>BRI a/n IDA BAGUS DIKSA</h3>
            <CopyToClipboard text={textToCopy} onCopy={() => setCopied(true)}>
                <div className='button-2'>Salin Rekening</div>
            </CopyToClipboard>
            <p>{copied && <span style={{ color: 'green' }}>Rekening Tersalin</span>}</p>
        
        
        </div>
  </div>
  )
}

export default ModalAmplop