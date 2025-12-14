import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="form-control form-control-lg rounded-pill mb-3" placeholder="Eg. how do I activate F&O" style={{maxWidth: '90%'}} />
          <div className="d-flex flex-wrap gap-3 mt-2">
            <a href="#" className="text-white">Track account opening</a>
            <a href="#" className="text-white">Track segment activation</a>
            <a href="#" className="text-white">Intraday margins</a>
            <a href="#" className="text-white">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-2 fw-bold mb-3">Featured</h1>
          <ol>
            <li>
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;