import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, mergeMap, tap } from 'rxjs/operators';
import {
  saveExamResult,
  saveExamResultFailure,
  saveExamResultSuccess,
} from './examresult.actions';

@Injectable()
export class examResultEffects {
  constructor(private actions$: Actions) {}

  saveExamResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveExamResult),
      mergeMap((action) =>
        of(action.saveExam).pipe(
          delay(1000),
          map((data) => saveExamResultSuccess({ saveExam: data })),
          catchError((error) => of(saveExamResultFailure({ error })))
        )
      )
    )
  );

  // updateExam$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(updateExam),
  //     mergeMap((action) =>
  //       of(action.exam).pipe(
  //         delay(1000),
  //         map((data) => updateExamSuccess({ exam: data })),
  //         catchError((error) => of(updateExamFailure({ error })))
  //       )
  //     )
  //   )
  // );

  // loadExams$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadExams),
  //     mergeMap(() =>
  //       of([]).pipe(
  //         delay(1000),
  //         map((data) => loadExamsSuccess()),
  //         catchError((error) => of(loadExamsFailure({ error })))
  //       )
  //     )
  //   )
  // );

  // deleteExam$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(deleteExam),
  //     mergeMap((action) =>
  //       of(action.id).pipe(
  //         delay(1000),
  //         map((examId) => deleteExamSuccess({ id: examId })),
  //         catchError((error) => of(deleteExamFailure({ error })))
  //       )
  //     )
  //   )
  // );
}
