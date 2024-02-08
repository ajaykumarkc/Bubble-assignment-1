import { useEffect, useState } from "react";
import FeedBackCard from "./FeedBackCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NEW_COMPLAINT_RESET } from "../../constants/complaintConstants";
import { createComplaint, deleteComplaint } from "../../actions/complaintAction";
import { getAllComplaints } from '../../actions/complaintAction';
import Loader from '../layout/Loader/Loader'
import { DELETE_COMPLAINT_RESET } from "../../constants/complaintConstants";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const {complaints,loading} = useSelector((state) => state.complaints);
  const { error,success } = useSelector((state) => state.newComplaint);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.complaint
  );


  const [formData, setFormData] = useState({
    name:'Anonymous',
    title: '',
    description: '',
    category: 'Suggestion',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    dispatch(createComplaint(formData)) // You can replace this with your submit logic
  };

  const deleteCard = (id) =>{
    dispatch(deleteComplaint(id));
    window.location.reload(true)
  }


  useEffect(()=>{
    navigate('/userfeedback')
    dispatch(getAllComplaints());

  },[dispatch,navigate]);

  return (<>
  {loading ? (<Loader />):(
    <div className="max-w-full mx-auto mt-8">
    <form onSubmit={handleSubmit} className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="option" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <select
          id="option"
          name="category"
          value={formData.option}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="choose">Choose A Category</option>
          <option value="suggestion">Suggestion</option>
          <option value="complaint">Complaint</option>
          <option value="inquiry">Inquiry</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
          Submit
        </button>
      </div>
    </form>

    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Your Feedbacks</h2>
      <div className="grid grid-cols-4 gap-4 mt-6 mr-5">
        {/* Render multiple feedback cards */}

        {complaints && complaints.map((item)=>(
          <FeedBackCard key={item._id} title={item.title} description={item.description} category={item.category} responseback={item.response} status={item.status} compid={item._id} deletefunc={deleteCard}  />
        ))}

        


        
      </div>
    </div>
  </div>
  ) }
    
    </>
  );
}

export default FeedbackForm