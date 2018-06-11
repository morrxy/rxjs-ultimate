import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

interval(100)
// .subscribe(data => console.log(data))

interval(100)
  .pipe(take(3))
  .subscribe(data => console.log(data))
