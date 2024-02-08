import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = ({label,iconURL,navigation}) => {
  const navigate = useNavigate();
  return (
    <button onClick={()=>(navigate(navigation))} className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full'>{label}
    <img src={iconURL} alt="arrowright" className='ml-2 rounded-full w-5 h-5'/>
    </button>
  )
}

export default Button