function Header({ image }) {
  return (
    <section className="hero is-primary is-large">
      <div className="hero-head ">
        <div
          className="navbar"
          style={{ backgroundColor: 'lightgray', height: '80px' }}
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="!#">
                <img
                  src={image}
                  alt="Logo"
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    padding: '6px',
                  }}
                />
                <p className="title" style={{ color: 'black' }}>
                  Sahar Soltanmohammadi
                </p>
              </a>
              <span className="navbar-burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a
                  className="navbar-item is-active"
                  style={{ color: 'black' }}
                  href="!#"
                >
                  About
                </a>
                <a className="navbar-item" style={{ color: 'black' }} href="!#">
                  Skills
                </a>
                <a className="navbar-item" style={{ color: 'black' }} href="!#">
                  Projects
                </a>
                <a className="navbar-item" style={{ color: 'black' }} href="!#">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
