import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css'
const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [servicesDetail, setServicesDetail] = useState([]);
    const [singleService, setSingleService] = useState([]);
    useEffect(() => {
        fetch(`/database.json`)
            .then(res => res.json())
            .then(data => setServicesDetail(data))
    }, []);
    useEffect( () => {
        const single = servicesDetail.find(service => service.id == serviceId)
        setSingleService(single)

    },[servicesDetail])
    return (
        <div className="detail-service">
            <div className="container">
                <div className="row">
                    <h1>{singleService?.title}</h1>
                    <img src={singleService?.img} alt="" className="img-fluid" />
                    <p>{singleService?.description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;