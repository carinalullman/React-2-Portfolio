import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me on LinkedIn or Github!  Or email me at: CarinaL.Ullman@gmail.com
              </p>
            </div>
          </div>
          {/* <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  {resumeData.}
                </h4>
              </div>
            </aside>
          </div> */}
        </section>
        );
  }
}