import React from 'react';
import LoginInput from '../component/Loginnput';

function LoginPage() {
  const onLogin = ({ email, password }) => {
    // eslint-disable-next-line no-console
    console.log('email:', email, 'password:', password);
  };
  return (
    <LoginInput login={onLogin} />
  );
}

export default LoginPage;
