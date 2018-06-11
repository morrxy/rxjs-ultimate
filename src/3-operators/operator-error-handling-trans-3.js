import { of, merge, throwError } from 'rxjs'

let badStream$ = throwError('crash')
let goodStream$ = of(1, 2, 3)

let merged$ = merge(
  badStream$,
  goodStream$
)

merged$.subscribe(
  data => console.log('data:', data),
  err => console.error('err:', err),
  () => console.log('merge completed')
)
