export const Types = {
  FETCHED: 'portfolios/FETCHED',
  ADDED: 'portfolios/ADDED',
  EDIT: 'portfolios/EDIT',
  EDITED: 'portfolios/EDITED',
  DELETED: 'portfolios/DELETED',
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
    case Types.EDIT:
      return {
        ...state,
        portfolio: action.payload,
      };
    case Types.EDITED:
      return {
        ...state,
        portfolio: null,
        list: [
          ...state.list.map(p =>
            p.id === action.payload.id ? action.payload : p
          ),
        ],
      };
    case Types.DELETED:
      return {
        ...state,
        list: state.list.filter(p => p.id !== action.payload.id),
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
  edit: portfolio => ({
    type: Types.EDIT,
    payload: portfolio,
  }),
  edited: portfolio => ({
    type: Types.EDITED,
    payload: portfolio,
  }),
  deleted: portfolio => ({
    type: Types.DELETED,
    payload: portfolio,
  }),
};
