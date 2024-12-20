import PropTypes from 'prop-types'

function Header({ text = 'Feedback UI', bgcolor = 'rgba(0,0,0,0.4)', textColor = '#ff6a95'}) {
  return (
    <header >
      <div className='container'>
        <h2> { text } </h2>
      </div>
    </header>
  );
}

// Header.defaultProps = {
//     text: 'Feedback UI',
//     bgcolor: 'rgba(0,0,0,0.4)',
//     textColor: '#ff6a95'
// }

Header.propTypes = {
    text: PropTypes.string,
}


export default Header;
