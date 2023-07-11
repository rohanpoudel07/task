import { createContext, useReducer, useEffect } from "react";

const initialState = {
  colour: "inherit",
  history: [],
};

export const ColourContext = createContext();

const colourReducer = (state = initialState, action) => {
  switch (action.type) {
    case "change_colour":
      const newState = {
        ...state,
        colour: action.payload,
        history: [...state.history, action.payload],
      };
      localStorage.setItem("colourState", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export const ColourContextProvider = ({ children }) => {
  const savedState = localStorage.getItem("colourState");
  const [state, dispatch] = useReducer(colourReducer, savedState ? JSON.parse(savedState) : initialState);

  useEffect(() => {
    localStorage.setItem("colourState", JSON.stringify(state));
  }, [state]);

  return (
    <ColourContext.Provider value={{ state, dispatch }}>
      {children}
    </ColourContext.Provider>
  );
};
