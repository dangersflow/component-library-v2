const ComponentThemeContextReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

export default ComponentThemeContextReducer;
