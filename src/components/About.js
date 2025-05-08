import React from "react";

const About = ({ data }) => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="https://img.freepik.com/free-photo/visagiste-applying-makeup_1153-2793.jpg?ga=GA1.1.303569808.1732640886&semt=ais_hybrid&w=740" className="img-responsive" alt="About Us" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{data?.paragraph || "Loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style row">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data?.Why?.map((item, index) => (
                      <li key={index}>{item}</li>
                    )) || "Loading..."}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data?.Why2?.map((item, index) => (
                      <li key={index}>{item}</li>
                    )) || "Loading..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
