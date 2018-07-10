import React, {Component} from 'react';
import { InspiringQuotes } from '../../JSON/Quotes';
import WallImage from '../../Images/wall_image.gif';

class MyQuotes extends Component {
    constructor(props){
        super(props);
        this.state = {
            Quotes : [],
            randomQuote : InspiringQuotes[Math.floor(Math.random() * InspiringQuotes.length)].Quote,
            randomQuotePerson : InspiringQuotes[Math.floor(Math.random() * InspiringQuotes.length)].person
        }
    }
    componentWillMount(){
        this.setState({
            Quotes : InspiringQuotes
        });
    }
    displayRandomQuote =()=> {
        const QuotesData = this.state.Quotes;
        let RandomQuote = QuotesData[Math.floor(Math.random() * QuotesData.length)];
        this.setState({
            randomQuote : RandomQuote.Quote,
            randomQuotePerson : RandomQuote.person
        });
    }

    
    render() {
        const { randomQuote , randomQuotePerson } = this.state;
        return (
            <div>
                <div class="card">
                    <div class="card-header">
                        <button class="btn btn-sm btn-info" onClick={this.displayRandomQuote}>Get New Quote</button>
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>{randomQuote}</p>
                        <footer class="blockquote-footer"><cite title="Source Title">{randomQuotePerson}</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}


export default MyQuotes;


