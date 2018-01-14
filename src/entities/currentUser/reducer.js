const INITIAL_STATE: State = {
  authToken: '',
  email: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUCCESS_SIGN_IN':
    case 'SUCCESS_SIGN_UP':
      return {
        email: action.user.email,
        authToken: action.user.uid,
      }
    default:
      return state;
  }
};
