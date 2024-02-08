import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComplaintCard = ({ userName, title,description, type, status,time,deletefunc,compid }) => {
    const navigate = useNavigate();

    const navigatetoeditpage = () =>{
      navigate(`complaint/edit/${compid}`)
    }
  
  return (
<div  className="relative cursor-pointer bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-lg">{userName}</h2>
        <h3 className="text-gray-700 text-base mb-2">{title}</h3>
        <h3 className="text-gray-700 text-base mb-2">{description}</h3>
        <p className="text-gray-600">Category: {type}</p>
        <p className="text-gray-600">PostedAt: {time}</p>
      </div>
      <div className="mt-4">
        <span className={`inline-block bg-${status === 'Pending' ? 'yellow' : status === 'Solved' ? 'green' : 'red'}-500 text-black-300 px-2 py-1 rounded-full text-sm`}>
          {status}
        </span>
      </div>
      <div className="absolute bottom-0 right-0 mb-2 mr-2">
        <button onClick={()=>(deletefunc(compid))} className="text-gray-500 hover:text-gray-700 mr-2 focus:outline-none">
          <img className='h-9 w-9 rounded-full' src="data:image/png;base64,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" alt="delete" />
        </button>
        {
          status === 'Pending' &&  <button onClick={navigatetoeditpage} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <img className='h-9' src="https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564394-edit_81508.png" alt="edit" />
        </button>
        }
      </div>
    </div>
  )
}

export default ComplaintCard