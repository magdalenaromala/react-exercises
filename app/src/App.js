import React, {Component} from "react"
import "./App.css";

class App extends Component{
  state={people:[
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
      <div>Książka kontaktów</div>
    )
  }
}
export default App