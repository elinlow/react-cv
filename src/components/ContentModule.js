import React from 'react';
import EducationContent from './EducationContent';
import WorkExperienceContent from './WorkExperienceContent';

class ContentModule extends React.Component {
    render() {
        return (
            <>
                {this.props.contentModuleType === 'education' ? <EducationContent /> : <WorkExperienceContent />}
            </>
        )
    }
}

export default ContentModule;