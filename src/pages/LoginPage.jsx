import React from 'react';
import { useDispatch } from 'react-redux';
import LoginInput from '../component/Loginnput';
import { asyncSetAuthUser } from '../state/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };
  return (
    <LoginInput login={onLogin} />
  );
}

export default LoginPage;
