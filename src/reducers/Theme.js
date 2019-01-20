import { COLORS } from '../themes';

const initialState = {
  colorData: COLORS.dark,
};

const Theme = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      switch(action.payload.name) {
        case 'dark':
          return { colorData: COLORS.light };
        case 'light':
          return { colorData: COLORS.dark };
      }
    default:
      return state;
  }
};

export default Theme;
