import { ColourContext } from "../../context/ColourContext"
import { useContext } from "react"
import "./colourhistory.css";

const ColourHistory = () => {

  const { state } = useContext(ColourContext);

  const { history } = state;

  return (
    <>
      {
        history.length > 0 && (
          <span className="history_title">
            Colour History
          </span>
        )
      }
      <div className="colours">{
        history.map((colour, index) => (
          <span key={index} style={{ color: colour }}>
            {colour}{history.length > 1 && ","}
          </span>
        ))}
      </div>
    </>
  )
}

export default ColourHistory