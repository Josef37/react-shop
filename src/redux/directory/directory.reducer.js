import { DIRECTORY_SECTIONS } from "./directory.data";

const INITIAL_STATE = {
  sections: DIRECTORY_SECTIONS,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
