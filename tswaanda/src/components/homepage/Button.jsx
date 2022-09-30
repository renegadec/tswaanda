import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-5 px-7 bg-green-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[15px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button