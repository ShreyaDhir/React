import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

// Need to work on the dietRestrictions one - not complete

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            dietRestrictions: {
                isVegan: false,
                isKoshner: false,
                isLactoseFree: false,
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const{name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name" 
                    />
                    <br />

                    <input 
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <br />

                    <input 
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    <br />
                    
                    {/* Create radio buttons for gender here */}
                    <br />
                    <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          checkedBox={this.state.gender === "Male"}
                          onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />

                    <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          checkedBox={this.state.gender === "Female"}
                          onChange={this.handleChange}
                        /> Female
                    </label>

                    {/* Create select box for location here */}
                    <br />
                        <select 
                            name="destination"
                            value={this.state.destination}
                            onChange={this.handleChange}
                        >
                            <option value="noida">Noida</option>
                            <option value="gurugram">Gurugram</option>
                            <option selected value="delhi">Delhi</option>
                            <option value="dwaraka">Dwaraka</option>
                        </select>

                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                       <label>
                           <input 
                              type="checkbox"
                              name="vegan"
                              value={this.state.dietRestrictions.isVegar}
                              onChange={this.handleChange}
                           /> Vegan?
                       </label>
                       <br />

                       <label>
                           <input 
                              type="checkbox"
                              name="kosher"
                              value={this.state.dietRestrictions.isKosher}
                              onChange={this.handleChange}
                           /> Kosher?
                       </label>
                       <br />

                       <label>
                           <input 
                              type="checkbox"
                              name="lactosefree"
                              value={this.state.dietRestrictions.isLactoseFree}
                              onChange={this.handleChange}
                           /> Lactose Free?
                       </label>
                       <br />

                    <button>Submit</button>

                </form>
                <hr />

                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.dietRestrictions}
                </p>
            </main>
        )
    }
}

export default App
