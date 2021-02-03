import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        console.log("In constructor")
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        console.log("App.js - componentDidMount")
        setTimeout(() => {
            console.log("App.js - setTimeout")
            this.setState({
                isLoading: false
            })
        }, 1500)
    }  
    
    render() {
        console.log("Render()")
        return (
            <div>
                {this.state.isLoading ? 
                 <h1>Loading</h1> : 
                 <Conditional />}
            </div>
        )
    }
}

export default App
