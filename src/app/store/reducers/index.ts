import { ActionReducerMap } from '@ngrx/store';
import { examReducer } from './exam.reducer';
import { ExamState } from '../models/exam.model';

export interface AppState {
  exam: ExamState;
}

export const reducers: ActionReducerMap<AppState> = {
  exam: examReducer,
};
