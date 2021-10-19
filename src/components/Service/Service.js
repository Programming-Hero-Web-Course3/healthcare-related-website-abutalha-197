import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { id,title, short_description, img} = props.service;
    return (
        <div className="col-lg-6 service p-3">
            <h4>{title}</h4>
            <img className="img-fluid" src={img} alt="" />
            <p className="text-dark">{short_description}</p>
            <Link to={`/service/${id}`}><button className="btn btn-success mb-5">See Details</button></Link>
        </div>
    );
};

export default Service;