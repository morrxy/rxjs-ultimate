import { interval } from 'rxjs'
import { take, publish } from 'rxjs/operators'

let stream$ =
interval(1000).pipe(
  take(4),
  publish()
)

stream$.connect()

setTimeout(() => {
  stream$.subscribe(data => console.log(data))
}, 2000)
