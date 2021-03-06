import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModalModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// RUTAS
import { APP_ROUTING } from './app.router';

// PIPES
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { AutoresPipe } from './pipes/autores.pipe';
import { SearchByAuthorPipe } from './pipes/filter-authors.pipe';
import { SearchByYearPipe } from './pipes/filter-year-pipe';
import { SearchByTitlePipe } from './pipes/filter-title-pipe';
import { SearchByJournalPipe } from './pipes/filter-journal.pipe';
import { SearchByColcienciasPipe } from './pipes/filter-colciencias.pipe';
import { SearchBySjrPipe } from './pipes/filter-sjr.pipe';
import { SearchByConferencePipe } from './pipes/filter-conference.pipe';
import { SearchByTypePipe } from './pipes/filter-type.pipe';

// SERVICES
import { AuthorsService } from './services/authors.service';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';

// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddAuthorComponent } from './components/add/add-author/add-author.component';
import { AddBookComponent } from './components/add/add-book/add-book.component';
import { AddChapterComponent } from './components/add/add-chapter/add-chapter.component';
import { AddJournalComponent } from './components/add/add-journal/add-journal.component';
import { AddConferenceComponent } from './components/add/add-conference/add-conference.component';
import { AddThesisComponent } from './components/add/add-thesis/add-thesis.component';
import { AddSoftwareComponent } from './components/add/add-software/add-software.component';
import { AddPrototypeComponent } from './components/add/add-prototype/add-prototype.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CapitalizadoPipe,
    AutoresPipe,
    SearchByAuthorPipe,
    SearchByTitlePipe,
    SearchByYearPipe,
    SearchByJournalPipe,
    SearchByColcienciasPipe,
    SearchBySjrPipe,
    SearchByConferencePipe,
    SearchByTypePipe,
    AddAuthorComponent,
    AddBookComponent,
    AddChapterComponent,
    AddJournalComponent,
    AddConferenceComponent,
    AddThesisComponent,
    AddSoftwareComponent,
    AddPrototypeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING,
    NgbModalModule,
    NgbTypeaheadModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [
    AuthorsService,
    AuthService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
