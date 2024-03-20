import React from 'react';

export const About = (props) => {
    console.log(props);
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-text">
                        {/* <h2>{props.data.paragraph}</h2> */}
                        <h2>Why Resia?</h2>
                        <div className="row">
                            {props.data
															? props.data.Why.map((d, i) => (
                                <div
                                    key={`${d.title}-${i}`}
                                    className="col-xs-6 col-md-3"
                                >
                                    <div className="thumbnail">
                                        <img
                                            src={d.img}
                                            alt="..."
                                            className="team-img"
                                        />{' '}
                                    </div>
                                    <div className="service-desc">
                                        <h3>{d.title}</h3>
                                        <p>{d.text}</p>
                                    </div>
                                </div>
                            ))
													: "Loading..."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
