// Constants

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_FULLFILLED = 'FETCH_USERS_FULLFILLED'
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED'

// Actions

export const personListAsync = () => {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_USERS })
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      dispatch({ type: FETCH_USERS_FULLFILLED, payload: json })
    })
    .catch(error => {
      dispatch({ type: FETCH_USERS_REJECTED, payload: error })
      console.log(error)
    })
  }
}

export const actions = {
  personListAsync
}

// Action Handlers

const ACTION_HANDLERS = {
  [FETCH_USERS] : (state, action) => {
    return { ...state, fetching: true }
  },
  [FETCH_USERS_FULLFILLED] : (state, action) => {
    return { ...state, fetching: false, fetched: true, users: action.payload }
  },
  [FETCH_USERS_REJECTED] :  (state, action) => {
    return { ...state, fetching: false, error: action.payload }
  }
}

// reducer

const initialState = {
  users: [],
  fetching: false,
  fetched: false,
  error: null
}

export default function PersonListReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
