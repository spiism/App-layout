// @flow

// Types
type StateType = {
  isLoading: boolean
};

type ActionType = {
  type: string,
  payload?: any
};

// Initial state
const initialState: StateType = {
  isLoading: false
};

// Actions
const SET_LOADING = 'HomeState/SET_LOADING';

// Action creators
export function setLoading(isLoading: boolean): ActionType {
  return {
    type: SET_LOADING,
    payload: isLoading
  };
}

// Reducer
export default function HomeStateReducer(
  state: StateType = initialState,
  action: ActionType
) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}
