import React, {Component} from "react"

function FormComponents (props) {
    return (
        <main>
            <form>
                <input 
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name" 
                />
                <br />

                <input 
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"
                />
                <br />

                <input 
                    name="age"
                    value={props.data.age}
                    onChange={props.handleChange}
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
                        checkedBox={props.gender === "Male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checkedBox={props.data.gender === "Female"}
                        onChange={props.handleChange}
                    /> Female
                </label>

                {/* Create select box for location here */}
                <br />
                    <select 
                        name="destination"
                        value={props.data.destination}
                        onChange={props.handleChange}
                    >
                        <option value="noida">Noida</option>
                        <option value="gurugram">Gurugram</option>
                        <option selected value="delhi">Delhi</option>
                        <option value="dwaraka">Dwaraka</option>
                    </select>

                {/* Create check boxes for dietary restrictions here */}
                <br />
                    {/* <label>
                        <input 
                            type="checkbox"
                            name="vegan"
                            value={props.dietRestrictions.isVegar}
                            onChange={props.handleChange}
                        /> Vegan?
                    </label>
                    <br />

                    <label>
                        <input 
                            type="checkbox"
                            name="kosher"
                            value={props.dietRestrictions.isKosher}
                            onChange={props.handleChange}
                        /> Kosher?
                    </label>
                    <br />

                    <label>
                        <input 
                            type="checkbox"
                            name="lactosefree"
                            value={props.dietRestrictions.isLactoseFree}
                            onChange={props.handleChange}
                        /> Lactose Free?
                    </label>
                    <br /> */}

                <button>Submit</button>

            </form>

            <hr />

            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            {/* <p>
                Your dietary restrictions: 
                {props.dietRestrictions}
            </p> */}
        </main>
    )
}

export default FormComponents;