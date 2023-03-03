import HeartImage from './images/heart.svg';

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: 'lightgray', height: '150px' }}
    >
      <div className="content has-text-centered">
        <p>
          Made by <strong>Sahar Soltanmohammadi </strong>
          <img
            src={HeartImage}
            alt="Heart"
            style={{ width: '15px', height: '15px' }}
          ></img>
        </p>
        <a href="https://www.linkedin.com/in/sahar-soltanmohammadi-she-her-56676199/">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
