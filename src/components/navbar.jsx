import "./navbar.css";
import Logo from "../assets/logo.jpg";

const Navbar = ({isHR, setIsHR}) => {

    const toggleHrToStud = () => {
        setIsHR(prev => !prev);
    }
    
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span>Hiring Platform</span>
            </div>

            <ul className="nav-links">
                {isHR ? <li><button id="create-job-btn">Create New Job</button></li> : <></>}
                <li><button>Careers Home</button></li>
                <li><button>About us</button></li>
                <li><button>Services</button></li>
                <li><button>Roles</button></li>
                {isHR ? <li><button id="switch-to-stud-btn" onClick={toggleHrToStud}>Switch to Student</button></li> : <li><button id="switch-to-hr-btn" onClick={toggleHrToStud}>Switch to HR</button></li>}
            </ul>
        </nav>
    );
};

export default Navbar;
