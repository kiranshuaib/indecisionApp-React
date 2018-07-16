import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss'


 


ReactDOM.render(
    <IndecisionApp />, document.getElementById('app'));



// class OldSyntax {
//     constructor(){
//         this.name = "Mike";
//     }

//     getGreetings(){
//         return `Hi, My name is ${this.name}.`
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
// console.log(oldSyntax.getGreetings());

// // ------

// class NewSyntax {
//   name = "Jen";
//   getGreetings = () => {

//       return `Hi, My name is ${this.name}.`
//   }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreetings();
// console.log(newGetGreeting);