import  { useState } from 'react';
import "./Nav.css";

const Nav = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">RAGES</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => handleLinkClick('Home')}>Home</a>
              </li>
              <li className={`nav-item ${activeLink === 'Store' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => handleLinkClick('Store')}>Store</a>
              </li>
              <li className={`nav-item ${activeLink === 'Blogs' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => handleLinkClick('Blogs')}>Blogs</a>
              </li>
              <li className={`nav-item ${activeLink === 'Academics' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => handleLinkClick('Academics')}>Academics</a>
              </li>
              <li className={`nav-item ${activeLink === 'Services' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => handleLinkClick('Services')}>Services</a>
              </li>
              <li className={`nav-item ${activeLink === 'About Us' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => handleLinkClick('About Us')}>About Us</a>
              </li>
              <li className={`nav-item ${activeLink === 'Contact' ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={() => handleLinkClick('Contact')}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;