import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getComplaintDetails } from '../../actions/complaintAction';
import Header3 from '../layout/Header/Header3';


const ComplaintDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {complaint} = useSelector((state)=>state.complaintDetails)
    useEffect(()=>{
        dispatch(getComplaintDetails(id));
    },[dispatch])

  return (<>
    <div className="max-w-lg mx-auto mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-2">{complaint.title}</h1>
    <h2 className="text-lg text-gray-600 mb-2">Category: {complaint.category}</h2>
    <p className="text-gray-800 mb-4">{complaint.description}</p>
    <p className="text-gray-700 font-semibold">{complaint.name}</p>
    <p className="text-gray-600 mb-2">Posted On: {complaint.createdAt.slice(0,10)}</p>
    <p className="text-2xl font-bold">{complaint.status}</p>
  </div>
    </>
  )
}

export default ComplaintDetailsPage