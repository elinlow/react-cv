import React from 'react';
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Icon } from './Icon';
import ContentModule from './ContentModule';

export class Education extends React.Component {
    render() {
        return (
            <div>
                <Icon 
                    iconType={faBookOpen}
                    type="education"
                    text="Let us learn more about Elins Education"
                    openContentModule={this.props.openContentModule}
                    closeContentModule={this.props.closeContentModule}
                    isContentModuleOpen={this.props.isContentModuleOpen}
                    textType={this.props.contentModuleTextType}
                />
            </div>
        );
    }
}
  
