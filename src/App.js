import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.compoent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => this.setState({monsters: data}))
  }

  render(){
    const { monsters, searchField } = this.state; 
    const filtredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return(
      <div className="App">
        <SearchBox 
          placeholder="search a monster"
          handleChange = {(e) => this.setState({ searchField: e.target.value})}
        />
        <CardList monsters={ filtredMonsters } />
      </div>
    )
    }
}

export default App;
