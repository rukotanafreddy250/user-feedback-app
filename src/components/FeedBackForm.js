import Card from './shared/Card';
import { useState, useContext, useEffect } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from './context/FeedbackContext';

function FeedBackForm(/*{handleAdd}*/) {
  const {addFeedback, feedBackEdit} = useContext(FeedbackContext);

  useEffect(() => {
    if(feedBackEdit.edit === true){
      setBtnDisabled(false);
      setText(feedBackEdit.item.text);
    }
  }, [feedBackEdit]);

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => { 
    if(text === '') {
        setBtnDisabled(true);
        setMessage(null);
    } else if(text !== '' && text.trim().length <= 10) {
        setMessage('Text must be at least 10 characters');
        setBtnDisabled(true);
    }else {
        setMessage(null);
        setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
        const newFeedBack = {
            text,
            rating
        }
        addFeedback(newFeedBack);
        setText('')
    }
    
  }  

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className='input-group'>
          <input
            type='text'
            onChange={handleTextChange}
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' version='primary' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;