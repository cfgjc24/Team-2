import React from 'react';
import logo from '../assets/firstgenerationinvestors_logo.jpeg';

//Landing page -- will contain view similar to current website iteration. Donate button. 
export default function Landing_Page() {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <nav className="landing-nav">
                    <div className="logo">
                        <img src={logo} alt="First Generation Investors Logo" />
                    </div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className="landing-main">
                <h1>Welcome to First Generation Investors!</h1>
                <p>First Generation Investors (FGI) is a non-profit 501(c)3 organization that teaches high school students the power of investing, and brings classroom lessons to life by providing students with real money to invest.
                </p>
                <a href="#services" className="cta-button">Learn More</a>
            </main>

            <section id="about" className="section">
                <h2>About Us</h2>
                <p>We teach high school kids about financial literacy and investment.</p>
            </section>

            <section id="donation_page" className="section">
                <h3>Consider helping us out with a donation.</h3>
                <button type="submit">Submit Donation</button>
                <p>We teach high school kids about financial literacy and investment.</p>
            </section>

            <section id="contact" className="section">
                <h2>Contact Us</h2>
                <h4> Mailing Address: 48 Wall Street, Suite 1100 </h4>
                <h4> New York, New York 10005 </h4>
                <h4> Email: Contact@FirstGenerationInvestors.com </h4>
            </section>

            <footer className="landing-footer">
                <p>&copy; {new Date().getFullYear()} First Generation Investors. All rights reserved.</p>
            </footer>
        </div>
    );
};

