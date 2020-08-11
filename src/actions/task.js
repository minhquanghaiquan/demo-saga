import * as taskApis from "./../apis/task";
import * as taskConstants from "./../constants/task";

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = (err) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      err,
    },
  };
};

// export const fetchListTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then((res) => {
//         dispatch(fetchListTaskSuccess(res.data));
//       })
//       .catch((err) => {
//         dispatch(fetchListTaskFailed(err));
//       });
//   };
// };
