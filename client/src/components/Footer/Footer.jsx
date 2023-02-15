import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import React from "react";
import "./Footer.scss";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        This section comprises the about section of the eCommerce web app. 
                        Highly curated content by our content writers.
                    </div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">NDA Khadakwasla Pune, 411023</div>
                    </div>

                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">+91 9999999999</div>
                    </div>

                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: care@shoptronics.com</div>
                    </div>
                </div>

                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">
                        Headphones
                    </div>
                    <div className="text">
                        Smart Watches
                    </div>
                    <div className="text">
                        Bluetooth Speakers
                    </div>
                    <div className="text">
                        Wireless Earbuds
                    </div>
                    <div className="text">
                        Home Theatres
                    </div>
                    <div className="text">
                        Projectors
                    </div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">
                        Home
                    </div>
                    <div className="text">
                        About
                    </div>
                    <div className="text">
                        Privacy Policy
                    </div>
                    <div className="text">
                        Returns
                    </div>
                    <div className="text">
                        Terms & Conditions
                    </div>
                    <div className="text">
                        Contact Us
                    </div>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        shopTronics 2023. Premium eCommerce Solutions 
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    )
};

export default Footer;
