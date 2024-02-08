import {ALL_COMPLAINT_FAIL,ALL_COMPLAINT_REQUEST,ALL_COMPLAINT_SUCCESS,CLEAR_ERRORS, COMPLAINT_DETAILS_FAIL, COMPLAINT_DETAILS_REQUEST, COMPLAINT_DETAILS_SUCCESS, DELETE_COMPLAINT_FAIL, DELETE_COMPLAINT_REQUEST, DELETE_COMPLAINT_SUCCESS, NEW_COMPLAINT_FAIL, NEW_COMPLAINT_REQUEST, NEW_COMPLAINT_SUCCESS, UPDATE_COMPLAINT_FAIL, UPDATE_COMPLAINT_REQUEST, UPDATE_COMPLAINT_SUCCESS} from '../constants/complaintConstants'
import axios from "axios";

export const getAllComplaints = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_COMPLAINT_REQUEST });
  
      const {data}  = await axios.get('http://localhost:4000/api/v2/complaints');
  
      dispatch({
        type: ALL_COMPLAINT_SUCCESS,
        payload: data.complaints,
      });
    } catch (error) {
      dispatch({
        type: ALL_COMPLAINT_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  export const createComplaint = (complaintData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_COMPLAINT_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `http://localhost:4000/api/v2/complaint/new`,
        complaintData,
        config
      );
  
      dispatch({
        type: NEW_COMPLAINT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_COMPLAINT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const deleteComplaint = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_COMPLAINT_REQUEST });
  
      const { data } = await axios.delete(`http://localhost:4000/api/v2/complaint/delete/${id}`);
  
      dispatch({
        type: DELETE_COMPLAINT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_COMPLAINT_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  export const getComplaintDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: COMPLAINT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`http://localhost:4000/api/v2/complaint/${id}`);
  
      dispatch({
        type: COMPLAINT_DETAILS_SUCCESS,
        payload: data.complaint,
      });
    } catch (error) {
      dispatch({
        type: COMPLAINT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  export const updateComplaint = (id, complaintData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_COMPLAINT_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(
        `http://localhost:4000/api/v2/complaint/update/${id}`,
        complaintData,
        config
      );
  
      dispatch({
        type: UPDATE_COMPLAINT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_COMPLAINT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };