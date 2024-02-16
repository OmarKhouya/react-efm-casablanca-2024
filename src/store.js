import { legacy_createStore as createStore } from "redux";
import LivresReducer from "./LivresReducer"

const store = createStore(LivresReducer)

export default store