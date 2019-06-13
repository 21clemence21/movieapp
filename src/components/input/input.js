import React, { Component } from 'react'

export class input extends Component {

    state = {
        userInput: "",
        todoList: []
    };

    inputChange = event => {
        this.setState({ userInput: event.target.value });
   
    };

    render() {
        return (
            <div>

                <input
                    placeholder="rentrez votre film ici"
                    value={this.state.userInput}
                    onChange={this.inputChange}
                    type="text"
                />
                <button onClick={this.addTodo}>Cherchez !</button>
                
            </div>
        )
    }
}

export default input



