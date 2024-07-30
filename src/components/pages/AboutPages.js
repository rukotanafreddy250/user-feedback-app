import { Link, NavLink } from 'react-router-dom';

import Card from '../shared/Card';

function AboutPages() {
  return (
    <Card>
      <div className='about'>
        <h1> About this project</h1>
        <p> this is a react app to leave feedback for a product</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to='/about'> Back To Home</Link>
        </p>
      </div>
      <Card>
        <NavLink to='/' activeClassName='active'>
          Home
        </NavLink>
        {/* <br /> */}
        &nbsp; &nbsp;
        <NavLink to='/about' activeClassName='active'>
          About
        </NavLink>
      </Card>
    </Card>
  );
}

export default AboutPages;
