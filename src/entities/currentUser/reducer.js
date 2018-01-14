const INITIAL_STATE: State = {
  authToken: '',
  email: '',
};

export default (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
