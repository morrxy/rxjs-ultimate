import { Observable } from 'rxjs'

let stream$ = Observable.create((observer) => {
  observer.next(1)
})

stream$.subscribe((data) => {
  console.log('Data', data)
})
