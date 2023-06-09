import { ActionType } from '../authUser/action';

function isPreloadReducer(isPreload = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
}

export default isPreloadReducer;
