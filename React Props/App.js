import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
               contact={{imgUrl:"https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg",
               name:"Timmy",
               phone: "123456789",
               email:"1@mail.bark"}}
               
               />
            <ContactCard
                contact={{imgUrl:"https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg",
                name:"Billy",
                phone: "Phone: 893456778",
                email:"Email: 2@mail.bark"}}
                
                />
            <ContactCard 
                contact={{imgUrl:"https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg",
                name:"Cap",
                phone: "Phone: 8753427832",
                email:"Email: 3@mail.bark"}}
                
                />
            <ContactCard
                contact={{imgUrl:"https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg",
                name:"Tom",
                phone: "Phone: 987654321",
                email:"Email: 4@mail.bark"}}
                
                />
        </div>
    )
}
export default App
