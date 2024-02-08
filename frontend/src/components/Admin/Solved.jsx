import React, { useEffect, useState } from 'react'
import Header3 from '../layout/Header/Header3'
import { useSelector } from 'react-redux';
import { deleteComplaint } from '../../actions/complaintAction';
import ComplaintCard from './ComplaintCard';

const Solved = () => {
    const [solved,setSolved] = useState([]);
    const {complaints} = useSelector((state)=>state.complaints);
    const deleteCard = (id) =>{
        dispatch(deleteComplaint(id));
        window.location.reload(true)
      }
      useEffect(()=>{
        handleFilter();
      },[])

    const handleFilter = () => {
        const filtered = complaints.filter(item => item.status.includes("Solved"));
        setSolved(filtered);
      };
  return <>
  <Header3/>
  <div className="grid grid-cols-4 gap-4 mt-6 mr-5 ">
    {
        solved && solved.map((item)=>(
            <ComplaintCard key={item._id} userName={item.name} title={item.title} type={item.category} status={item.status} time={item.createdAt.slice(0,10)} compid={item._id} deletefunc={deleteCard}/>
        ))
    }
    </div>
    </>
}

export default Solved