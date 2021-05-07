import React, { Component } from 'react'
import './Box.css';

export class Box extends Component {

    static defaultProps = {
        allColors: ['rgb(255, 190, 11)', 'rgb(251, 86, 7)', 'rgb(255, 0, 110)', 
        'rgb(131, 56, 236)', 'rgb(58, 134, 255)']
    }

    constructor(props){
        super(props)
        this.state= {color: this.choice(this.props.allColors)}
        this.handleClick = this.handleClick.bind(this);
    }
    
    choice(arr){
        let randindex = Math.floor(Math.random() * arr.length);
        return arr[randindex];
    }

    pickColor(){
        let newColor;
        do {
            newColor = this.choice(this.props.allColors)
        } while (newColor === this.state.color);
        this.setState({color: newColor})
    }

    handleClick(){
        this.pickColor()
    }
    render() {
        return (
            <div className="Box" style={{borderColor: this.state.color}}> 
            <h2 className="heading">{this.props.heading}</h2>
            <p className="news">{this.props.news}</p>
            <button className="Box-button" onClick= {this.handleClick} style={{background: this.state.color}}>CLICK to Change Color</button>
            
            </div>
        )
    }
}

export default Box
