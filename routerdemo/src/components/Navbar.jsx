import React from 'react';
import { Link } from '@reach/router';

const Navbar = props => {
    return(
        <div>
            <Link to="/">Pic</Link>  |  
            <Link to="/stats">Stats</Link>
        </div>
    )
}

export default Navbar;