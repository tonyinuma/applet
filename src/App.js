import React from 'react'; 
import './App.css';

/* function HelloWorld(props){
  console.log(props)
  return(
    <div id="hello">{props.text}</div>
  );
} */

class HelloWorld extends React.Component{

  state = {
    show : true
  }

  changeState = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if(this.state.show){
      return(
        <div className="house">
          {this.props.text}
          <button onClick={this.changeState}>Apagar Luz</button>
        </div>
        
      );
    }else{
      return <h1 className="house">Luz apagada<button onClick={this.changeState}>Encender Luz</button></h1>
    }
  }
}

function App() {
  return (
    <div className="App">
      <h1>Control de luces de una casa inteligente:
        <HelloWorld text="Luz sala"/>
        <HelloWorld text="Luz Cocina"/>
        <HelloWorld text="Luz Cochera"/>
        </h1>
    </div>
  );
}

export default App;
