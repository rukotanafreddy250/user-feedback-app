import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedBackData, setFeedbackData] = useState([
    {
      id: 1,
      text: 'this is from context 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'this is from context 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'this is from context 3',
      rating: 8,
    },
  ]);

  const DeleteFeedBack = (id) => {
    if (window.confirm(' Are you sure you want to delete?')) {
      setFeedbackData(feedBackData.filter((item) => item.id !== id));
    }
  };

  const [feedBackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const editFeedBack = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbackData([newFeedback, ...feedBackData]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedBackData,
        DeleteFeedBack,
        addFeedback,
        editFeedBack,
        feedBackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
