import React, { Component } from 'react';
import mayday from './mayday.jpg';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import HandmaidCard from './Handmaids/HandmaidCard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      handmaids: []
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/handmaids')
    .then(response =>{
      this.setState(() => ({handmaids:response.data}));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }

  render(){
  return (
    <div className="App">
    <h2>Resist Sister</h2>
      <header className="App-header">
        <img src={mayday} className="App-logo" alt="mayday" />
        </header>
        <div className="handmaid-list">
        {this.state.handmaids.map(handmaid => (
          <HandmaidDetails key={handmaid.id} handmaid={handmaid} />
        ))}
        </div>
    </div>
  );
}
}

function HandmaidDetails({ handmaid }) {

  return (
    <div className="handmaid-card">
    <NavLink to ={`/handmaids/${handmaid.id}`}>
      <HandmaidCard handmaid ={handmaid} />
      </NavLink>
  </div>
  );
}

export default App;
