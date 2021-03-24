// Redux Reducer
const INITIAL_STATE = { mood: "ಠ_ಠ" }

const moodReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'HAPPY':
      return {...state, mood: "ʘ‿ʘ"}
    case 'SAD':
      return {...state, mood: "⊙︿⊙"}
    case 'EXCITED':
      return {...state, mood: "(⊙ᗜ⊙)"}
    case 'ANGRY':
      return {...state, mood: "ಠ▃ಠ"}
    case 'CONFUSED':
      return {...state, mood: "(@_@)"}
    default:
      return state
  }
}

// Initiate Redux Store
const store = Redux.createStore(moodReducer);