import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private AuthorsCol: AngularFirestoreCollection<Author>;  // COLECCIÓN DE AUTORES DE LA BASE DE DATOS
  private AuthorsObs: Observable<Author[]>; // OBSERVABLE DONDE SE VAN A ALMACENAR LOS AUTORES
  private AuthorsList: Author[]  = []; // CONTENDRÁ LOS AUTORES SI NO SE DESEAN COMO OBSERVABLE
  private AuthorsNames: Array<string> = []; // ARREGLO CON SOLO LOS NOMBRES DE LOS AUTORES

  constructor( db: AngularFirestore ) {
    this.AuthorsCol = db.collection<Author>('AUTHORS');
    this.AuthorsObs = this.AuthorsCol.valueChanges();
    this.AuthorsObs.subscribe( authors => {
      authors.forEach( author =>  {
        let flag = 0;
        for ( let i = 0; i < this.AuthorsList.length; i++ ) {
          if ( this.AuthorsList[i].id === author.id ) {
            flag++;
          }
        }
        if ( flag === 0 ) {
          this.AuthorsList.push(author);
        }
      });
    });
    this.AuthorsObs.subscribe( authors => {
      authors.forEach(author => {
        this.AuthorsNames.push(author.name);
      });
    });
  }

  getAuthors() {
    return this.AuthorsList;
  }

  getAuthorsNames() {
    return this.AuthorsNames;
  }

}


