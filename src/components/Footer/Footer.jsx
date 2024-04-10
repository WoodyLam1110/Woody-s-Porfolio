import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="footer">
      <ul>
        {links.map((link, index) => (
          <li key={index} data-testid={`footerLink${index}`}>
            <a href={link.url}>{link.title}</a>

          </li>
        ))}
<p data-testid="footerContent">© {year} All rights reserved</p>
      </ul>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  // finish me
  links: [],
};

export default Footer;
