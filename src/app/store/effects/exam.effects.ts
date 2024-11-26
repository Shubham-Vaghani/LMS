import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';
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

@Injectable()
export class createExamEffects {
  createExam$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createExam),
      mergeMap((action) =>
        of(action.exam).pipe(
          delay(1000),
          map((data) => createExamSuccess({ exam: data })),
          catchError((error) => of(createExamFailure({ error })))
        )
      )
    )
  );

  updateExam$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateExam),
      mergeMap((action) =>
        of(action.exam).pipe(
          delay(1000),
          map((data) => updateExamSuccess({ exam: data })),
          catchError((error) => of(updateExamFailure({ error })))
        )
      )
    )
  );

  loadExams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadExams),
      mergeMap(() =>
        of([]).pipe(
          delay(1000),
          map((data) => loadExamsSuccess({ exams: data })),
          catchError((error) => of(loadExamsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
