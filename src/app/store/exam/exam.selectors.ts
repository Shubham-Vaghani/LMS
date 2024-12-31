import { createFeatureSelector, createSelector } from '@ngrx/store';

const examState = createFeatureSelector('exam');

export const examStateSelector = createSelector(examState, (state) => state);
