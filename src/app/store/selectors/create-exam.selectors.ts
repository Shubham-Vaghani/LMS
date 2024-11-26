import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExamState } from '../models/exam.model';

export const selectExamState = createFeatureSelector<ExamState>('CreateExam');

export const selectData = createSelector(
  selectExamState,
  (state) => state.data
);
export const selectLoading = createSelector(
  selectExamState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectExamState,
  (state) => state.error
);
