import React from 'react';

const person = (props) => {

  return (
    <div onClick={props.onclick}>
      <p>I am a Person</p>
      <p>My name is {props.name} and my age is {props.age}</p>
    </div>
  )
}

// class Person extends Component {
//   isAuth = false;

//   render() {
//     return (
//       <>
//         {this.isAuth ? "Welcome" : "Not Authenticated"}
//         <p>I am a Person</p>
//         <p>My name is {this.props.name} and my age is {this.props.age}</p>
//       </>
//     )
//   }
// }

export default person;