import React from 'react'
import purse from './purse.jpg'

const Modal = ({ open, onClose }) => {

    if (!open) return null

    return (
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => {
                e.stopPropagation()
            }}
                className='modalContainer'>
                <img src={purse} alt='purse' />

                <div className='modalRight'>

                    <p onClick={onClose} className='closeBtn'>X</p>
                    <div className='content'>
                        <p>Recieve</p>
                        <h1>30% OFF</h1>
                        <p>on your order today</p>
                    </div>

                    <div className='btnContainer'>
                        <button className='btnPrimary'>
                            <span className='bold'>Sign In</span>
                        </button>
                        <button className='btnOutline'>
                            <span className='bold'>Sign Up</span>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Modal