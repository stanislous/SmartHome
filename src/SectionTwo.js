import React, { Component } from 'react';

class SectionTwo extends Component{
  render(){
    return (
      <section className="SUB">
        <div className="container-fluid">
          <div className="row text-center text-white">
            <div className="col-md-4 bx bx1 d-flex flex-column justify-content-center">
              <h2 className="fwl text-uppercase">buying</h2>
              <div className="mt-2">
                <a href="#" className="btn text-uppercase text-white br0">get started</a>
              </div>
            </div>
            <div className="col-md-4 bx bx2 d-flex flex-column justify-content-center">
              <h2 className="fwl text-uppercase">Selling</h2>
              <div className="mt-2">
                <a href="#" className="btn text-uppercase text-white br0">find an agent</a>
              </div>
            </div>
            <div className="col-md-4 bx bx3 d-flex flex-column justify-content-center">
              <h2 className="fwl text-uppercase">our team</h2>
              <div className="mt-2">
                <a href="#" className="btn text-uppercase text-white br0">why homesmart</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
  }
}

export default SectionTwo;
