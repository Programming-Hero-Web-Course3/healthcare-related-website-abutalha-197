import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch(`./database.json`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="services">
            <div className="py-5 container">
                <div className="row">
                    <h2 className="py-3 mb-4">Our Services</h2>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;