// IMPORT GLOBAL STYLE-SHEET
import '../styles/Universal.scss';
// IMPORT REGISTER STYLE-SHEET
import '../styles/Login.scss';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
// IMPORT API
import { userLogin } from '../api';

const Login = ({
  username,
  password,
  setUsername,
  setPassword,
  setToken,
  token,
  setLoggedIn,
}) => {
  
  let navigate = useNavigate();

  // FUNCTIONS
  function loginInfoHandler(e) {
    e.preventDefault();
  userLogin(
      username,
      password,
      setPassword,
      setUsername,
      setLoggedIn,
      setToken
    );
    
    navigate('/profile');
  }
  


  function usernameDataHandler(e) {
    setUsername(e.target.value);
    
  }

 function userPassDataHandler(e) {
    setPassword(e.target.value);
  }

  // LOGIN RENDER
  return (
    <>
      <section className='login'>
        <h1>
          <FaUser /> Login
        </h1>
        <p>Please login an existing User</p>
      </section>
      <section className='form'>
        <form onSubmit={loginInfoHandler}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Enter a User Name'
              onChange={usernameDataHandler}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Enter a Password'
              onChange={userPassDataHandler}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
            <Link to='/register'>
              <p className='create-user'>
                Don't have an account yet? Click here to Register!
              </p>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
