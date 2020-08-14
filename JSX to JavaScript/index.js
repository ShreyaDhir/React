import React from "react"
import ReactDOM from "react-dom"

function App(){
  const date = new Date()
  
  return (<p> It is currently {date.getHours() % 12} hours</p>)
}

ReactDOM.render(<App />, document.getElementById("root"))