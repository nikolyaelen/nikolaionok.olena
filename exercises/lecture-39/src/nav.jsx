import { BrowserRouter, Link } from 'react-router-dom';
import './nav.css'

function Nav(){

    return (
       
      <> 
        <nav>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
      </>
           
       
        
        
        );

}
export default Nav