import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Icon extends React.Component {
    handleClick(text) {
        alert('hej' + text);
    }

    render(){
        console.log(this.props)
        return (
            <FontAwesomeIcon 
                icon={this.props.iconType} 
                className="icon"
                // onClick={this.props.handleClickEvent} 
                onClick={() => this.handleClick(this.props.text)}
            />
        );
    }
}
  