import React from "react";
import './components_styles/Navbar.css'


export const Footer = ({supporter}) => {
    if (!supporter || !supporter.name) {
        return null; 
    }
    if (!supporter || !supporter.company) {
        return null; 
    }
    if (!supporter || !supporter.email) {
        return null; 
    }
    if (!supporter || !supporter.phone) {
        return null; 
    }



    return (
        <>
            <footer className="d-flex justify-content-center text-light">        
                <div className="container d-flex justify-content-between">
                    <div className="footer-body">
                        <h5>{supporter.name}</h5>
                        <p>{supporter.company.name}</p>
                        <p>{supporter.email}</p>
                        <p>{supporter.phone}</p>
                        
                    </div>
                </div>
            </footer>
            
        </>
    );
};
