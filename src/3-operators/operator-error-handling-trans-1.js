import { throwError } from 'rxjs'

let error$ = throwError('crash')

error$.subscribe(
  data => console.log(data),
  err => console.log(err),
  () => console.log('complete')
)
