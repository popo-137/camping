import React from 'react';
import Link from "next/link";
import styles from '../styles/Main.module.css'

const Main = () => {
    return (
        <div className="main">
            <h1 className="england">Beautiful Places
                <br/>of England</h1>
            <h3 className="england2">Plan your vacation on the most beautiful<br/>
                places of England</h3>
            <div className="container">
                <p className="upnext">Up next</p>
                <h3 className="england3">Aerial View<br/>
                    of Rock<br/>
                    Cliffs</h3>
                <Link href='/upnext'><a><img className="arrow" src='/arrow.svg' alt="arrow"/></a></Link>
                <img className="mountains" src='/andrew-ridley-RwfWSH6Xq0M-unsplash-min.png' alt="mountains"/>
            </div>
        </div>
    );
};

export default Main;