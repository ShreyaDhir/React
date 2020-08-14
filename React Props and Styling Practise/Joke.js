import React from "react";

function Joke(props){
    console.log(props)
    return(
        <div>
          <h4>Question: {props.joke.question}</h4>
          <h5>Answer: {props.joke.punchline}</h5>
        </div>
    )
}

export default Joke;