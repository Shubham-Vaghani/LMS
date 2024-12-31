import { ActionReducerMap } from '@ngrx/store';
import { examReducer } from '../store/exam/exam.reducer';
import { ExamState } from '../store/exam/exam.model';
import { localStorageSync } from 'ngrx-store-localstorage';
import { MetaReducer } from '@ngrx/store';
import { SaveExamState } from './examresult/examresult.model';
import { examResultReducer } from './examresult/examresult.reducer';

export interface AppState {
  exam: ExamState;
  examResult: SaveExamState;
}

const syncReducer = localStorageSync({
  keys: ['exam', 'examResult'],
  rehydrate: true,
});

export const reducers: ActionReducerMap<AppState> = {
  exam: examReducer,
  examResult: examResultReducer,
};
export const metaReducers: MetaReducer<AppState>[] = [syncReducer];
