// import PropTypes from 'prop-types';
import {useContext} from 'react'
import FeedbackContext from './context/FeedbackContext';

function FeedBackStats() {
  const {feedBackData} = useContext(FeedbackContext);
  // calculate rating avg
  let average =
  feedBackData.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedBackData.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedBackData.length} Reviews </h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  );
}

// FeedBackStats.propTypes = {
//   feedBack: PropTypes.array.isRequired,
// };

export default FeedBackStats;
