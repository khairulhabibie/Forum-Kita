import React from 'react';
import RegisterInput from '../component/RegisterInput';

function RegisterPage() {
  const onRegister = ({ name, email, password }) => {
    // eslint-disable-next-line no-console
    console.log(name, email, password);
  };
  return (
    <RegisterInput register={onRegister} />
  );
}

export default RegisterPage;
