import {ALL_COMPLAINT_FAIL,ALL_COMPLAINT_REQUEST,ALL_COMPLAINT_SUCCESS,CLEAR_ERRORS, COMPLAINT_DETAILS_FAIL, COMPLAINT_DETAILS_REQUEST, COMPLAINT_DETAILS_SUCCESS, DELETE_COMPLAINT_FAIL, DELETE_COMPLAINT_REQUEST, DELETE_COMPLAINT_RESET, NEW_COMPLAINT_FAIL, NEW_COMPLAINT_REQUEST, NEW_COMPLAINT_RESET, NEW_COMPLAINT_SUCCESS, UPDATE_COMPLAINT_FAIL, UPDATE_COMPLAINT_REQUEST, UPDATE_COMPLAINT_RESET, UPDATE_COMPLAINT_SUCCESS} from '../constants/complaintConstants'

export const complaintsReducer = (state = {complaints:[]},action)=>{

    switch (action.type){
        case ALL_COMPLAINT_REQUEST:
            return{
                loading: true,
                complaints:[],
            };
            case ALL_COMPLAINT_SUCCESS:
                return{
                    loading: false,
                    complaints: action.payload,
                };
                    case ALL_COMPLAINT_FAIL:
                        return{
                            loading: false,
                            error:action.payload,
                        };
                        case CLEAR_ERRORS:
                            return{
                                ...state,
                                error: null,
                            };
                    default:
                        return state;
    }
}

export const newComplaintReducer = (state = { complaint: {} }, action) => {
    switch (action.type) {
      case NEW_COMPLAINT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_COMPLAINT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          complaint: action.payload.complaint,
        };
      case NEW_COMPLAINT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_COMPLAINT_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };


  export const complaintReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_COMPLAINT_REQUEST:
      case UPDATE_COMPLAINT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_COMPLAINT_REQUEST:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_COMPLAINT_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_COMPLAINT_FAIL:
      case UPDATE_COMPLAINT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_COMPLAINT_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_COMPLAINT_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

  export const complaintDetailsReducer = (state = { complaint: {} }, action) => {
    switch (action.type) {
      case COMPLAINT_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case COMPLAINT_DETAILS_SUCCESS:
        return {
          loading: false,
          complaint: action.payload,
        };
      case COMPLAINT_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };