import { FaTimes, FaEdit } from 'react-icons/fa'; // Imported FaTimes icon from react-icons/fa
import React from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedBackItems({ item /*handleDelete */ }) {
  const { DeleteFeedBack, editFeedBack } = useContext(FeedbackContext);
  return (
    <Card reserve={true}>
      {' '}
      {/* Added 'reserve={true}' to the Card component */}
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => DeleteFeedBack(item.id)} className='close'>
        <FaTimes color='purple' />{' '}
        {/* Used FaTimes component from react-icons/fa */}
      </button>
      <button className='edit' onClick={() => editFeedBack(item) }>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedBackItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired, // Defined propTypes for 'item'
  handleDelete: PropTypes.func.isRequired, // Defined propTypes for 'handleDelete'
};

export default FeedBackItems;
