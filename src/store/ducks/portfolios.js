export const Types = {
  FETCHED: 'portfolios/FETCHED',
  ADDED: 'portfolios/ADDED',
};

const INITIAL_STATE = {
  list: [],
  portfolio: null,
};

export default function portfolios(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCHED:
      return {
        ...state,
        list: action.payload,
      };
    case Types.ADDED:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
}

export const Creators = {
  fetched: list => ({
    type: Types.FETCHED,
    payload: list,
  }),
  added: portfolio => ({
    type: Types.ADDED,
    payload: portfolio,
  }),
};
