export const Types = {
  LOGGED_IN: 'user/LOGGED_IN',
  LOGGED_OUT: 'user/LOGGED_OUT',
};

const INITIAL_STATE = {
  user: null,
  isLoading: false,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGGED_IN:
      return {
        ...state,
        user: action.payload,
      };
    case Types.LOGGED_OUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}

export const Creators = {
  signIn: user => ({
    type: Types.LOGGED_IN,
    payload: user,
  }),
  signOut: () => ({
    type: Types.LOGGED_OUT,
  }),
};
