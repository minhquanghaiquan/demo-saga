import {fork , take, call , put , delay, takeLatest ,select, takeEvery} from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import {getList, addTask, updateTask, deleteTask} from './../apis/task';
import {STATUS_CODE, API_ENDPOINT, STATUSES} from './../constants/index';
import { fetchListTaskSuccess, fetchListTaskFailed, filterTask, filterTaskSuccess, addTaskSuccess, addTaskFailed, fetchListTask, updateTaskSuccess, updateTaskFailed ,deleteTaskSuccess, deleteTaskFailed } from '../actions/task';
import {showLoading , hideLoading} from '../actions/ui';
import { hideModal } from '../actions/modal';

function * watchFetchListTaskAction() {
     while(true) {
          const action = yield take(taskTypes.FETCH_TASK); // khi gặp take hàm sẽ tạm dừng đến khi action trong take được gọi thì hàm sẽ thực hiện tiếp (chỉ theo dõi có 1 lần )
          yield put(showLoading());
          const {params }  = action.payload;
       
          yield put(showLoading());
          const res = yield call(getList , params); //call là blocking, sẽ dừng đến khi nào làm xong
          const {status , data} = res ;
          if(status === STATUS_CODE.SUCCESS) {
               //dispatch action 
               yield put(fetchListTaskSuccess(data)); //put dùng để dispatch action
          }else {
               yield put(fetchListTaskFailed(data));
          }
          yield delay(1000); //delay 1000s
          yield put(hideLoading());
     }
}

function * filterTaskSaga({payload}) {
     yield delay(200);
     const { keyword} = payload;
     yield put(fetchListTask({
               q: keyword
          })
     );
     // const list = yield select(state => state.task.listTask); //select lấy data từ store
     // const filterTask = list.filter(task => 
     //      task.title
     //           .trim()
     //           .toLowerCase()
     //           .includes(payload.keyword.trim().toLowerCase()));
     // yield put(filterTaskSuccess(filterTask));
};


function * addTaskSaga ({payload}) {
     const {title, description} = payload;
     yield put(showLoading);
     console.log(STATUSES[0].value);
     const res = yield call(addTask, {
          title,
          description,
          status: STATUSES[0].value,
     });
     const {data , status} = res;
     if(status === STATUS_CODE.CREATED) {
          yield put(addTaskSuccess(data));
          yield put(hideModal());
     }else {
          yield put(addTaskFailed(data));
     }
     yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
     const { title, description, status } = payload;
     const taskEditing = yield select(state => state.task.taskEditing);
     yield put(showLoading());
     const resp = yield call(
          updateTask,
          { title, description, status },
          taskEditing.id,
     );
     const { data, status: statusCode } = resp;
     if (statusCode === STATUS_CODE.SUCCESS) {
          yield put(updateTaskSuccess(data));
          yield put(hideModal());
     } else {
          yield put(updateTaskFailed(data));
     }
     yield delay(1000);
     yield put(hideLoading());
}
   
function* deleteTaskSaga({ payload }) {
     const { id } = payload;
     yield put(showLoading());
     const resp = yield call(deleteTask, id);
     const { data, status: statusCode } = resp;
     if (statusCode === STATUS_CODE.SUCCESS) {
          yield put(deleteTaskSuccess(id));
          yield put(hideModal());
     } else {
          yield put(deleteTaskFailed(data));
     }
     yield delay(1000);
     yield put(hideLoading());
}

function * rootSaga () {
     yield fork(watchFetchListTaskAction); //fork đảm bảo thực hiện song song cùng lúc nhiều hàm
     yield takeLatest(taskTypes.FILTER_TASK , filterTaskSaga); //taskLatest lấy kế quả cuối cùng, là nâng cao của fork, không cần vòng lặp vì nó bắt sau mội lẫn, ko như fork chỉ bắt 1 lần
     yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
     yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
     yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}

//takeEvery ngược lại với takeLatest , nó sẽ chạy liên tục không quan tâm đến acition trước đó đã done hay chưa

export default rootSaga;