import React, {Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component{

    StyleCompleted(){
        return{
            background: '#fff',
            fontSize: '20px',
            color: this.props.task.done ? '#E74C3C' : '#2ECC71',
            textDecoration: this.props.task.done ? 'line-through' : 'none',
            width: '30%',
            borderRadius: '5%',
            margin: 'auto'
        }
    }

    render(){
        const {task} = this.props;
        const redColor = {
            background: '#fff',
            width: '30%',
            margin: 'auto'
        }; 

        return <div style={this.StyleCompleted()}>
            <h1>{task.title}</h1>
            <p>{task.description}</p> 
            <p>{task.done}</p>
            <p>{task.id}</p>
            <input type="checkbox"/>
            <button style={btnDelete}>x</button> 
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px', 
    background: '#ea2027', 
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
};

export default Task;
