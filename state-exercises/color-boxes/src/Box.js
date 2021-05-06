import React, { Component } from 'react'
import './Box.css';


export class Box extends Component {

    static defaultProps = {
        allColors: ['rgb(236, 228, 219)', 'rgb(248, 237, 235)', 'rgb(232, 232, 228)', 
                    'rgb(216, 226, 220)', 'rgb(255, 229, 217)', 'rgb(255, 215, 186)', 'rgb(254, 200, 154)']
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
            <div className="Box" style={{backgroundColor: this.state.color}} onClick= {this.handleClick}>
                
            </div>
        )
    }
}

export default Box
