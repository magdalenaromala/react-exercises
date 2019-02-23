import React, {Component} from "react"
import "./App.css";

class App extends Component{
  state={contacts:[
    { 
      id: 1, 
      name: 'John',
      surname: 'Doe',
      phone: '123-456-789',
      isFavorite: false
    },
    {
      id: 2, 
      name: 'Steve',
      surname: 'Stevens',
      phone: '987-654-321',
      isFavorite: true
    }
  ]

  };

  toggleFavorite = contactId => {
    this.setState({
      contacts: this.state.contacts.map(contact => {
        return contact.id === contactId
          
         ? {
              ...contact,
              isFavorite: !contact.isFavorite
            }
            : contact
      })
    });
  };


 
  removeContact= contactId => {
    this.setState({
     contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };
  
  render(){

   

    
    return(
      <div>
      <h3>Książka kontaktów</h3>
     <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Surname</th>
           <th>Phone</th>
         </tr>
       </thead>
       <tbody>{this.state.contacts.map(contact => (
          <tr key={contact.id} className={contact.isFavorite ? "favorite" : "" }>
           <td>{contact.name}</td>
           <td>{contact.surname}</td>
           <td>{contact.phone}</td>
           <td><button onClick={() => this.toggleFavorite(contact.id)}>Toggle favorite</button>
               <button onClick={()=> this.removeContact(contact.id)}>Remove contact</button>
           </td>
         </tr>
        ))}
       </tbody>
     </table>
      </div>
    )
  }
}
export default App