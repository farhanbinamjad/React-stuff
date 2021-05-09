import React, { Component } from 'react'
import axios from 'axios';
import Card from './card'
import './Deck.css';
const API_base_URL = "https://deckofcardsapi.com/api/deck";

export class Deck extends Component {

    constructor(props){
        super(props);
        this.state = {deck: null, drawn: []}
        this.getCard = this.getCard.bind(this);
    }
 
    async componentDidMount(){
        let deck = await axios.get(`${API_base_URL}/new/shuffle`);
        this.setState({deck: deck.data});
    }

    async getCard(){
        let id = this.state.deck.deck_id;
        try{
            let cardUrl = `${API_base_URL}/${id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if(!cardRes.data.success){
                throw new Error("no card left")
            }
            let card = cardRes.data.cards[0];
            this.setState(st => ({
            drawn: [
                ...st.drawn,
                {
                    id: card.code,
                    image: card.image,
                    name: `${card.value} of ${card.suit}`
                }
            ]
        }));
        } catch (err){
            alert(err);
        }
    }

    render() {
        const cards = this.state.drawn.map(c => (
        <Card key={c.id} name={c.name} image={c.image}/>
         ))
        return (
            <div>
                <h1>🃏Card Dealerzzz🃏</h1>
                <button onClick={this.getCard}>Get Card!</button>
                <div className="Deck-cardarea">{cards}</div>
            </div>
        )
    }
}

export default Deck
