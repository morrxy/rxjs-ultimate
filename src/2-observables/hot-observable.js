import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

let liveStreaming$ = interval(1000).pipe(
  take(5)
)

liveStreaming$.subscribe(
  data => console.log('subscriber from first minute', data),
  err => console.error(err),
  () => console.log('#1 subscriber completed')
)

setTimeout(() => {
  liveStreaming$.subscribe(
    data => console.log('subscriber from 2nd minute', data),
    err => console.error(err),
    () => console.log('#2 subscriber completed')
  )
}, 2000)
