import './ProjectCard.css';
import PropTypes from 'prop-types';

const ProjectCard = ({ logo, name, content, link }) => {
  return (
    <div>
      {
        <div data-testid="projectCard" className="project-card">
          <img data-testid={`projectCardLogo`} src={logo} alt={`Company-logo`} className="project-card-logo" />
          <h2 data-testid={`projectCardName`}>{name}</h2>
          <div className="skills-item-proficiency"></div>
          <div>
            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="/link.svg" alt="" /> View Project
            </a>
          </div>
        </div>
      }
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: '#',
};

export default ProjectCard;
