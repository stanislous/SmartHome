import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return (
      <footer className="bgb py-5">
        <div className="container">
          <div className="row text-white fz12">
            <div className="col-md-4">
              <img src="img/logo.png" className="img-fluid" alt=""/>
              <ul className="list-unstyled mt-5">
                <li className="py-2"><i className="fas fa-map-marker-alt mr-2"></i> 8388 E Hartford Dr, Ste 100  |  Scottsdale, AZ 85255</li>
                <li className="py-2"><i className="fas fa-phone mr-2"></i> 800.865.9025</li>
                <li className="py-2"><i className="fas fa-envelope mr-2"></i> Info@HomeSmart.com</li>
              </ul>
            </div>
            <div className="col-md-4 text-uppercase">
              <p className="fwb mt-5 m-0">menu</p>
              <div className="row m-0">
                <div className="col-6 pl-0">
                  <ul className="list-unstyled mt-5 ">
                    <li className="pb-2 pt-1"><a href="#" className="text-white tdn">Buying</a></li>
                    <li className="py-2"><a href="#" className="text-white tdn">Selling</a></li>
                    <li className="py-2"><a href="#" className="text-white tdn">our team</a></li>
                    <li className="py-2"><a href="#" className="text-white tdn">join</a></li>
                    <li className="py-2"><a href="#" className="text-white tdn">HomeSmart Helps</a></li>
                  </ul>
                </div>
                <div className="col-6 pl-0">
                  <ul className="list-unstyled mt-5 ">
                    <li className="pb-2 pt-1"><a href="#" className="text-white tdn">contact</a></li>
                    <li className="py-2"><a href="#" className="text-white tdn">about</a></li>
                    <li className="py-2"><a href="#" className="text-white tdn">careers</a></li>
                    <li className="py-2"><a href="#" className="text-white tdn">blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-uppercase">
              <p className="fwb mt-5 m-0">follow us</p>
              <div className="row m-0">
                <div className="col-12 pl-0">
                  <ul className="list-unstyled list-inline mt-5 ">
                    <li className="list-inline-item px-1 pb-2 pt-1"><a href="#" className="text-white tdn"><i className="fab fa-2x fa-facebook-f"></i></a></li>
                    <li className="list-inline-item px-1 py-2"><a href="#" className="text-white tdn"><i className="fab fa-2x fa-twitter"></i></a></li>
                    <li className="list-inline-item px-1 py-2"><a href="#" className="text-white tdn"><i className="fab fa-2x fa-instagram"></i></a></li>
                    <li className="list-inline-item px-1 py-2"><a href="#" className="text-white tdn"><i className="fab fa-2x fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item px-1 py-2"><a href="#" className="text-white tdn"><i className="fab fa-2x fa-pinterest"></i></a></li>
                    <li className="list-inline-item px-1 py-2"><a href="#" className="text-white tdn"><i className="fab fa-2x fa-youtube"></i></a></li>
                    <li className="list-inline-item px-1 py-2"><a href="#" className="text-white tdn"><i className="fab fa-2x fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        </div>
      </footer>
  );
  }
}

export default Footer;
