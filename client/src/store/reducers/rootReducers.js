import { combineReducers } from "redux";
import ballroomReducer from "./ballroomReducer";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({ ballroomReducer, imageReducer });

export default rootReducer;
