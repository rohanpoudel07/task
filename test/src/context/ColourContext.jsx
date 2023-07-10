import { createContext, useReducer } from "react";

const initialState = {
  colour: "inherit",
  history: []
};

export const ColourContext = createContext();

const colourReducer = (state = initialState, action) => {
  switch (action.type) {
    case "change_colour":
      return { ...state, colour: action.payload, history: [...state.history, action.payload] };
    default:
      return state;
  }
};

export const ColourContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colourReducer, initialState);

  return (
    <ColourContext.Provider value={{ state, dispatch }}>
      {children}
    </ColourContext.Provider>
  );
};
