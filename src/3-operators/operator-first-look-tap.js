import { of } from 'rxjs'
import { tap } from 'rxjs/operators'

let stream$ = of(1, 2, 3).pipe(
  tap(value => {
    console.log('emits every value', value)
  })
)

stream$.subscribe(
  data => console.log(data)
)
