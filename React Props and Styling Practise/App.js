import React from "react";
import Joke from "./Joke";

function App(){
    return(
        <div>
          <Joke 
          joke={{question:"What's the best anti diarrheal prescription?", punchline:"Mycheexarphlexin"}}/>
          <Joke
          joke={{question:"Which Star Trek character is a member of the magic circle?", punchline:"Jean-Luc Pickacard"}} />
          <Joke
          joke={{question:"Why was the Ethiopian baby crying?", punchline:"He was having a mid-life crisis"}} />
          <Joke
          joke={{question:"", punchline:"Kevin Durant or Bernie Sanders?"}} />
          <Joke 
          joke={{question:"", punchline:"A bachelor will go to the fridge, sees nothing he wants, and go to bed A married man will go the bed..."}}/>                   
        </div>
    )
}

export default App;

//Who is 2016's biggest sellout?
//What's the difference between a married man and a bachelor?