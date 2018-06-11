import { interval } from 'rxjs'
import { take, publish } from 'rxjs/operators'

let publisher$ =
interval(1000).pipe(
  take(5),
  publish()
)

publisher$.subscribe(
  data => console.log('subscriber from first minute', data),
  err => console.log(err),
  () => console.log('completed')
)

setTimeout(() => {
  publisher$.subscribe(
    data => console.log('subscriber from 2nd minute', data),
    err => console.log(err),
    () => console.log('completed')
  )
}, 3000)

publisher$.connect()
