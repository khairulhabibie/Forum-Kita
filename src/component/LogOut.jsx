import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from '../state/authUser/action';

function LogOut() {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(asyncUnsetAuthUser());
  };
  return (
    <button type="submit" onClick={() => onLogOut}>LogOut</button>
  );
}

export default LogOut;
