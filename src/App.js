import React from 'react'; 
import './App.css';

function HelloWorld(props){
  console.log(props)
  return(
    <div id="hello">{props.text}</div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hi World, This is my component: 
        <HelloWorld text="Hola Tony"/>
        <HelloWorld text="Hola Cindy"/>
        <HelloWorld text="Hola Leone"/>
        </h1>
    </div>
  );
}

export default App;
