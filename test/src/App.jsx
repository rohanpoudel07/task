import "./App.css"
import Button from './components/Button/Button'
import ColourHistory from './components/ColourHistory/ColourHistory'

const App = () => {
  return (
    <div className="home">
      <h1 className="title">
        Click the button below to change its colour
      </h1>
      <Button />
      <ColourHistory />
    </div>
  )
}

export default App