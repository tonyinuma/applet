import React, {Component} from 'react';

export default class TaskForm extends Component {

    // this is state of form
    state = {
        title: '',
        description: ''
    }

    // event submit to send data
    onSubmit = e => {
        this.props.addTaks(this.state.title, this.state.description)
        //console.log('state : ', this.state);
        e.preventDefault()
    }

    // event on change input and text area
    onChange = e =>{
        //console.log(e.target.value, e.target.name)
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

