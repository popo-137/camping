import React from 'react';
import Link from "next/link";



const Header = () => {
    return (
        <header>
            <nav>
                <div className="navbar">
                <div className="about"><Link href='/about'><a>About</a></Link>
                <Link href='/contact'><a>Contact</a></Link></div>
                <div className="camping"><Link href='/'><a>Camping.</a></Link></div>
                <div className="signup"><Link href='/signup'><a>Sign In</a></Link>
                <Link href='/signup'><a>Sign Up</a></Link>
                    <img className="glass" src="/Vector.svg" alt="лупа"/></div>
            </div>
            </nav>
            <hr/>
        </header>

    );
};

export default Header;