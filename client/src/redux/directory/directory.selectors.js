import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  selectDirectory,
  (directory) => Object.values(directory.sections)
);
