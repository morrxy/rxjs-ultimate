import { of } from 'rxjs'
import { reduce } from 'rxjs/operators'

of(1, 2, 3, 4)
  .pipe(
    reduce((accumulated, current) => accumulated + current)
  )
  .subscribe(data => console.log(data))

of(
  { name: 'chris' },
  { age: 11 }
).pipe(
  reduce(
    (acc, curr) => Object.assign({}, acc, curr)
  )
)
  .subscribe(data => console.log(data))
