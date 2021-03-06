import { Observable } from 'rxjs'
import { share } from 'rxjs/operators'

let stream$ = Observable.create((observer) => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
})
  .pipe(
    share()
  )

stream$.subscribe(
  (data) => console.log('subscriber 1', data),
  err => console.error(err),
  () => console.log('completed')
)

stream$.subscribe(
  (data) => console.log('subscriber 2', data),
  err => console.error(err),
  () => console.log('completed')
)
