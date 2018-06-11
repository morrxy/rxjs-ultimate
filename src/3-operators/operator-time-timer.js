import { timer } from 'rxjs'
import { take } from 'rxjs/operators'

let stream$ = timer(1000)

stream$.subscribe(data => console.log(data))

let moreThanOne$ = timer(2000, 500).pipe(
  take(3)
)

moreThanOne$.subscribe(data => console.log('timer with args', data))
