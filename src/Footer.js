import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <div className="Footer">
      
    <p>Developed by Abraham. Copyright {date.getFullYear()}</p>
    </div>
  )
}

export default Footer
