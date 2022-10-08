import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ styles }) => {
  const navigate = useNavigate();
  return (
    <button onClick={()=>navigate('/register')} type='button' className={`py-5 px-7 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[15px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button