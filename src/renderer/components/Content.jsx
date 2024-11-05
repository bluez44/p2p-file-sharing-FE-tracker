import React from 'react'
// import { Button } from 'react-bootstrap'
// import { ToastContainer, toast } from 'react-toastify';

export default function Content({ children }) {
  
  const handleOnClick = () => {
    setIsConnected(true)
    // toast.success('Đã kết nối với server!')
  }

  const handleClose = () => {
    setIsConnected(false)
    // toast.info("Đã ngắt kết nối với server!")
  }
  
  return (
      <div className='text-center wrapper'>
          {children}
      </div>
  )
}
