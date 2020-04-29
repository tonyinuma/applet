import React, {Component} from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        console.log('state : ', this.state);
        e.preventDefault()
    }

    onChange = e =>{
        console.log(e.target.value, e.target.name)
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" 
                        placeholder="Write a task" 
                        onChange={this.onChange} 
                        value={this.state.title}
                        name="title"
                        />
                <br/>
                <br/>
                <textarea placeholder="Write a description" 
                            onChange={this.onChange} 
                            value={this.state.description}
                            name="description"> 
                            </textarea>
                <br/>
                <br/>
                <input type="submit" />
            </form>
        )
    }   
}

