function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Services we Offer</h2>
        <hr></hr>
        <p>Fusce enim purus, dapibus eu porta vel, semper id est.
        Nunc sem odio, placerat ut finibus et, auctor sed tortor.
          Mauris dictum mattis est, vel tincidunt odio sagittis ut.</p>
        <button>Book an Appointment</button>
      </div>
      <div className="services-wrapper">
        <div className="services-content">
          <div className="service">
            <h3>Haircut</h3>
            <h3 className="dots">.....................................................................</h3>
            <h3 className="color">$ 20</h3>
          </div>
          <div className="service">
            <h3>Kid's Haircut</h3>
            <h3 className="dots">............................................................</h3>
            <h3 className="color">$ 15</h3>
          </div>
          <div className="service">
            <h3>Buzzcut</h3>
            <h3 className="dots">....................................................................</h3>
            <h3 className="color">$ 15</h3>
          </div>
          <div className="service">
            <h3>Beard & Neck Trim</h3>
            <h3 className="dots">..................................................</h3>
            <h3 className="color">$ 10</h3>
          </div>
          <div className="service">
            <h3>Straight Razor Shave</h3>
            <h3 className="dots">...............................................</h3>
            <h3 className="color">$ 20</h3>
          </div>
          <div className="service">
            <h3>Special Cut</h3>
            <h3 className="dots">...............................................................</h3>
            <h3 className="color">$ 25</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
