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
  ],
  addId:'',
  addName: '',
  addSurname: '',
  addPhone: '',
  addIsFavorite: false,

  
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

  inputAddName = event => {
    this.setState({
      addName: event.target.value
    })
  }
  inputAddSurname = event => {
    this.setState({
      addSurname: event.target.value
    })
  }

  inputAddPhone = event => {
    this.setState({
      addPhone: event.target.value
    })
  }

  inputAddContact= () => {
    if (this.state.addName && this.state.addSurname && this.state.addPhone) {
      const contact = [{
        id: this.state.addId,
        name: this.state.addName,
        surname: this.state.addSurname,
        phone: this.state.addPhone,
        isFavorite: this.state.addIsFavorite
      }]
      this.setState({
        contacts: this.state.contacts.concat(contact),
      })
    }
   
  }


  
  render(){

   

    
    return(
      <div>
      <h3>Książka kontaktów</h3>
        <input type="text"onChange={ this.inputAddName} placeholder="Name" value={this.state.addName} />
        <input type="text" onChange={this.inputAddSurname} placeholder="Surname" value={this.state.addSurname} />
        <input type="text" onChange={this.inputAddPhone} placeholder="Phone" value={this.state.addPhone} />
        <button onClick={this.inputAddContact}>Add new contact</button>
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