import React, {Component} from 'react'; 
import './App.css';
import tasks from './sample/tasks.json';

//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component {

  // State of main component Task
  state = {
    tasks : tasks
  }

  // Funct to get component data title and description an put in state{}
  addTaks = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  render(){
    //this.addTaks()
    return <div id="main"> 
      <p id="title" align="center">App For List Tasks</p>  
      <TaskForm addTaks={this.addTaks}/>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;

