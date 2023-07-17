import React from 'react'
import './Modal.css'


function Modal(props) {

  return (props.trigger)? (
            <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                
                <button className="btn-close" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
  ): '';

}

export default Modal