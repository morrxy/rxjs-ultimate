import { interval } from 'rxjs'
import { take, delay } from 'rxjs/operators'

var start = new Date()
let stream$ = interval(500).pipe(
  take(3)
)

stream$.pipe(
  delay(300)
)
  .subscribe((x) => {
    console.log('val', x)
    console.log(new Date() - start)
  })
