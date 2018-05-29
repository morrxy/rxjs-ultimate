import { fromEvent, interval } from 'rxjs'
import { buffer } from 'rxjs/operators'

let clicks$ = fromEvent(document.getElementById('btn'), 'click')

let scissor$ = interval(300)

clicks$
  .pipe(
    buffer(scissor$)
  )
  .subscribe((value) => {
    if (value.length === 1) {
      console.log('single click')
    } else if (value.length === 2) {
      console.log('double click')
    } else if (value.length === 3) {
      console.log('triple click')
    }
  })
