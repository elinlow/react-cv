import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Icon extends React.Component {
    render(){
        return (
            <FontAwesomeIcon 
                icon={this.props.iconType}
                className="icon"
                onClick={() => {
                    if (!this.props.isContentModuleOpen) {
                        this.props.openContentModule()
                    } else {
                        // Här ska close-funktionen vara
                        this.props.isContentModuleOpen.style.display = "none"
                    }
                }}
            />
        );
    }
}
  