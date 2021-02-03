import React from "react"
import randomcolor from "rndomcolor"
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.sount) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
         console.log("Updated")
    }
    
    // componentDidMount() {
    //      console.log("Mounted")
    // }
    
    render() {
        console.log("Render")
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
            </div>
        )
    }
}

export default App
