import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FeedBackForm from './components/FeedBackForm';
import FeedBackStats from './components/FeedBackStats';
import FeedBackList from './components/FeedBackList';
import AboutPages from './components/pages/AboutPages';
import { useState } from 'react';
import FeedBackData from './data/FeedBackData';
import { FeedbackProvider } from './components/context/FeedbackContext';
import AbouticonLink from './components/AbouticonLink';
import Card from './components/shared/Card';
import { NavLink } from 'react-router-dom';
import Post from './components/Post';
import NotFound from './components/NotFound';

function App() {
  // const [feedBackData, setFeedbackData] = useState(FeedBackData);

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedbackData([newFeedback, ...feedBackData]);
  // };

  // const DeleteFeedBack = (id) => {
  //   if (window.confirm(' Are you sure you want to delete?')) {
  //     setFeedbackData(feedBackData.filter((item) => item.id != id));
  //   }
  // };



  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='App'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedBackForm 
                  // handleAdd={addFeedback}
                   />
                  <FeedBackStats 
                  // feedBack={feedBackData} 
                  />
                  <FeedBackList
                    // feedBackData={feedBackData}
                    // handleDelete={DeleteFeedBack}
                  />
                  <Card>
                    <NavLink to='/' activeClassName='active'>
                      Home
                    </NavLink>
                    &nbsp;
                    &nbsp;
                    <NavLink to='/about' activeClassName='active'>
                      About
                    </NavLink>
                  </Card>
                  <AbouticonLink />
                </>
              }
            />
            <Route path='/about' element={<AboutPages />} />
            <Route path='/post/:id' element={<Post />}></Route>
            {/* <Route path='/post/*' element={<Post />}></Route> */}
            <Route path='/notfound' element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
