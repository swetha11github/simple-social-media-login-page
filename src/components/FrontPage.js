import React, {useState} from 'react';
import Login from './Login';

function FrontPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    console.log("Email:", email);
    console.log("Password:", password);
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  };
return(
    <div>
      <h1>Social Media</h1>
      {loggedIn ? (
        <div>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
          {loggedIn || (
            <Login onLogin={handleLogin}/>
          )}
        </div>
      )}
    </div>
  );
}  
export default FrontPage;