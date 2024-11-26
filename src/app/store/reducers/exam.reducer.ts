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
} from '../actions/exam.actions';
import { ExamState } from '../models/exam.model';

export const initialState: ExamState = {
  data: [],
  loading: false,
  error: null,
};

export const examReducer = createReducer(
  initialState,
  on(createExamSuccess, (state, { exam }) => ({
    ...state,
    loading: false,
    data: [...state.data, exam],
  })),
  on(updateExamSuccess, (state, { exam }) => ({
    ...state,
    loading: false,
    data: state.data.map((item) => (item.id === exam.id ? exam : item)),
  })),
  on(deleteExamSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    data: state.data.filter((item) => item.id !== id),
  })),
  on(loadExamsSuccess, (state, { exams }) => ({
    ...state,
    loading: false,
    data: exams,
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
