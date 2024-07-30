import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AboutPages from './pages/AboutPages';
import Card from './shared/Card';

function AbouticonLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30}/>
      </Link>
    </div>
  );
}

export default AbouticonLink;
