export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const signUp = (payload) => (
  { type: 'SIGN_UP', payload }
);

export const signIn = (payload) => (
  { type: 'SIGN_IN', payload }
);

export const failSignUp = (payload) => (
  { type: 'FAIL_SIGN_UP', payload }
);

export const successSignUp = (payload) => (
  { type: 'SUCCESS_SIGN_UP', payload }
);

export const failSignIn = (payload) => (
  { type: 'FAIL_SIGN_IN', payload }
);

export const successSignIn = (payload) => (
  { type: 'SUCCESS_SIGN_IN', payload }
);
