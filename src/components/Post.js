import {
  useParams,
  Navigate,
  useNavigate,
  Route,
  Routes,
} from 'react-router-dom';
import NotFound from './NotFound';

function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const status = 404;

  const onClick = () => {
    console.log('hello');
    navigate('/about');
  };

  // if(status !== 404) {
  //     return <Navigate to='/NotFound' />
  // }

  return (
    <div>
      <h1>Post {params.id}</h1>
      <button onClick={onClick}>click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello</h1>}></Route>
      </Routes>
    </div>
  );
}
export default Post;
