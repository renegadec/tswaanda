import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-5 px-7 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-full ${styles}`}>
      Get Started
    </button>
  )
}

export default Button