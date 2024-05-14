
import PropTypes from 'prop-types';
  
function Hero({ title, src, alt }) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <img src={src} alt={alt} />
    </div>
  );
}
Hero.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

  export default Hero;