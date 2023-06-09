import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREADS: 'ADD_THREADS',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREADS,
    payload: {
      thread,
    },
  };
}

function asyncAddThread({ title, body, category = '' }) {
  return async (dispatch) => {
    try {
      const thread = api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
};
