import React, { Component } from 'react';

class Navbar extends Component{
  render(){
    return (
      <section className="hero d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row text-center justify-content-center text-white">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <h2 className="fwl">Find Your Next Home, Today.</h2>
              <form action="" className="form-group d-flex m-0 mt-3">
                <input type="text" className="form-control br0" placeholder="Search City, Zip, Neighborhood or MLS ID"/>
                <button className="btn bgr br0"><i className="fas fa-search text-white"></i></button>
              </form>
              <div className="d-flex justify-content-around text-center text-uppercase mt-4">
                <a href="#" className="tdn">
                  <div className="icon">
                    <img src="img/building-icon.png" className="img-fluid" alt=""/>
                    <p className="m-0 fz12  text-white">Find an office</p>
                  </div>
                </a>
                <a href="#" className="tdn">
                  <div className="icon">
                    <img src="img/home-icon.png" className="img-fluid" alt=""/>
                    <p className="m-0 fz12  text-white">Find Home Near me</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
  }
}

export default Navbar;
