import React, { useEffect } from 'react'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'
import FeedbackForm from './FeedbackForm'
import {useSelector,useDispatch} from 'react-redux';
import { getAllComplaints } from '../../actions/complaintAction';



const Feedback = () => {

  
  return (<>
  <Header/>
  <FeedbackForm/>
    <Footer/>
    </>)
}

export default Feedback