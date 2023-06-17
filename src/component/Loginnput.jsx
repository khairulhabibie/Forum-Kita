import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <>
      <h3 className="title">Login</h3>
      <form className="form">
        <input type="email" value={email} onChange={onEmailChange} placeholder="email" className="input" />
        <input type="password" value={password} onChange={onPasswordChange} placeholder="password" className="input" />
        <button type="submit" onClick={() => login({ email, password })} className="p-1 text-xl text-white bg-blue-900">Login</button>
      </form>
    </>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
