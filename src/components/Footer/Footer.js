import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white px-5 pt-5 pb-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h3>TalhaMediCare Diagnostic</h3>
                        <p>Privacy Policy</p>
                        <p>Terms & Condition</p>
                        <p>Cookies Policy</p>
                    </div>
                    <div className="col-lg-4 pt-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <button className="btn btn-info mt-3">Subscribe Now</button>

                    </div>
                    <div className="col-lg-4">
                        <h3>Our Address</h3>
                        <p>Plot # 01 & 03, Road # 04.</p>
                        <p>Jangail,Sylhet 3100</p>
                        <p>Bangladesh</p>
                    </div>
                </div>
                <p className="text-center m-0">All Copyright &copy; reserved 2021</p>
            </div>
        </div>
    );
};

export default Footer;