import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Hero from './components/Home/Hero'
import Feedback from "./components/FeedbackForm/Feedback";
import DashBoard from "./components/Admin/DashBoard";
import {useDispatch,useSelector} from 'react-redux'
import { getAllComplaints } from "./actions/complaintAction";
import ComplaintEdit from "./components/Admin/ComplaintEdit";
import { useEffect } from "react";
import About from './components/About/About'

export default function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllComplaints());
  },[dispatch])

  return (
    <Router>

      <Routes>
        <Route path="/" element={<section className='xl:padding-l
           wide:padding-r'>
            <Hero />
            </section>} />
            <Route path="/userfeedback" element={<Feedback/>}/>
            <Route path = "/admin" element={<DashBoard />} />
            <Route path = "/admin/complaint/edit/:id" element={<ComplaintEdit />} />
            <Route path="/about" element={<About />} />
      </Routes>

    </Router>
  )
}
