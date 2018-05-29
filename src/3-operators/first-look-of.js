import { of } from 'rxjs'

let stream$ = of(1, 2, 3, 4, 5)

stream$.subscribe(
  data => console.log(data)
)
