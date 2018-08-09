import React, { Component } from 'react';

class SectionThree extends Component{
  render(){
    return (
      <section className="ABT bgbl">
        <div className="container-fluid">
          <div className="row justify-content-lg-end">
            <div className="col-lg-6 p-0 d-block d-lg-none">
              <img src="img/about1.jpg" className="w-100" alt=""/>
            </div>
            <div className="col-lg-6 py-4">
              <h2 className="fwl pt-3">The #1 Real Estate Brokerage <br className="dn d-md-block"/> in the Valley.</h2>
              <p>In 2000, Matt Widdows, founder of HomeSmart, believed that the real estate industry had been left behind in technology and systems to support real estate agents in their day to day business needs. Agents and their clients lived and communicated online and they now expected to find answers and resources at their fingertips. Matt wanted to combine traditional real estate concepts with innovation and a technology approach. This thought gave birth to the HomeSmart “low-fee, high-value” brokerage model.</p>
              <p>Matt believed in the opportunities the real estate industry provided and wanted a brokerage model that welcomed every individual. His vision was to utilize technologies that supported systems and services to make both the agent and the brokerage successful. This approach would provide long-term growth and stability for the brokerage and ensure success for the agent.</p>
              <p>“Low-fee, high-value” brokerage services has deeper meaning to our mission. It’s who we are and guides everything we do. See, anyone can charge low fees but it’s the way that we are able to consistently deliver high value that is the real “secret sauce” that makes HomeSmart special.</p>
            </div>
          </div>
        </div>
      </section>
  );
  }
}

export default SectionThree;
