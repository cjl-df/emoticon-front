import { createStore } from "redux";
import AppReducer from "./src/reducer/index";

const store = createStore(AppReducer, window.STATE_FROM_SERVER);

export default store;
