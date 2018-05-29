import { interval } from 'rxjs'
import { take, publish, refCount } from 'rxjs/operators'

let obs = interval(1000).pipe(
  take(3),
  publish(),
  refCount()
)

setTimeout(() => {
  obs.subscribe(data => console.log('sub1', data))
}, 1100)

setTimeout(() => {
  obs.subscribe(data => console.log('sub2', data))
}, 2100)
