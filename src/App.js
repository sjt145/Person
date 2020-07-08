import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      {id:0, name: "Shefali", age: 18 },
      {id:1, name: "Shivani", age: 18 },
      {id:2, name: "Arpit", age: 21.4 }
    ],
    count: 0
  }

  handleClick = (index) => {
    // let personState=[...this.state.person]
    let personState=this.state.person.slice()
    personState.splice(index,1)
    this.setState({person:personState},()=>{
      console.log('state',this.state.person)
    })
    
    // this.setState({ count: this.state.count + 1 });

    // const countSpan = document.getElementById('count');
    // const newCount = parseInt(countSpan.innerHTML) + 1;
    // countSpan.innerHTML = newCount;
  }

  render() {
    return (
      <div className="App">
         <h1>Hi I'm React App</h1>
        {/*<p>Cliked: <span id="count">{this.state.count}</span></p>
        <button onClick={() => this.handleClick()}>Click Me!!</button> */}
        {
          this.state.person.map((person,index) => {
            return <Person onclick={()=>this.handleClick(index)} key={person.id} name={person.name} age={person.age} />
          })
        }
      </div>
    );
  }
}

export default App;
