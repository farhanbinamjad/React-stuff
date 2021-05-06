import React, { Component } from 'react'
import Coin from './Coin';

class CoinContainer extends Component {

    static defaultProps = {
        coins: [
            {side: "heads", imgSrc:"https://tinyurl.com/react-coin-heads-jpg"},
            {side: "tails", imgSrc:"https://tiyurl.com/react-coin-tails-jpg"}
        ]
    };

    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            numHeads: 0,
            numTails: 0,
            nFlips: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    choice(arr){
        let randindex = Math.floor(Math.random() * arr.length);
        return arr[randindex];
    }

    flipCoin(e){
        let newCoin = this.choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips+ 1,
                numHeads: st.numHeads + (newCoin.side ==="heads" ? 1:0),
                numTails: st.numTails + (newCoin.side ==="tails" ? 1:0)
            }
        })
    }

    handleClick(e){
        this.flipCoin();
    }

    render() {
        return (
            <div className="CoinContainer">
                <h2>Let's Flip!</h2>
                <button onClick={this.handleClick} className="Coin-button">Flip</button>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <p>From {this.state.nFlips} Flips, we have had {this.state.numHeads} Heads and {this.state.numTails} Tails</p>
            </div>
        )
    }
}

export default CoinContainer; 