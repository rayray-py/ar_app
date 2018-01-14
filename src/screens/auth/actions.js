export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const signUp = (email, password) => (
  { type: 'SIGN_UP', email, password }
);

export const signIn = (email, password) => (
  { type: 'SIGN_IN', email, password }
);

export const failSignUp = (payload) => (
  { type: 'FAIL_SIGN_UP', payload }
);

export const successSignUp = (user) => (
  { type: 'SUCCESS_SIGN_UP', user }
);

export const failSignIn = (payload) => (
  { type: 'FAIL_SIGN_IN', payload }
);

export const successSignIn = (user) => (
  { type: 'SUCCESS_SIGN_IN', user }
);
