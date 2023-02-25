import { all } from "redux-saga/effects";
import { incrementCount,decrementCount ,makeZero} from "./sagas/count.saga";

export default function* rootSaga() {
  yield all([incrementCount(),decrementCount(),makeZero()]);
}
