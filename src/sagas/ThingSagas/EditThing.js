import { call, put } from 'redux-saga/effects';
import thingActions from '../../redux/thing';
import apiActions from '../../redux/api';

export default function* edit(api, { editedThing }) {
  console.log('editedThing: ', editedThing);
  const response = yield call(() => api.editThing(editedThing));

  if (response.ok) {
    yield [
      put(thingActions.editThingSuccess(response.data)),
      put(apiActions.apiSuccess())
    ];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}
