import PropTypes from 'prop-types';

import filledStar from "../../assets/images/filledStar.png";
import emptyStar from "../../assets/images/emptyStar.png";


function Rating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <img src={filledStar} alt="star" className="filledStar" key={i} />
      );
    } else {
      stars.push(
        <img src={emptyStar} alt="star" className="emptyStar" key={i} />
      );
    }
  }

  return <div className="rating">{stars}</div>;
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
}


export default Rating;