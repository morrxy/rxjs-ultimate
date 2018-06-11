import { of } from 'rxjs'
import { map } from 'rxjs/operators'

let stream$ = of(1, 2, 3).pipe(
  map(x => x + '!!!')
)

stream$.subscribe((val) => {
  console.log(val)
})
