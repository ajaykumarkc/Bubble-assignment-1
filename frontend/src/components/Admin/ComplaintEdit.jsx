import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getComplaintDetails, updateComplaint } from '../../actions/complaintAction';
import Header3 from '../layout/Header/Header3';

const ComplaintEdit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        response: 'Thank You Very Much For Your FeedBack',
        status: 'Pending',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateComplaint(id,formData))
        navigate('/admin');
      };
    

    const dispatch = useDispatch();
    const {complaint} = useSelector((state)=>(state.complaintDetails))
    useEffect(()=>{
        dispatch(getComplaintDetails(id))
    },[dispatch])


  return (<>
  <Header3 />
  <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-2">{complaint.name}</h2>
      <h3 className="text-lg text-gray-700 font-semibold mb-2">{complaint.title}</h3>
      <p className="text-gray-600 mb-4">{complaint.description}</p>
      <p className="text-gray-600 mb-4">Category: {complaint.category}</p>
      <form onSubmit={handleSubmit}>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          placeholder="Response"
          name="response"
          value={formData.response}
          onChange={handleChange}
        ></textarea>
        <div className="mb-4">
          <label htmlFor="options" className="block text-gray-700 text-sm font-bold mb-2">Options</label>
          <select
            id="options"
            name="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="Solved">Solved</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  )
  
}

export default ComplaintEdit