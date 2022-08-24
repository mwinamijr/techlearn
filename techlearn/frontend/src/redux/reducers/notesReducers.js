import {
    NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS, NOTES_LIST_FAIL,
    NOTE_DETAILS_REQUEST, NOTE_DETAILS_SUCCESS, NOTE_DETAILS_FAIL,
    CONCEPT_LIST_REQUEST, CONCEPT_LIST_SUCCESS, CONCEPT_LIST_FAIL,
    CONCEPT_DETAILS_REQUEST, CONCEPT_DETAILS_SUCCESS, CONCEPT_DETAILS_FAIL, 
    /*  NOTES_LIST_RESET, NOTES_DETAILS_RESET,
    NOTES_CREATE_REQUEST, NOTES_CREATE_SUCCESS, NOTES_CREATE_FAIL, NOTES_CREATE_RESET,
    NOTES_UPDATE_REQUEST, NOTES_UPDATE_SUCCESS, NOTES_UPDATE_FAIL, NOTES_UPDATE_RESET, 
    NOTES_DELETE_REQUEST, NOTES_DELETE_SUCCESS, NOTES_DELETE_FAIL */
} from '../constants/notesConstants'

const initialState = {
  notes: [],
  concepts: [],
  error: null,
  loading: false
};

export const notesListReducer = (state = { notes : [] }, action) => {
  switch (action.type) {
    case NOTES_LIST_REQUEST:
      return { loading: true }

    case NOTES_LIST_SUCCESS:
      return { loading: false, notes: action.payload }

    case NOTES_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const noteDetailsReducer = (state = { note : [] }, action) => {
  switch (action.type) {
    case NOTE_DETAILS_REQUEST:
      return { loading: true }

    case NOTE_DETAILS_SUCCESS:
      return { loading: false, note: action.payload }

    case NOTE_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const conceptsListReducer = (state = { concepts : [] }, action) => {
  switch (action.type) {
    case CONCEPT_LIST_REQUEST:
      return { loading: true }

    case CONCEPT_LIST_SUCCESS:
      return { loading: false, concepts: action.payload }

    case CONCEPT_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const conceptDetailsReducer = (state = { concept : [] }, action) => {
  switch (action.type) {
    case CONCEPT_DETAILS_REQUEST:
      return { loading: true }

    case CONCEPT_DETAILS_SUCCESS:
      return { loading: false, concept: action.payload }

    case CONCEPT_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
