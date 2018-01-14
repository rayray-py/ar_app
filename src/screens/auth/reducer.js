const INITIAL_STATE = {
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'IS_LOGGING':
      return { isLoading: true };
    case 'SUCCESS_LOGIN':
      return INITIAL_STATE;
    case 'FAIL_LOGIN':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
