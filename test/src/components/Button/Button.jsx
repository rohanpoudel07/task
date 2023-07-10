import { useContext } from 'react'
import { ColourContext } from '../../context/ColourContext';
import "./button.css";

const Button = () => {
  const { state, dispatch } = useContext(ColourContext);
  const { colour } = state;
  const colours = ["red", "green", "blue", "black", "orange"];

  const changeColour = () => {
    let nextColour;
    if (colour === "blue") {
      nextColour = "green";
    } else {
      nextColour = colours[Math.floor(Math.random() * colours.length)];
    }
    dispatch({ type: "change_colour", payload: nextColour });
  }

  return (
    <button className='btn' onClick={changeColour} style={{ backgroundColor: colour }}>
      Click me to change colour
    </button>
  )
}

export default Button