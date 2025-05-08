import React from "react";

const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
          className="portfolio-items"
        >
          {props?.data?.map((item, index) => {
            return (
              <div
                key={index}
                // style={{
                //   width: "100%",
                //   height: "500px" /* Set the fixed height you prefer */,
                // }}
              >
                <div className="testimonial">
                  <div className="testimonial-image">
                    {" "}
                    <img src={item.img} alt="" />{" "}
                  </div>
                  <div className="testimonial-content">
                    <p>"{item.text}"</p>
                    <div className="testimonial-meta"> - {item.name} </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        s
      </div>
    </div>
  );
};

export default Testimonials;
