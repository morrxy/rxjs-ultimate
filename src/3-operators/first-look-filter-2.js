import { of } from 'rxjs'
import { tap, filter } from 'rxjs/operators'

let stream$ = of(1, 2, 3, 4, 5).pipe(
  tap((value) => {
    console.log('tap', value)
  }),
  filter(value => {
    return value % 2 === 0
  })
)

stream$.subscribe(
  value => console.log('value', value)
)
