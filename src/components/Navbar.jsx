import { useState } from "react";

const Navbar = ({active, setActive}) => {
    

    const navItems = [
        { id: "home", icon: "fa-house", label: "Home" },
        { id: "about", icon: "fa-user", label: "About" },
        { id: "work", icon: "fa-briefcase", label: "Work" },
        // { id: "blog", icon: "fa-blog", label: "Blog" },
        { id: "contact", icon: "fa-phone", label: "Contact" },
        
    ];

    return (
        <div className="d-flex justify-content-center px-3">
            <nav className="navbar-custom m-2 p-2 border rounded-4">
                
                {/* Logo */}
                <div className="navbar-logo px-3 py-2">
                    Praveen
                </div>

                {/* Navigation */}
                <div className="navbar-links">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-item ${
                                active === item.id ? "active" : ""
                            }`}
                            onClick={() => setActive(item.id)}
                        >
                            <i className={`fa-solid ${item.icon}`}></i>
                            <span>{item.label}</span>
                        </button>
                    ))}
                    <button
                            
                            className= " nav-item" 
                            onClick={() =>{} }
                        >
                            <i className={`fa-solid fa-calendar-plus`}></i>
                            <span>Book an Appoinment</span>
                        </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;