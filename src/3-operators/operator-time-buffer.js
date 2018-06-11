import { interval } from 'rxjs'
import { take, buffer } from 'rxjs/operators'

let scissor$ = interval(500)

let emitter$ = interval(100).pipe(
  take(10),
  buffer(scissor$)
)

emitter$.subscribe(data => console.log(data))
