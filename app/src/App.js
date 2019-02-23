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
           <td><button>Toggle favorite</button>
               <button>Remove contact</button>
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