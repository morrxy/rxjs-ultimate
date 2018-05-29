import { of } from 'rxjs'
import { filter } from 'rxjs/operators'

let stream$ = of(1, 2, 3, 4, 5).pipe(
  filter(value => {
    return value % 2 === 0
  })
)

stream$.subscribe(
  data => console.log(data)
)
