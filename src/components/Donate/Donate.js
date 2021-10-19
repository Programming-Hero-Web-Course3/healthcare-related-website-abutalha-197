import React from "react";
import "./Donate.css";
import one from '../../images/one.jpg';
import two from '../../images/two.jpg';
import three from '../../images/three.jpg';
const Donate = () => {
    return (
        <div className="donation">
            <div className="donate">
                <h1>Show that You Care Today</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 amount">
                <div className="col">
                    <div className="card h-100">
                        <img src={one} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title">$500</h2>
                            <p className="card-text">
                                A donation is a gift for charity, humanitarian aid, or to
                                benefit a cause. A donation may take various forms, including
                                money, alms, services, or goods such as clothing, toys, food, or
                                vehicles
                            </p>
                        </div>
                        {/* <div className="card-footer"> */}
                        <a href="#" className="btn btn-primary">
                            Donate
                        </a>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={two} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title">$250</h2>
                            <p className="card-text">
                                Donations are given without return consideration. This lack of
                                return consideration means that, in common law, an agreement to
                                make a donation is an "imperfect contract void for want of
                                consideration.
                            </p>
                        </div>
                        <a href="#" className="btn btn-primary">
                            Donate
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={three} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title">$1000</h2>
                            <p className="card-text">
                                By donating to Savana, you are helping us to reach more people
                                and to expand our services in this vital area. We are very
                                grateful to receive what you can afford to give – every penny
                                counts!
                            </p>
                        </div>
                        <a href="#" className="btn btn-primary">
                            Donate
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;