import { createReducer, on } from '@ngrx/store';
import {
  createExam,
  createExamFailure,
  createExamSuccess,
  updateExam,
  updateExamFailure,
  updateExamSuccess,
  deleteExam,
  deleteExamFailure,
  deleteExamSuccess,
  loadExams,
  loadExamsFailure,
  loadExamsSuccess,
} from './exam.actions';
import { ExamState } from './exam.model';

export const initialExamState: ExamState = {
  data: [],
  loading: false,
  error: null,
};

export const examReducer = createReducer(
  initialExamState,
  on(createExamSuccess, (state, { exam }) => ({
    ...state,
    loading: false,
    data: [...state.data, exam],
  })),
  on(updateExamSuccess, (state, { exam }) => ({
    ...state,
    loading: false,
    data: state.data.map((item) => (item._id === exam._id ? exam : item)),
  })),
  on(deleteExamSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    data: state.data.filter((item) => item._id !== id),
  })),
  on(loadExamsSuccess, (state) => ({
    ...state,
    loading: false,
    data: state.data,
  })),
  on(createExam, updateExam, deleteExam, loadExams, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    createExamFailure,
    updateExamFailure,
    deleteExamFailure,
    loadExamsFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  )
);
