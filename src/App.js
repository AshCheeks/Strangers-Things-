import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import { Navbar, Home, Login, Register, Posts, Profile } from './components';
import PrivateRoutes from './util/PrivateRoutes';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
const App = () => {
  // STATES
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [messages, setMessages ] =useState([]);

  

  // APP RENDER
  return (
    <Router>
      <div className='App'>
        <Navbar
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setToken={setToken}
        />
        <Routes>
          {/* {PRIVATE ROUTES} */}
          <Route
            path='/profile'
            element={
              <Profile username={username} token={token} loggedIn={loggedIn} messages={messages} setMessages={setMessages} />
            }
          />
          useRoutes([
            <Route
            path='/'
            element={
              <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                token={token}
                setToken={setToken}
                setLoggedIn={setLoggedIn}
              />
            }
          />
           <Route
            path='/login'
            element={
              <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                token={token}
                setToken={setToken}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          ])
          <Route
            path='/Register'
            element={
              <Register
                username={username}
                password={password}
                token={token}
                setToken={setToken}
                setUsername={setUsername}
                setPassword={setPassword}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path='/posts/'
            element={
              <Posts
                allPosts={allPosts}
                setAllPosts={setAllPosts}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
