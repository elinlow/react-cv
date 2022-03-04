import React from 'react';
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Icon } from './Icon';

export class Education extends React.Component {
    render() {
        return (
            <div>
                <Icon 
                    iconType={faBookOpen}
                    text="Let us learn more about Elins Education"
                    openContentModule={this.props.openContentModule}
                    closeContentModule={this.props.closeContentModule}
                    isContentModuleOpen={this.props.isContentModuleOpen}
                />
            </div>
        );
    }
}
  
