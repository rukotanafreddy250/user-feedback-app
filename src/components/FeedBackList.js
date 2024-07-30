import React from 'react';
import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import PropTypes from 'prop-types';
import FeedBackItems from './FeedBackItems';
import FeedbackContext from './context/FeedbackContext';

function FeedbackList({ /*feedBackData, handleDelete*/ }) {
  const { feedBackData } = useContext(FeedbackContext);

  if (!feedBackData || feedBackData.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div>
      <AnimatePresence>
        {feedBackData.map((Data) => (
          <motion.div
            key={Data.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItems
              item={Data}
              // handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// FeedbackList.propTypes = {
//   feedBackData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };

export default FeedbackList;
