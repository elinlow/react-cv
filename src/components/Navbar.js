import React from "react";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1 className="main-headline">elinlow</h1>
                <div className="navbar__icons">
                    <Education 
                        openContentModule={this.props.openContentModule}
                        isContentModuleOpen={this.props.isContentModuleOpen}
                    />

                    <WorkExperience 
                        openContentModule={this.props.openContentModule}
                        isContentModuleOpen={this.props.isContentModuleOpen}
                    />
                </div>    
            </div>
        );
    }
}
  
export default Navbar;