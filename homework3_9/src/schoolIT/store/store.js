import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { ITSchool } from "../models";
import { reducer } from "./reducer";

const initState = {
  schools: [
    new ITSchool("First Demo School", "Elementary school of computer sciences", "DS1", 3, 15),
    new ITSchool("Art Direction School", "Web design school", "ADS", 2, 8),
    new ITSchool("Hogwarts Language School", "School of modern programming languages", "HL", 3, 15),
], 
  selectedSchool: null, 
  selectedCourse: null,
  history: [], 
};

const mw = [thunk];

export const store = createStore(reducer, initState, applyMiddleware(...mw));