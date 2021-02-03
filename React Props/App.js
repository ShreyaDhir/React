import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
               contact={{imgUrl:"http://placekitten.com/200/100",
               name:"Timmy",
               phone: "123456789",
               email:"1@mail.bark"}}
            />

            <ContactCard
                contact={{imgUrl:"http://placekitten.com/400/300",
                name:"Billy",
                phone: "Phone: 893456778",
                email:"Email: 2@mail.bark"}}  
            />

            <ContactCard 
                contact={{imgUrl:"http://placekitten.com/400/200",
                name:"Cap",
                phone: "Phone: 8753427832",
                email:"Email: 3@mail.bark"}} 
            />
            
            <ContactCard
                contact={{imgUrl:"http://placekitten.com/300/200",
                name:"Tom",
                phone: "Phone: 987654321",
                email:"Email: 4@mail.bark"}}    
            />
        </div>
    )
}
export default App
