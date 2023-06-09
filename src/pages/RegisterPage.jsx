import React from 'react';
// import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import RegisterInput from '../component/RegisterInput';
import { asyncRegisterUser } from '../state/users/action';

function RegisterPage() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    // eslint-disable-next-line no-console
    console.log({ name, email, password });
    // navigate('/');
  };
  return (
    <RegisterInput register={onRegister} />
  );
}

export default RegisterPage;
