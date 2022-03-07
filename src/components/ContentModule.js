import React from 'react';
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { WorkExperience } from './WorkExperience';
import { Education } from './Education';
import { Icon } from './Icon';

class ContentModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type1: "WORK EXPERIENCE",
            type2: "EDUCATION"
        }
    }

    openModuleTextType = type => {
        this.setState({
            // isContentModuleOpen: true,
            contentModuleTextType: type
        })
    }

    render() {
        return (
            <>
                <WorkExperience
                    openModuleTextType={this.state.contentModuleTextType}
                />
                <Education
                    openModuleTextType={this.state.contentModuleTextType}
                />
            </>
        )
    }
}

export default ContentModule;