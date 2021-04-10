import React, {Component} from "react"
import FormComponents from "FormComponents"


class Form extends Component {
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
            <FormComponent 
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default Form
