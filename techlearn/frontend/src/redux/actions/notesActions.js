import axios from "axios";
import {
    NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS, NOTES_LIST_FAIL,
    CONCEPT_LIST_REQUEST, CONCEPT_LIST_SUCCESS, CONCEPT_LIST_FAIL, 
    CONCEPT_DETAILS_REQUEST, CONCEPT_DETAILS_SUCCESS, CONCEPT_DETAILS_FAIL, 
    /*NOTES_LIST_RESET, NOTES_DETAILS_RESET,
    NOTES_CREATE_REQUEST, NOTES_CREATE_SUCCESS, NOTES_CREATE_FAIL, NOTES_CREATE_RESET,
    NOTES_UPDATE_REQUEST, NOTES_UPDATE_SUCCESS, NOTES_UPDATE_FAIL, NOTES_UPDATE_RESET, 
    NOTES_DELETE_REQUEST, NOTES_DELETE_SUCCESS, NOTES_DELETE_FAIL*/
} from '../constants/notesConstants'


export const listNotes = () => async (dispatch) => {
  try {
      dispatch({ type: NOTES_LIST_REQUEST })

      const { data } = await axios.get('http://127.0.0.1:8000/notes/')

      dispatch({
          type: NOTES_LIST_SUCCESS,
          payload: data
      })
      //localStorage.setItem('notesLst', JSON.stringify(data))

  } catch (error) {
      dispatch({
          type: NOTES_LIST_FAIL,
          payload: error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
      })
  }
}

export const listConcepts = () => async (dispatch) => {
    try {
        dispatch({ type: CONCEPT_LIST_REQUEST })
  
        const { data } = await axios.get('http://127.0.0.1:8000/notes/concepts/')
  
        dispatch({
            type: CONCEPT_LIST_SUCCESS,
            payload: data
        })
        //localStorage.setItem('notesLst', JSON.stringify(data))
  
    } catch (error) {
        dispatch({
            type: CONCEPT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
  }
  
  export const conceptDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: CONCEPT_DETAILS_REQUEST})

        const { data } = await axios.get(`http://127.0.0.1:8000/notes/concepts/${id}/`)

        dispatch({
            type: CONCEPT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CONCEPT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
  }