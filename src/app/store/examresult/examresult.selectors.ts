import { createFeatureSelector, createSelector } from '@ngrx/store';

const examResultState = createFeatureSelector('examResult');

export const examResultStateSelector = createSelector(
  examResultState,
  (state) => state
);
