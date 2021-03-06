import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(documents: any[], searchText: string) {

    if ( documents != null ) {
        if (searchText == null) {
            return documents;
        } else {
            return documents.filter( document => document.title
                                            .toLocaleLowerCase()
                                            .indexOf(searchText.toLocaleLowerCase()) !== -1  );
        }
    }
  }

}
