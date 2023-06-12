import { combineReducers } from "redux";
import updateCount from "./updateCount";

const allReducers = combineReducers({
  count: updateCount,
});

export default allReducers;
