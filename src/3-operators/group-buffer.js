import { timer, interval } from 'rxjs'
import { buffer } from 'rxjs/operators'

let breakWhen$ = timer(1000)

let stream$ = interval(200).pipe(
  buffer(breakWhen$)
)

stream$.subscribe((data) => console.log('values', data))
