import React, {Component} from 'react'; 
import './App.css';
import tasks from './sample/tasks.json';

//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component {

  state = {
    tasks : tasks
  }

  render(){
    return <div id="main"> 
      <p id="title" align="center">App For List Tasks</p>  
      <TaskForm/>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;

