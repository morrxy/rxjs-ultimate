import { of } from 'rxjs'
import { map, retryWhen, delay, scan } from 'rxjs/operators'

let ATTEMPT_COUNT = 3
let DELAY = 1000
let delayWithTimes$ = of(1, 2, 3).pipe(
  map(val => {
    if (val === 2) {
      throw 'err'
    } else {
      return val
    }
  }),
  retryWhen(e => {
    return e.pipe(
      scan((errorCount, err) => {
        if (errorCount >= ATTEMPT_COUNT) {
          throw err
        }
        return errorCount + 1
      }, 0),
      delay(DELAY)
    )
  })
)

delayWithTimes$.subscribe(
  val => console.log('delay and times - val', val),
  err => console.error('delay and times - err', err)
)
