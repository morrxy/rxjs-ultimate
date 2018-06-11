// cold observable example
import { of } from 'rxjs'

let stream$ = of(1, 2, 3)

stream$.subscribe(
  data => console.log(data),
  err => console.error(err),
  () => console.log('completed')
)

stream$.subscribe(
  data => console.log(data),
  err => console.error(err),
  () => console.log('completed')
)
