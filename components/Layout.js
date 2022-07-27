import React from 'react';
import Header from './Header';
import Main from "./Main";
import VacationForm from "./VacationForm";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Header />
            <Main/>
            <VacationForm/>
            { children }

        </div>
    );
}

export default Layout;