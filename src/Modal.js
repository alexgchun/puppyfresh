import React from 'react'

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    padding: '30px',
    zIndex: 10000,
    borderRadius: '20px'
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 10000
}

export default function Modal({open, children, onClose}) {
    if(!open) return null
    return ( 
        <>
        <div style={OVERLAY_STYLE}/>
            <div style={MODAL_STYLE}>
                    {children}
                    <button  onClick={onClose}> Close Modal</button>
            </div>
        </>

        
    )
}