// @flow

// Types
type StateType = {
  type: string, // D: Driver | R Rider
  userId: string,
  password: string,
  preferredGender: string // M: Male | F: Female | B: Both
};

type ActionType = {
  type: string,
  payload?: any
};

// Initial state
const initialState: StateType = {
  type: 'D', // D: Driver | R Rider
  userId: undefined,
  password: undefined,
  preferredGender: 'M' // M: Male | F: Female | B: Both
};

// Actions
const SET_FIRST_OPEN = 'AppState/SET_FIRST_OPEN';

// Action creators
export function setFirstOpen(isOpen: boolean): ActionType {
  return {
    type: SET_FIRST_OPEN,
    payload: isOpen
  };
}

// Reducer
export default function AppStateReducer(
  state: StateType = initialState,
  action: ActionType
) {
  switch (action.type) {
    case SET_FIRST_OPEN:
      return {
        ...state,
        isFirstOpen: action.payload
      };
    default:
      return state;
  }
}
