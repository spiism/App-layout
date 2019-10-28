// @flow

const NAMESPACE = 'chat';

/** Types */
type StateType = {
  prop1: any
}

type ActionType = {
  type: string,
  payload?: any
}

/** Actions */
// Normal actions
export const ACTION1 = `${NAMESPACE}/ACTION1`
export function action1(param1): ActionType {
  return {
    type: ACTION1,
    payload: param1
  }
}

// Async actions
export function asyncAction1(param1) {
  return (dispatch, getState) => {
    const state = getState()[NAMESPACE];

    // Do async requests here, then dispatch result on success
    // dispatch(action1(param1))
  };
}

/** Initial state */
const initialState: StateType = {}

/** Reducer */
export default function ChatStateReducer(
  state: StateType = initialState,
  action: ActionType
): StateType {
  switch (action.type) {
    case ACTION1:
      return {
        ...state,
        prop1: action.payload
      }
    default:
      return state
  }
}
