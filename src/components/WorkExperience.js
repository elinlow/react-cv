import React from 'react';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Icon } from './Icon';

export class WorkExperience extends React.Component {
    render(){
        return (
            <div>
                <Icon 
                    iconType={faPen}
                    text="Let us learn more about Elins Work Experience"
                    openContentModule={this.props.openContentModule}
                />
            </div>
        );
    }
}
  