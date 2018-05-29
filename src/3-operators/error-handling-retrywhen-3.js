import { interval } from 'rxjs'
import { take, map, retryWhen, delay } from 'rxjs/operators'

let values$ = interval(1000).pipe(
  take(5)
)

let errorFixed = false

values$.pipe(
  map((val) => {
    if (errorFixed) {
      return val
    } else if (val > 0 && val % 2 === 0) {
      errorFixed = true
      throw { error: 'error' }
    } else {
      return val
    }
  }),
  retryWhen((err) => {
    console.log('retrying the entire sequence')
    return err.pipe(delay(200))
  })
)
  .subscribe((val) => { console.log('value', val) })
