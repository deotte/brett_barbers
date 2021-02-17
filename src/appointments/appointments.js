import React, { Component } from 'react';

export default class Appointments extends Component {
  render() {
    return (
      <section className="appointments">
        <div className="content-wrapper">
          <div className="text-container">
            <h2>Book an Appointment</h2>
            <hr></hr>
            <p>Fusce enim purus, dapibus eu porta vel, semper id est.
            Nunc sem odio, placerat ut finibus et, auctor sed tortor.
            Mauris dictum mattis est, vel tincidunt odio sagittis ut.</p>
            <div className="contact-method">
              <span className="material-icons md-36">
                location_on
              </span>
              <span className="right">102 Main Street, Seymour, IN</span>
            </div>
            <div className="contact-method">
              <span className="material-icons md-36">
                email
              </span>
              <span className="right">fitforaking@gmail.com</span>
            </div>
            <div className="contact-method">
              <span className="material-icons md-36">
                phone
              </span>
              <span className="right">(812) 123-4567</span>
            </div>
            <div className="contact-method">
              <span className="material-icons md-36">
                access_time_filled
              </span>
              <span className="right">Monday - Saturday, 8 AM - 5 PM</span>
            </div>
            <a href="" className="top">
              <span className="material-icons md-36">
                thumb_up
            </span>
              <span className="right">Like us on Facebook</span>
            </a>
            <a href="" className="bottom">
              <span className="material-icons md-36">
                photo_camera
              </span>
              <span className="right">Follow us on Instagram</span>
            </a>
          </div>
          <div className="social-container">
            <div className="instagram-pictures">
              <div className="picture one"></div>
              <div className="picture two"></div>
              <div className="picture three"></div>
              <div className="picture four"></div>
              <div className="picture five"></div>
              <div className="picture six"></div>
              <div className="picture seven"></div>
              <div className="picture eight"></div>
              <div className="picture nine"></div>
              <div className="picture ten"></div>
              <div className="picture eleven"></div>
              <div className="picture twelve"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
