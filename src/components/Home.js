import React from "react";
import Navbar from "./Navbar";
import ContentModule from "./ContentModule.js";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isContentModuleOpen: false,
            contentModuleType: null
        };
    }
    
    openContentModule = hej => {
        console.log(hej)
        // this.setState({ 
        //     isContentModuleOpen: true,
        //     contentModuleType: type
        // })
    }

    closeContentModule = () => {
        this.setState({ isContentModuleOpen: false })
    }

    render () {
        return (
            <div>
                <Navbar 
                    openContentModule={this.openContentModule}
                    isContentModuleOpen={this.state.isContentModuleOpen}
                    closeContentModule={this.closeContentModule}
                />
                {this.state.isContentModuleOpen && (
                    <ContentModule
                        contentModuleType={this.state.contentModuleType}
                    />
                )}
            </div>
        );
    }
}

export default Home;
  