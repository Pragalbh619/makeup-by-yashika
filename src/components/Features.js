import React from "react";

const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className=" section-title">
          <h2>Features</h2>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
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
                style={{
                  // width: "100%",
                  // height: "500px" /* Set the fixed height you prefer */,
                }}
              >
                <i className={item.icon}></i>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
