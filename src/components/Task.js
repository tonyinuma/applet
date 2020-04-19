import React, {Component} from 'react';

class Task extends Component{
    render(){

        const {task} = this.props;

        return <div id="card">
            <h1>{task.title}</h1>
            <p>{task.description}</p> 
            <input type="checkbox"/>
            <button>x</button> 
        </div>
    }
}

export default Task;
