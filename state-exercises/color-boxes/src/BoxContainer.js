import React, { Component } from 'react'
import Box from "./Box"
import './BoxContainer.css'

export class BoxContainer extends Component {

    static defaultProps = {
        numbox: 22
    }
    render() {
        const boxes = Array.from({length:this.props.numbox}).map( () => (
        <Box/>
        ));
        return(
            <div className="BoxContainer">
                {boxes}
            </div>)

        }
}

export default BoxContainer
