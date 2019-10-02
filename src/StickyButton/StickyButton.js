import React, { Component } from 'react';
import circularImg from './iconmonstr-arrow-up-thin.svg'
import './StickyButton.css'
class StickyButton extends Component {
    goUp=()=>{
        window.scroll(0,0);
    }
    render() {
        return (
            <div className="sticky-bottom">
                <img src={circularImg}  onClick={this.goUp}/>
            </div>
        );
    }
}

export default StickyButton;