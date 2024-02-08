import React from 'react'
import Header3 from '../layout/Header/Header3'
import ComplaintCard from './ComplaintCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComplaint } from '../../actions/complaintAction';
import Footer from '../layout/Footer/Footer'
import Loader from '../layout/Loader/Loader'

const DashBoard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteCard = (id) =>{
        dispatch(deleteComplaint(id));
        window.location.reload(true)
      }
  
  
    const {complaints,loading} = useSelector((state) => state.complaints);
  return <>{loading ? (<Loader/>):(<>
  <Header3 />
  <div className='h-screen'>
  <div className="grid grid-cols-4 gap-4 mt-6 mr-5 ">
    {
        complaints && complaints.map((item)=>(
            <ComplaintCard key={item._id} userName={item.name} title={item.title} type={item.category} description={item.description} status={item.status} time={item.createdAt.slice(0,10)} compid={item._id} deletefunc={deleteCard}/>
        ))
    }
    </div>
    </div>
    <Footer />
    </>)}
  </>
  
}

export default DashBoard