import React, {Component} from 'react'; 
import './App.css';
import tasks from './sample/tasks.json';

//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Post from './components/Post';

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

  deleteTask = (id) =>{
    const nt = this.state.tasks.filter(task => task.id !== id)
    //console.log(nt)
    this.setState({
      tasks:nt
    })
  }

  checkDone = (id) =>{
    const nt = this.state.tasks.map(task=>{
      if (task.id === id){
        task.done = !task.done
      }
      return task;
    })
    this.setState({
      tasks:nt
    })
  }
  
 

  render(){
    //this.addTaks()
    return <div id="main"> 
      
      <Post/>
    </div>
  }
}

export default App;

