import * as types from "./ActionType";

const initialState = {
  userSubscription: null,
  loading: null,
  error: null,
};

export const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_SUBSCRIPTION_REQUEST:
    case types.UPGRADE_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
      case types.GET_USER_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        userSubscription: action.payload,
        loading: false,
        error: null,
      };
      case types.UPGRADE_SUBSCRIPTION_SUCCESS:
        return {
          ...state,
          userSubscription: action.payload,
          loading: false,
          error: null,
        };
        case types.GET_USER_SUBSCRIPTION_FAILURE:
            case types.UPGRADE_SUBSCRIPTION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    default:
      return state;
  }
};
