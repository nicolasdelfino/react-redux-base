// ------------------------------------
// Constants
// ------------------------------------
export const SET_DUMMY_TEXT = 'SET_DUMMY_TEXT'
export const TOGGLE_DUMMY_VALUE = 'TOGGLE_DUMMY_VALUE'

// ------------------------------------
// Actions
// ------------------------------------
export function toggleDummyValue () {
  return {
    type    : TOGGLE_DUMMY_VALUE
  }
}

export function setDummyText (value) {
  return {
    type    : SET_DUMMY_TEXT,
    payload : value
  }
}

export const actions = {
  setDummyText,
  toggleDummyValue
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_DUMMY_TEXT]    : (state, action) => {
    return { ...state, dummyText: action.payload }
  },
  [TOGGLE_DUMMY_VALUE]    : (state, action) => {
    let dv = state.dummyVal
    return { ...state, dummyVal: !dv }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  dummyText: 'dummy redux value',
  dummyVal: false
}
export default function dummyReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
