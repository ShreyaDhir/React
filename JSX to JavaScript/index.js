import React from "react"
import ReactDOM from "react-dom"

function App(){
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if(hours < 12)
    timeOfDay = "Morning";
  else if(hours <= 12 && hours > 17)
    timeOfDay = "Evening";
  else
    timeOfDay = "Night";
  
  return (<p> Good {timeOfDay}!</p>)
}

ReactDOM.render(<App />, document.getElementById("root"))