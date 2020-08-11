import {fork , take, call , put } from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import {getList} from './../apis/task';
import {STATUS_CODE} from './../constants/index';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';

function * watchFetchListTaskAction() {
     yield take(taskTypes.FETCH_TASK); // khi gặp take hàm sẽ tạm dừng đến khi action trong take được gọi thì hàm sẽ thực hiện tiếp
     const res = yield call(getList); //call là blocking, sẽ dừng đến khi nào làm xong
     const {status , data} = res ;
     if(status === STATUS_CODE.SUCCESS) {
          //dispatch action 
          yield put(fetchListTaskSuccess(data)); //put dùng để dispatch action
     }else {
          yield put(fetchListTaskFailed(data));
     }
     console.log('res' , res);
}

function * watchCreateTaskAction() {
     console.log('ddd');
}

function * rootSaga () {
     yield fork(watchFetchListTaskAction); //fork đảm bảo thực hiện song song cùng lúc nhiều hàm
     yield fork(watchCreateTaskAction);
}

export default rootSaga;