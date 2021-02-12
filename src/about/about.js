import icon from '../images/barbershop_icon.png';

function About() {
  return (
    <section className="about">
      <div className="sticker">
        <div className="sticker-logo">
          <img src={icon} alt="Barbershop icon"></img>
        </div>
        <div className="hours">
          <h2>Open Hours</h2>
          <hr></hr>
          <span>Monday - Saturday</span>
          <span>8 am - 5 pm</span>
        </div>
        <div className="shop">
          <h2>Shop</h2>
          <hr></hr>
          <span>102 Main Street</span>
          <span>Seymour, IN 47274</span>
        </div>
      </div>
      <div className="about-text">
        <div className="about-content">
          <h2>About Us</h2>
          <hr></hr>
          <p>Fusce enim purus, dapibus eu porta vel, semper id est.
          Nunc sem odio, placerat ut finibus et, auctor sed tortor.
          Mauris dictum mattis est, vel tincidunt odio sagittis ut.
          Fusce enim purus, dapibus eu porta vel, semper id est.
          Nunc sem odio, placerat ut finibus et, auctor sed tortor.
          Mauris dictum mattis est, vel tincidunt odio sagittis ut.</p>
        </div>
      </div>
    </section>
  )
}

export default About;
