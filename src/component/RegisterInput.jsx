import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <div className="min-h-screen  font-bold">
      <h3 className="pb-5 text-3xl">Register</h3>
      <form action="" className="flex flex-col gap-4">
        <input type="text" value={name} onChange={onNameChange} placeholder="nama" className="px-5 py-2 border-2 border-gray-300 border-solid" />
        <input type="email" value={email} onChange={onEmailChange} placeholder="email" className="px-5 py-2 border-2 border-gray-300 border-solid" />
        <input type="password" value={password} onChange={onPasswordChange} placeholder="password" className="px-5 py-2 border-2 border-gray-300 border-solid" />
        <button type="submit" onClick={() => register({ name, email, password })} className="p-1 text-xl text-white bg-blue-900">Register</button>
      </form>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
