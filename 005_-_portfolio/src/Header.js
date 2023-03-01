function Header({ image }) {
  return (
    <section className="hero is-primary is-large">
      <div className="hero-head ">
        <div className="navbar" navbar-height="100px">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img src={image} alt="Logo" />
                <p className="title">Sahar Soltanmohammadi</p>
              </a>
              <span className="navbar-burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">About</a>
                <a className="navbar-item">Skills</a>
                <a className="navbar-item">Projects</a>
                <a className="navbar-item">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
