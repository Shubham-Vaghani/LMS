import { createReducer, on } from '@ngrx/store';
import {
  saveExamResult,
  saveExamResultFailure,
  saveExamResultSuccess,
} from './examresult.actions';
import { SaveExamState } from './examresult.model';

export const initialExamState: SaveExamState = {
  data: [],
  loading: false,
  error: null,
};

export const examResultReducer = createReducer(
  initialExamState,
  on(saveExamResultSuccess, (state, { saveExam }) => ({
    ...state,
    loading: false,
    data: saveExam,
  })),
  // on(updateExamSuccess, (state, { exam }) => ({
  //   ...state,
  //   loading: false,
  //   data: state.data.map((item) => (item._id === exam._id ? exam : item)),
  // })),
  // on(deleteExamSuccess, (state, { id }) => ({
  //   ...state,
  //   loading: false,
  //   data: state.data.filter((item) => item._id !== id),
  // })),
  // on(loadExamsSuccess, (state) => ({
  //   ...state,
  //   loading: false,
  //   data: state.data,
  // })),
  on(saveExamResult, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    saveExamResultFailure,
    // updateExamFailure,
    // deleteExamFailure,
    // loadExamsFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  )
);
