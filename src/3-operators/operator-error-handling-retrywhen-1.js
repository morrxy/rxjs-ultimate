import { of } from 'rxjs'
import { map, retryWhen } from 'rxjs/operators'

let values$ = of(1, 2, 3, 4).pipe(
  map(val => {
    if (val === 2) {
      throw 'err'
    } else return val
  }),
  retryWhen(stream => {
    return stream
  })
)

values$.subscribe(
  data => console.log('Retry when - data', data),
  err => console.error('Retry when - Err', err)
)
