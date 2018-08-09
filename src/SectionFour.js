import React, { Component } from 'react';

class SectionFour extends Component{
  render(){
    return (
      <section className="MAP py-5">
        <div className="container text-center">
          <h2 className="fwl">The Fastest Growing Real Estate Franchise in the Nation.</h2>
          <a href="#" className="btn bgr text-white br0 text-uppercase px-3 mt-4">Find an office</a>
          <div className="row text-uppercase mt-5">
            <div className="col-lg-2 d-flex flex-row flex-lg-column px-1 justify-content-around">
              <div className="prt my-2">
                <i className="fas fa-user fa-3x cr"></i>
                <h2 className="fwb mb-0 mt-2">14,600</h2>
                <p >real state agents</p>
              </div>
              <div className="prt my-2">
                <i className="fas fa-star fa-2x text-white bgr br50 px-2 py-2"></i>
                <h2 className="fwb mb-0 mt-2">19</h2>
                <p >States</p>
              </div>
              <div className="prt my-2">
                <i className="fas fa-map-marker-alt cr fa-3x "></i>
                <h2 className="fwb mb-0 mt-2">133</h2>
                <p >offices</p>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="px-1 px-md-4">
                <img src="img/map.jpg" className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
  }
}

export default SectionFour;
