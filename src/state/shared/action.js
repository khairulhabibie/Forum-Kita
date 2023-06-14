import api from '../../utils/api';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveLeaderboardsActionCreator } from '../leaderboards/action';

function asyncPopulateUserThreadAndLeaderboards() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const leaderboards = await api.getLeaderboards();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  };
}

export default asyncPopulateUserThreadAndLeaderboards;
