import React from 'react';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home-banner">
                <div className="inside-banner">
                    <div className="banner-content">
                        <h1>Welcome to Our Diagnostic Centre </h1>
                        <p>The quality of lab tests at Labaid Diagnostics is ensured at every step from sample collection to testing to reporting.</p>
                        <button className="btn btn-success">Get Appointment</button>
                    </div>
                </div>

            </div>
            <Services></Services>
        </div>
    );
};

export default Home;