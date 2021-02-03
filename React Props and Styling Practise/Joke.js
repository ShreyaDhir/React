import React from "react";

function Joke(props){
    console.log(props)
    return(
        <div>
          <h4 style={{display : props.joke.question ? "block" : "none"}}>Question: {props.joke.question}</h4>
          <h5 style={{color: !props.joke.question ? "blue" : "green"}}>Answer: {props.joke.punchline}</h5>
          <hr/>
        </div>
    )
}

export default Joke;