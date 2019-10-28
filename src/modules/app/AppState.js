// @flow

// Types
type StateType = {
  isFirstOpen: boolean
};

type ActionType = {
  type: string,
  payload?: any
};

// Initial state
const initialState: StateType = {
  isFirstOpen: true
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
