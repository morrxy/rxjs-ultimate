import { Observable } from 'rxjs'

let stream$ = Observable.create((observer) => {
  observer.next(1)
  observer.complete()
})

stream$.subscribe(
  (data) => console.log('Data', data),
  (error) => console.log('Error', error),
  () => console.log('Complete')
)
