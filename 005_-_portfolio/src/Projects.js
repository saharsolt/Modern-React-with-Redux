import bulma from 'bulma/css/bulma.css';

function Projects({ title, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="project picture"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default Projects;
