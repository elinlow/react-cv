import React, { Component } from 'react';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Icon } from './Icon';
import ContentModule from './ContentModule';

export class WorkExperience extends React.Component {
    render(){
        return (
            <div>
                <Icon 
                    iconType={faPen}
                    type="work-experience"
                    openContentModule={this.props.openContentModule}
                    closeContentModule={this.props.closeContentModule}
                    isContentModuleOpen={this.props.isContentModuleOpen}
                />
            </div>
        );
    }
}
  