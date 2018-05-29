import { Observable } from 'rxjs'

let stream$ = Observable.create((observer) => {
  observer.error('error message')
})

stream$.subscribe(
  (data) => console.log('Data', data),
  (error) => console.log('Error', error)
)
