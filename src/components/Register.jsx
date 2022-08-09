// IMPORT GLOBAL STYLE-SHEET
import '../styles/Universal.scss';
// IMPORT REGISTER STYLE-SHEET
import '../styles/Register.scss';
import { FaUser } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import registerUser func from api
import { registerUser } from '../api/';

const Register = ({
  username,
  password,
  setToken,
  setUsername,
  setPassword,
  setLoggedIn,
  loggedIn,
}) => {
  // Setting a variable for useNavigate Function
  // let navigate = useNavigate();

  // FUNCTIONS
  function registerUserHandler(e) {
    e.preventDefault();
    registerUser(username, password, setToken, setLoggedIn);

  }

  function newUserHandler(e) {
    setUsername(e.target.value);
  }
  function newUserPassHandler(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <section className='registration'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create a User Name</p>
      </section>
      <section className='form'>
        <form onSubmit={registerUserHandler}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Enter a User Name'
              onChange={newUserHandler}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='name'
              placeholder='Enter a Password'
              onChange={newUserPassHandler}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
            <Link to='/login'>
              <p className='login-user'>
                Already have an account? Log in here!
              </p>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
