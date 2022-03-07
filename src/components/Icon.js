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
                        this.props.openContentModule(this.props.type)
                    } else {
                        this.props.closeContentModule()
                    }
                }}
            />
        );
    }
}
  