import React, { Component } from 'react';
import axios from 'axios';
import './Counter.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    ComponentDidMount = () => {
        axios.get('/counter').then(( { data } ) => {
            console.log(data.counter)
            this.setState({counter: data.counter}) 
            }
        )
    }

    clickAddHandler = () => {
        axios.post('/counter/add').then(( { data } ) => {
            this.setState({counter: data.counter}) 
        });
    }

    clickSubtractHandler = () => {
        axios.post('/counter/subtract').then(( { data } ) => {
            this.setState({counter: data.counter}) 
        });
    }

    render() {
        return (
            <div className="Container">
                <div className="Count">
                    {this.state.counter}
                </div>
                <div className="Btn">
                    <button onClick={ () => this.clickSubtractHandler() }> - </button>
                    <button onClick={ () => this.clickAddHandler() }> + </button>
                </div>
            </div>
        )
    }
}

export default Counter;