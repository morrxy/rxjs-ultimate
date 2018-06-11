import { merge, of, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

let badStream$ = throwError('crash')
let goodStream$ = of(1, 2, 3)

let mergedPatched$ = merge(
  badStream$.pipe(catchError(err => of(err))),
  goodStream$
)
  .pipe(
    catchError(err => of(err))
  )

mergedPatched$.subscribe(
  data => console.log('data:', data),
  err => console.error('err:', err),
  () => console.log('patchedMerged completed')
)
