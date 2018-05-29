import { of } from 'rxjs'
import { max } from 'rxjs/operators'

let stream$ = of(5, 4, 7, -1).pipe(
  max()
)

stream$.subscribe(data => console.log(data))

function comparer (x, y) {
  if (x > y) {
    return 1
  } else if (x < y) {
    return -1
  } else return 0
}

of(5, 4, 7, -1).pipe(
  max(comparer)
)
  .subscribe(data => console.log(data))

function comparer2 (x, y) {
  if (x.age > y.age) {
    return 1
  } else if (x.age < y.age) {
    return -1
  } else return 0
}

of(
  { name: 'chris', age: 37 },
  { name: 'chross', age: 32 })
  .pipe(
    max(comparer2)
  )
  .subscribe(data => console.log(data))
