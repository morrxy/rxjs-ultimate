import { throwError, of, onErrorResumeNext } from 'rxjs'

let badStream$ = throwError('crash')
let secondBadStream$ = throwError('bam')
let gloriaGaynorStream$ = of('I will survive')

let emitSurviving = onErrorResumeNext(
  badStream$,
  secondBadStream$,
  gloriaGaynorStream$
)

emitSurviving.subscribe(
  data => console.log(data),
  err => console.error(err),
  () => console.log('Survival of the fittest, completed')
)
