import api from '../../utils';

const ActionType = {
  RECEIVE_USERS: 'RECEIVER_USER',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: { users },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
