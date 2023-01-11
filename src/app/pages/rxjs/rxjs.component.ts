import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() { 

    this.retornaObservable().pipe(
      retry()
    ).subscribe(
      valor => console.log('Subs:', valor),
      error => console.warn('Error:', error),
      () => console.info('Obs terminado')
    )
  }

  retornaIntervalo(): Observable<number>{
    return interval(1000)
            .pipe(
              take(4),
              map( valor => {
                return valor + 1;
              })
            );
  }


  retornaObservable(): Observable<number>{
    let i = -1

    return new Observable<number>( observer => {
      
      setInterval( () => {
        i++;
        observer.next(i);


      }, 1000)
      
    });

  }


}
