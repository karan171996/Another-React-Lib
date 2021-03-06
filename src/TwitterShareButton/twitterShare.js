import React from 'react';
import './twitterShare.css';
import twitter from './twitterIcon.png'

export default class TwitterShare extends React.Component {
    render() {
        const {message, size} = this.props;
        return (
            <div className="container">
                <a href={`https://twitter.com/intent/tweet?text=${message}`} data-show-count="false"  target="_blank">
                <img src={twitter} className={`icon-${size || 'md'}`}  />
                </a>
                
            </div>
        )
    }
}