import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/images/logo/logo.jpeg';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import commetmentSheet from "../../../src/assets/Commitment Sheet- Template.pdf"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const togglePaymentDropdown = () => {
        setIsPaymentDropdownOpen(!isPaymentDropdownOpen);
    };

    const openModal = (url) => {
        
        setModalContent(url);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"> <img src={logo} alt="logo img" className="logoImg" /></Link>
            </div>
            <div className="nav-links">
            <Link to="/eoi-form">EOI Form</Link>
                <Link to="/member-application">Member Application Form</Link>
                <a href="#" onClick={() => openModal("https://bnipayments.nidmm.org/commitment.pdf")}>Interview Sheet</a>
                <a href="#" onClick={() => openModal("https://bnipayments.nidmm.org/interview.pdf")}>Commitment Sheet</a>
               
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes className="icon-animation" /> : <FaBars className="icon-animation" />}
            </div>
            <div className={`side-menu ${isMenuOpen ? 'open' : 'close'}`}>
                <img src={logo} alt="logo img" className="side-menu-logo" style={{ borderBottom: "1px solid #ccc" }} />

                {/* First Dropdown */}
                <div className="dropdown">
                    <button className="dropdown-button" onClick={toggleDropdown} style={{ alignItems: 'center' }}>
                        Basic Services {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                          <Link to="/eoi-form" onClick={toggleMenu}>EOI Form</Link>
                        <Link to="/member-application" onClick={toggleMenu}>Member Application Form</Link>
                        <a href="#" onClick={() => openModal("/Interview Sheet-Template.pdf")}>Interview Sheet</a>
                        <a href="#" onClick={() => openModal("/Commitment Sheet-Template.pdf")}>Commitment Sheet</a>
                      
                    </div>
                </div>

                {/* Second Dropdown */}
                <div className="dropdown">
                    <button className="dropdown-button" onClick={togglePaymentDropdown} style={{ alignItems: 'center' }}>
                        All Payments {isPaymentDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <div className={`dropdown-content ${isPaymentDropdownOpen ? 'open' : ''}`}>
                        <Link to="/new-member-payment" onClick={toggleMenu}>New Member Payment</Link>
                        <Link to="/renewal-payment" onClick={toggleMenu}>Renewal Payment</Link>
                        {/* <Link to="/renewal-payment-with-late-fee" onClick={toggleMenu}>Renewal Payment With Late Fee</Link> */}
                        <Link to="/all-training-payments" onClick={toggleMenu}>Training & Meeting Payments</Link>
                        <Link to="/meeting-payment" onClick={toggleMenu}>Meeting Payment</Link>
                        <Link to="/visitors-payments" onClick={toggleMenu}>Visitor Payments</Link>
                    </div>
                </div>
            </div>

            {/* Modal for displaying PDF */}
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close-modal" onClick={closeModal}>&times;</span>
                        <iframe src={modalContent} title="PDF Viewer" width="100%" height="500px" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
