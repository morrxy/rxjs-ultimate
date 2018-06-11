import { merge, of } from 'rxjs'
import { delay } from 'rxjs/operators'

let merged$ = merge(
  of(1).pipe(delay(500)),
  of(3, 2, 5)
)

let observer = {
  next: data => console.log(data)
}

merged$.subscribe(observer)
