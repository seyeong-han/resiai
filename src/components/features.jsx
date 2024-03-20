import React from 'react';

export const Features = (props) => {
    return (
        <div id="features" className="text-center">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                    <h2>Features</h2>
                </div>
                <div className="row">
                    {props.data
                        ? props.data.map((d, i) => (
                              <div key={`${d.title}-${i}`} className="row">
                                  <div className="col-xs-2 col-md-2 d-flex">
                                      <div className="thumbnail">
                                          <img
                                              src={d.img}
                                              alt="..."
                                              className="team-img"
                                          />{' '}
                                      </div>
                                  </div>
                                  <div
                                      className="col-xs-10 col-md-10 justify-content-start align-items-start"
                                      textAlign="left"
                                  >
                                      <h3>{d.title}</h3>
                                      <p>{d.text}</p>
                                  </div>
                              </div>
                          ))
                        : 'Loading...'}
                </div>
            </div>
        </div>
    );
};
