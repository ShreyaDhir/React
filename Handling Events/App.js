import React from "react"

function handEvent() {
    console.log("I was clicked!");
}

function App() {
    return (
        <div>
            <img 
              onMouseOver={() => console.log("Hovered!")}
              src="https://www.fillmurray.com/200/100"
            />
            <br />
            <br />
            <button onClick={handEvent}>Click me</button>
        </div>
    )
}

export default App
