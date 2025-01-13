import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const navItems = [
        { icon: '🏠', text: 'Blog Home' },
        { icon: '📝', text: 'Blog Post' },
        { icon: '👤', text: 'About Me' }
    ];

    const socialIcons = ['Twitter', 'LinkedIn', 'YouTube', 'Camera', 'RSS'];

    return (
        <div className="sidebar">
            <div className="blog-header">
                <h1 className="blog-title">Blog Kowalskiego</h1>
                <p>Hi, my name is Kowalski</p>
            </div>

            <div className="social-icons">
                {socialIcons.map((social, index) => (
                    <a
                        href="#"
                        key={index}
                        className="social-icon"
                        title={social}
                    >
                        {social[0]}
                    </a>
                ))}
            </div>

            <nav className="nav-menu">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a href="#" className="nav-link">
                                <span>{item.icon}</span>
                                <span>{item.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;