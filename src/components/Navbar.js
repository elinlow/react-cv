import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";

function Navbar() {
    return (
     <div className="navbar">
        <h1 className="main-headline">elinlow</h1>
        <div className="navbar__icons">
            <Education />
            <WorkExperience />
        </div>    
     </div>
    );
}
  
export default Navbar;