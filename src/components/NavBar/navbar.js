import React from 'react';
import "./navbar.css";
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        <Link className='desktopMenuListItem' to="home" smooth={true} duration={500}>Home</Link>
        <Link className='desktopMenuListItem' to="about" smooth={true} duration={500}>About</Link>
        <Link className='desktopMenuListItem' to="portfolio" smooth={true} duration={500}>Portfolio</Link>
        <Link className='desktopMenuListItem' to="clients" smooth={true} duration={500}>Clients</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={contactImg} alt='' className='desktopMenuImg'/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar