import React from 'react'
import '../styles/ScrollTop.css'
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function ScrollTop() {
    
    const ScrollUp = (e) => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      e.preventDefault()
    }
  return (
          <button className='buttonStyles'   onClick={ScrollUp}>
          <ArrowUpIcon />
            <p className='back-to-top'>BACK TO TOP</p>
          </button>
      
  )
}

export default ScrollTop