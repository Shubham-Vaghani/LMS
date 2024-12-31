import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './pages/main/main.component';
import { StudentLoginComponent } from './pages/student/student-login/student-login.component';
import { TeacherLoginComponent } from './pages/teacher/teacher-login/teacher-login.component';
import { ComponentsModule } from './components/components.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './store/index';
import { examEffects } from './store/exam/exam.effects';
import { examResultEffects } from './store/examresult/examresult.effects';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ComponentsModule,
    MatButtonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([examEffects, examResultEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
