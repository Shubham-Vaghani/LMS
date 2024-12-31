import { createAction, props } from '@ngrx/store';

// #region create
export const createExam = createAction(
  '[EXAM] Create Exam',
  props<{ exam: any }>()
);
export const createExamSuccess = createAction(
  '[EXAM] Create Exam Success',
  props<{ exam: any }>()
);
export const createExamFailure = createAction(
  '[EXAM] Create Exam Failure',
  props<{ error: string }>()
);

// #region update
export const updateExam = createAction(
  '[EXAM] Update Exam',
  props<{ exam: any }>()
);
export const updateExamSuccess = createAction(
  '[EXAM] Update Exam Success',
  props<{ exam: any }>()
);
export const updateExamFailure = createAction(
  '[EXAM] Update Exam Failure',
  props<{ error: string }>()
);

// #region delete
export const deleteExam = createAction(
  '[EXAM] Delete Exam',
  props<{ id: string }>()
);
export const deleteExamSuccess = createAction(
  '[EXAM] Delete Exam Success',
  props<{ id: string }>()
);
export const deleteExamFailure = createAction(
  '[EXAM] Delete Exam Failure',
  props<{ error: string }>()
);

// #region get
export const loadExams = createAction('[EXAM] Load Exams');
export const loadExamsSuccess = createAction('[EXAM] Load Exams Success');
export const loadExamsFailure = createAction(
  '[EXAM] Load Exams Failure',
  props<{ error: string }>()
);
