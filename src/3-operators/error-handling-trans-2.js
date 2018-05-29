import { of, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

let error$ = throwError('crash')

let errorPatched$ = error$.pipe(
  catchError(err => of('Patched' + err))
)

errorPatched$.subscribe((data) => console.log(data))
