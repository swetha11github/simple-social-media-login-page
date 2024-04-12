import React, {useState} from 'react';
import './Login.css';

function Login({onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
    }
return(
  <div className='login-container'>
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange}></input>
      </div>
      <div className='form-group'>
        <label>Password:</label>
        <input type = "password" value={password} onChange={handlePasswordChange}></input>
      </div>
      <div className='form-group'>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);
}
export default Login;