import changeTheEmail from "./from";
import ChangeTheName from "./name";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  email:changeTheEmail,
  name:ChangeTheName

})
export default rootReducer;
