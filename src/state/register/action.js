import api from '../../utils';

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

export default asyncRegisterUser;
