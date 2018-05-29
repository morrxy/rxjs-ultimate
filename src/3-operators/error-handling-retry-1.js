import { of } from 'rxjs'
import { map } from 'rxjs/operators'

let stream$ = of(1, 2, 3).pipe(
  map(value => {
    if (value > 2) {
      throw 'error'
    } else {
      return value
    }
  })
)

stream$.subscribe(
  data => console.log(data),
  err => console.log(err)
)
