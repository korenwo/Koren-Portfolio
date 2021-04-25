import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

function Contact (props) {
    
    return (
        <div>
            <div className="callUs">
                <FontAwesomeIcon icon={faPhone} /> 0547944889 <br></br>
                <h2>korenwohl@gmail.com, www.linkedin.com/in/koren-wohl-a1933b202, github.com/korenwo</h2>
            </div>
               <Link to="/">
                <FontAwesomeIcon icon={faHome} />
                    </Link>
                </div>       
       
           
                
                
               
            
     
    );
}

export default Contact;
