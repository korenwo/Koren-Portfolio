import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

function Contact () {
    return (
        <div>
            <div className="callUs">
                <FontAwesomeIcon icon={faPhone} /> 0547944889 <br></br>
                    Email:korenwohl@gmail.com</div>
                <div className="links">
                <Link to="/https://www.linkedin.com/in/koren-wohl-a1933b202/">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <FontAwesomeIcon icon={faFacebook} />
               <Link to="/https://github.com/korenwo/">
                    <FontAwesomeIcon icon={faGithub} />
                    </Link>
             
               <Link to="/startPage">
                <FontAwesomeIcon icon={faHome} />
                    </Link>
                </div>       
            </div>
           
                
                
               
            
     
    );
}

export default Contact;
