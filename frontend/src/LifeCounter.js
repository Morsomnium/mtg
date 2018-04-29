import React from 'react';
import './LifeCounter.css';


class LifeCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 20,
        };
    }

    add(){
        this.setState({value : this.state.value + 1});
    }

    subtract(){
        this.setState({value : this.state.value - 1});
    }

    render(){
        return (
            <section className="CounterContainer">
                <button onClick={() => this.add()} className="CalcButton">+</button>
                    <text>{this.state.value}</text>
                <button onClick={() => this.subtract()} className="CalcButton">-</button>
            </section>
        );
    }

}

export default LifeCounter;